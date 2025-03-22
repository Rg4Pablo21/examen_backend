const Asistencia = require('../models/asistencia.js'); // Importa el modelo de Asistencia

// Obtener la lista de estudiantes que han asistido
const obtenerLista = async (req, res) => {
    try {
        const asistencias = await Asistencia.findAll(); // Trae todas las asistencias
        res.json(asistencias); // Devuelve la lista de estudiantes
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la lista de asistencia' });
    }
};

// Registrar asistencia de un estudiante
const registrarAsistencia = async (req, res) => {
    const { nombre } = req.body;
    
    try {
        // Registrar la asistencia en la base de datos
        const asistencia = await Asistencia.create({ nombre });

        // Devuelve la respuesta si se registró correctamente
        res.status(201).json(asistencia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar la asistencia' });
    }
};

module.exports = {
    obtenerLista,
    registrarAsistencia
};
