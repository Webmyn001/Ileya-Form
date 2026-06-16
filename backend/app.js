require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const ileyafo = require('./routes/ileyafo');

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
}));
app.use(express.json());

app.use('/api', async (req, res, next) => {
  if (!req.path.startsWith('/form')) return next();
  try {
    await connectDB();
  } catch (err) {
    return res.status(503).json({
      error: 'Database unavailable',
      message: process.env.MONGODB_URI
        ? 'Could not connect to database. Please try again.'
        : 'Server not fully configured. Contact admin.',
    });
  }
  next();
});

app.use('/api/form', ileyafo);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) res.status(404).json({ message: 'Not found' });
  });
});

app.use(errorHandler);

module.exports = app;
