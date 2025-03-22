const express = require('express');
const { getProfesores, createProfesor } = require('../controllers/profesorController');

const router = express.Router();

router.get('/', getProfesores);
router.post('/', createProfesor);

module.exports = router;
