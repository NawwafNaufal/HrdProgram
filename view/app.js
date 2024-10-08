// app.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'rahasia_yang_sangat_aman';

// Middleware
app.use(helmet()); // Menambahkan header keamanan
app.use(bodyParser.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100 // batasi setiap IP hingga 100 permintaan per jendela
});
app.use(limiter);

// Database simulasi
const users = [];
const items = [];

// Middleware autentikasi
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes

// Registrasi
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send('Pengguna berhasil didaftarkan');
  } catch {
    res.status(500).send('Terjadi kesalahan saat mendaftarkan pengguna');
  }
});

// Login
app.post('/login', async (req, res) => {
  const user = users.find(user => user.username === req.body.username);
  if (user == null) {
    return res.status(400).send('Tidak dapat menemukan pengguna');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).send('Password salah');
    }
  } catch {
    res.status(500).send('Terjadi kesalahan saat login');
  }
});

// Mendapatkan semua item (memerlukan autentikasi)
app.get('/items', authenticateToken, (req, res) => {
  res.json(items);
});

// Menambahkan item baru (memerlukan autentikasi)
app.post('/items', authenticateToken, (req, res) => {
  const item = { id: Date.now(), name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

// Memulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});