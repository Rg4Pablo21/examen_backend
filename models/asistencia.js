const { DataTypes } = require('sequelize');
const db = require('../src/db');
const Alumno = require('./alumno');
const Clase = require('./clase');

const Asistencia = db.define('Asistencia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    alumno_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Alumno,
            key: 'id'
        }
    },
    clase_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Clase,
            key: 'id'
        }
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('Presente', 'Ausente', 'Tarde'),
        allowNull: false
    }
});

module.exports = Asistencia;
