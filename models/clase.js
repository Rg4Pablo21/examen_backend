const { DataTypes } = require('sequelize');
const sequelize = require('../src/db.js');
const Profesor = require('./profesor'); // Asegúrate de importar correctamente el modelo Profesor

const Clase = sequelize.define('Clase', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    profesor_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: Profesor, key: 'id' } },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    tableName: 'clases',
    timestamps: true
});

// Definir la relación correctamente
Clase.belongsTo(Profesor, { foreignKey: 'profesor_id', onDelete: 'CASCADE' });

module.exports = Clase;
