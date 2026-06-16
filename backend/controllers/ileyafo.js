const mongoose = require('mongoose');
const IleyaForm = require('../models/IleyaForm');

// In-memory fallback when MongoDB is unavailable
let memoryStore = [];
let memCounter = 0;

const isConnected = () => mongoose.connection.readyState === 1;

exports.getForms = async (req, res, next) => {
  try {
    if (isConnected()) {
      const forms = await IleyaForm.find().sort({ createdAt: -1 });
      return res.json(forms);
    }
    // Fallback to in-memory data
    res.json(memoryStore);
  } catch (err) {
    next(err);
  }
};

exports.createForm = async (req, res, next) => {
  try {
    if (isConnected()) {
      const form = await IleyaForm.create(req.body);
      return res.status(201).json(form);
    }
    // Fallback: store in memory
    const entry = { ...req.body, _id: String(++memCounter), createdAt: new Date().toISOString() };
    memoryStore.unshift(entry);
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

exports.deleteForm = async (req, res, next) => {
  try {
    if (isConnected()) {
      const form = await IleyaForm.findByIdAndDelete(req.params.id);
      if (!form) return res.status(404).json({ message: 'Form entry not found' });
      return res.json({ message: 'Deleted successfully' });
    }
    // Fallback: delete from memory
    const idx = memoryStore.findIndex(e => e._id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: 'Form entry not found' });
    memoryStore.splice(idx, 1);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    next(err);
  }
};
