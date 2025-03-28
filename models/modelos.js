const Alumno = require('./alumno');
const Asistencia = require('./asistencia');
const sequelize = require('../src/db');

Alumno.hasMany(Asistencia, { foreignKey: 'alumno_id', onDelete: 'CASCADE' });
Asistencia.belongsTo(Alumno, { foreignKey: 'alumno_id', onDelete: 'CASCADE' });

module.exports = { sequelize, Alumno, Asistencia };
