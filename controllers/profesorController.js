const Profesor = require('../models/profesor');

exports.getProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.findAll();
        res.json(profesores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProfesor = async (req, res) => {
    try {
        const profesor = await Profesor.create(req.body);
        res.status(201).json(profesor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
