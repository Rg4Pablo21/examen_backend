const Sequelize = require('sequelize');
const sequelize = require('../src/db.js'); 

const Alumno = sequelize.define('Alumno', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  freezeTableName: true  // Evita que Sequelize pluralice el nombre de la tabla
});

module.exports = Alumno;