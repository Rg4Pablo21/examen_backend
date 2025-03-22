const express = require('express');
const router = express.Router();

// Aquí puedes definir las rutas para obtener y crear alumnos.
router.get('/', (req, res) => {
  res.send('Lista de alumnos');
});

router.post('/', (req, res) => {
  // Aquí va la lógica para agregar un nuevo alumno a la base de datos
  res.send('Alumno creado');
});

module.exports = router;
