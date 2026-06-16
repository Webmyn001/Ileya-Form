const express = require('express');
const router = express.Router();
const { getForms, createForm, deleteForm } = require('../controllers/ileyafo');

router.get('/', getForms);
router.post('/add', createForm);
router.delete('/:id', deleteForm);

module.exports = router;
