const Alumno = require('../models/alumno');

exports.getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.getAll();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos' });
    }
};

exports.createAlumno = async (req, res) => {
    try {
        const { nombre, correo } = req.body;
        if (!nombre || !correo) return res.status(400).json({ message: 'Nombre y correo son obligatorios' });

        const id = await Alumno.create(nombre, correo);
        res.status(201).json({ id, nombre, correo });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el alumno' });
    }
};

exports.deleteAlumno = async (req, res) => {
    try {
        const { id } = req.params;
        await Alumno.delete(id);
        res.json({ message: 'Alumno eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el alumno' });
    }
};
