const { DataTypes } = require('sequelize');
const db = require('../src/db.js');  // Asegúrate de que la ruta sea correcta

const Profesor = db.define('Profesor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
});

module.exports = Profesor;
