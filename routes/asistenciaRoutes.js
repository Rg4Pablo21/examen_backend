const express = require('express');
const { getEstudiantes, registrarAsistencia } = require('../db');
const router = express.Router();

// Obtener la lista de estudiantes
router.get('/', async (req, res) => {
  try {
    const estudiantes = await getEstudiantes();
    res.json(estudiantes);
  } catch (error) {
    console.error("Error al obtener los estudiantes:", error);
    res.status(500).json({ error: "Hubo un error al obtener la lista de asistencia." });
  }
});

// Registrar una nueva asistencia
router.post('/', async (req, res) => {
  const { nombre } = req.body;
  try {
    await registrarAsistencia(nombre);
    res.status(200).json({ mensaje: "Asistencia registrada exitosamente." });
  } catch (error) {
    console.error("Error al registrar la asistencia:", error);
    res.status(500).json({ error: "Hubo un error al registrar la asistencia." });
  }
});

module.exports = router;
