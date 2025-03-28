const { DataTypes } = require('sequelize');
const sequelize = require('../src/db.js'); // Asegúrate de que la ruta sea correcta, ajusta según tu estructura de carpetas

const Asistencia = sequelize.define('Asistencia', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  alumno_nombre: { type: DataTypes.STRING, allowNull: false },
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  estado: { type: DataTypes.ENUM('Presente', 'Ausente', 'Tarde'), allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  tableName: 'asistencias',
  timestamps: true
});

module.exports = Asistencia;
