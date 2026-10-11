# HADIR App

Sistem absensi dan laporan otomatis dengan kalender Hijriyah.

## Stack yang dipakai
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Express
- Database: PostgreSQL
- Auth: JWT

## Struktur proyek
- `backend/` untuk API
- `frontend/` untuk aplikasi web
- `database/` untuk schema SQL

## Cara menjalankan

### 1) Backend
```bash
cd backend
npm install
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3) Database PostgreSQL
Buat database `hadir_db` lalu import:
```bash
psql -U postgres -d hadir_db -f database/schema.sql
```

## Login demo
Email: `admin@hadir.com`
Password: `123456`

## Catatan
Untuk versi awal, API login sudah dibuat dengan fallback demo agar bisa langsung dijalankan tanpa database yang siap.
