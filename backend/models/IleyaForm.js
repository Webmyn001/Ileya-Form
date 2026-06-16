const mongoose = require('mongoose');

const ileyafoSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Address: {
    type: String,
    required: true,
    trim: true,
  },
  PhoneNo: {
    type: String,
    required: true,
    trim: true,
  },
  BankName: {
    type: String,
    required: true,
    trim: true,
  },
  AcctName: {
    type: String,
    required: true,
    trim: true,
  },
  AcctNo: {
    type: String,
    required: true,
    trim: true,
  },
  NOK: {
    type: String,
    required: true,
    trim: true,
  },
  NOKName: {
    type: String,
    required: true,
    trim: true,
  },
  Marital: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('IleyaForm', ileyafoSchema);
