const Asistencia = require('../models/asistencia.js');

async function registrarAsistencia(req, res) {
    try {
        const { alumno_nombre, fecha, estado } = req.body;

        if (!alumno_nombre || !fecha || !estado) {
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }

        // 📌 Registra la asistencia sin importar si el alumno existe o no
        const asistencia = await Asistencia.create({
            alumno_nombre,
            fecha,
            estado
        });

        return res.status(201).json({ mensaje: 'Asistencia registrada con éxito', asistencia });
    } catch (error) {
        console.error('Error al registrar asistencia:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { registrarAsistencia };
