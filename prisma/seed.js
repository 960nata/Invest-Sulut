const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

// Pada Prisma 7, jika URL tidak ada di schema.prisma, 
// kita wajib menggunakan adapter untuk koneksi langsung.
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const users = [
    {
      id: 'clv_superadmin_01',
      email: 'superadmin@sulutinvest.id',
      password: 'superadmin123',
      name: 'Super Admin SULUT',
      role: 'SUPERADMIN',
    },
    {
      id: 'clv_admin_01',
      email: 'admin@sulutinvest.id',
      password: 'admin123',
      name: 'Admin SULUT',
      role: 'ADMIN',
    },
    {
      id: 'clv_pemda_01',
      email: 'pemda@sulutinvest.id',
      password: 'pemda123',
      name: 'Pemda SULUT',
      role: 'PEMDA',
    },
    {
      id: 'clv_umkm_01',
      email: 'umkm@sulutinvest.id',
      password: 'umkm123',
      name: 'UMKM SULUT',
      role: 'UMKM',
    },
  ];

  console.log('Memulai seeding user via Prisma 7 Adapter...');

  for (const user of users) {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: user,
      });
      console.log(`Berhasil membuat user: ${user.email} (${user.role})`);
    } else {
      console.log(`User sudah ada: ${user.email}`);
    }
  }

  console.log('Seeding selesai!');
}

main()
  .catch((e) => {
    console.error('Error saat seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
