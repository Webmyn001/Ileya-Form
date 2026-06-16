const mongoose = require('mongoose');
const IleyaForm = require('../models/IleyaForm');

// In-memory fallback when MongoDB is unavailable
let memoryStore = [];
let memCounter = 0;
let dbReady = false;

const isConnected = () => mongoose.connection.readyState === 1;

const waitForDb = async (timeout = 8000) => {
  if (isConnected()) return true;
  if (dbReady) return true;
  const start = Date.now();
  while (Date.now() - start < timeout) {
    await new Promise(r => setTimeout(r, 300));
    if (isConnected()) {
      dbReady = true;
      return true;
    }
  }
  return false;
};

exports.getForms = async (req, res, next) => {
  try {
    if (await waitForDb()) {
      const forms = await IleyaForm.find().sort({ createdAt: -1 });
      return res.json(forms);
    }
    res.json(memoryStore);
  } catch (err) {
    next(err);
  }
};

exports.createForm = async (req, res, next) => {
  try {
    if (await waitForDb()) {
      const form = await IleyaForm.create(req.body);
      return res.status(201).json(form);
    }
    const entry = { ...req.body, _id: String(++memCounter), createdAt: new Date().toISOString() };
    memoryStore.unshift(entry);
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

exports.deleteForm = async (req, res, next) => {
  try {
    if (await waitForDb()) {
      const form = await IleyaForm.findByIdAndDelete(req.params.id);
      if (!form) return res.status(404).json({ message: 'Form entry not found' });
      return res.json({ message: 'Deleted successfully' });
    }
    const idx = memoryStore.findIndex(e => e._id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: 'Form entry not found' });
    memoryStore.splice(idx, 1);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    next(err);
  }
};
