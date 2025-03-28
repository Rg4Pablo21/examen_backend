// asistenciaRoutes.js
const express = require('express');
const router = express.Router();
const { registrarAsistencia } = require('../controllers/asistenciaController');

router.post('/', registrarAsistencia);
module.exports = router;