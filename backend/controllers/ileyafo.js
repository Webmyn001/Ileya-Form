const IleyaForm = require('../models/IleyaForm');

exports.getForms = async (req, res, next) => {
  try {
    const forms = await IleyaForm.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (err) {
    next(err);
  }
};

exports.createForm = async (req, res, next) => {
  try {
    const form = await IleyaForm.create(req.body);
    res.status(201).json(form);
  } catch (err) {
    next(err);
  }
};

exports.deleteForm = async (req, res, next) => {
  try {
    const form = await IleyaForm.findByIdAndDelete(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form entry not found' });
    }
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    next(err);
  }
};
