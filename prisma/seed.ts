import "dotenv/config";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'superadmin@sulutinvest.id',
      password: 'superadmin123', // Catatan: Di produksi harus di-hash!
      name: 'Super Admin SULUT',
      role: 'SUPERADMIN',
    },
    {
      email: 'admin@sulutinvest.id',
      password: 'admin123',
      name: 'Admin SULUT',
      role: 'ADMIN',
    },
    {
      email: 'pemda@sulutinvest.id',
      password: 'pemda123',
      name: 'Pemda SULUT',
      role: 'PEMDA',
    },
    {
      email: 'umkm@sulutinvest.id',
      password: 'umkm123',
      name: 'UMKM SULUT',
      role: 'UMKM',
    },
  ];

  console.log('Memulai seeding user...');

  for (const user of users) {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: user as any,
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
  });
