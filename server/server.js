require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test DB Connection
pool.getConnection()
  .then((conn) => {
    console.log('Connected to MySQL database!');
    conn.release();
  })
  .catch((err) => {
    console.error('Error connecting to MySQL database:', err);
  });

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching projects' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM skills ORDER BY category, proficiency DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching skills' });
  }
});

app.get('/api/experience', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM experience ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching experience' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }
  
  try {
    const [result] = await pool.query(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(201).json({ success: true, messageId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error saving message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
