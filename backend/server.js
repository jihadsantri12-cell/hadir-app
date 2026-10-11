const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API HADIR berjalan' });
});

app.use('/api/auth', authRoutes);

app.get('/api/dashboard', (req, res) => {
  res.json({
    totalKaryawan: 50,
    hadir: 45,
    terlambat: 3,
    izin: 1,
    sakit: 1,
    tanggalMasehi: '2026-10-11',
    tanggalHijriyah: '15 Jumadil Awal 1448'
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
