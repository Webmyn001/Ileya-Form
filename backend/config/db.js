const mongoose = require('mongoose');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    // Check if connection is still alive
    if (cached.conn.connection && cached.conn.connection.readyState === 1) {
      return cached.conn;
    }
    // Stale connection — reset
    cached.conn = null;
    cached.promise = null;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI not set — skipping database connection');
    return null;
  }

  // If previous promise was rejected, reset so we can retry
  if (cached.promise) {
    try {
      await cached.promise;
    } catch {
      cached.promise = null;
    }
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    }).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
    console.log(`MongoDB connected: ${cached.conn.connection.host}`);
    return cached.conn;
  } catch (err) {
    cached.promise = null;
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
};

module.exports = connectDB;
