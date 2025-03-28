const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('examen_db', 'root', '0521', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
