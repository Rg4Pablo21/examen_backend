const express = require('express');
const { getClases, createClase } = require('../controllers/claseController');

const router = express.Router();

router.get('/', getClases);
router.post('/', createClase);

module.exports = router;
