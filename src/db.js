const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Configurar la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Autenticación
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch((err) => {
    console.error('Error de conexión a la base de datos:', err);
  });

// Definir el modelo de "Asistencia" (esto depende de cómo esté estructurada tu base de datos)
const Asistencia = sequelize.define('Asistencia', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'asistencias', // Nombre de la tabla en la base de datos
  timestamps: false, // Si no tienes campos como createdAt y updatedAt
});

// Función para obtener todos los estudiantes que han registrado asistencia
const getEstudiantes = async () => {
  try {
    const estudiantes = await Asistencia.findAll();
    return estudiantes.map(estudiante => estudiante.nombre); // Devuelve solo los nombres de los estudiantes
  } catch (error) {
    console.error("Error al obtener los estudiantes:", error);
    throw error;
  }
};

// Función para registrar la asistencia
const registrarAsistencia = async (nombre) => {
  try {
    await Asistencia.create({ nombre });  // Crea un nuevo registro en la base de datos
  } catch (error) {
    console.error("Error al registrar la asistencia:", error);
    throw error;
  }
};

module.exports = { sequelize, getEstudiantes, registrarAsistencia };
