const { Client } = require('pg');
require('dotenv').config();

// Script ini menggunakan library 'pg' murni untuk melewati batasan Prisma 7
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

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

  console.log('Menghubungkan langsung ke PostgreSQL via pg...');
  await client.connect();

  for (const user of users) {
    try {
      // Menggunakan query SQL murni untuk insert ke tabel "User"
      const query = `
        INSERT INTO "User" (id, email, password, name, role, "createdAt", "updatedAt")
        VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
        ON CONFLICT (email) DO NOTHING;
      `;
      const values = [user.id, user.email, user.password, user.name, user.role];
      
      const res = await client.query(query, values);
      
      if (res.rowCount > 0) {
        console.log(`Berhasil membuat user: ${user.email} (${user.role})`);
      } else {
        console.log(`User sudah ada: ${user.email}`);
      }
    } catch (err) {
      console.error(`Gagal membuat user ${user.email}:`, err.message);
    }
  }

  await client.end();
  console.log('Seeding selesai!');
}

main().catch((e) => {
  console.error('Error saat menjalankan script:', e);
  process.exit(1);
});
