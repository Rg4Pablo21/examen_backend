const { DataTypes } = require('sequelize');
const db = require('../src/db');
const Profesor = require('./profesor');

const Clase = db.define('Clase', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    profesor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Profesor,
            key: 'id'
        }
    }
});

module.exports = Clase;
