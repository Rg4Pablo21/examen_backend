const Clase = require('../models/clase');

exports.getClases = async (req, res) => {
    try {
        const clases = await Clase.findAll();
        res.json(clases);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createClase = async (req, res) => {
    try {
        const clase = await Clase.create(req.body);
        res.status(201).json(clase);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
