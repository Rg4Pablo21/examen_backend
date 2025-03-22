require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importar la base de datos
const db = require('./src/db');  // Asegúrate de que tienes una conexión correcta a tu base de datos

// Importar rutas
const alumnoRoutes = require('./routes/alumnoRoutes');
const claseRoutes = require('./routes/claseRoutes');
const asistenciaRoutes = require('./routes/asistenciaRoutes');
const profesorRoutes = require('./routes/profesorRoutes');

const app = express();

// Configurar CORS
const corsOptions = {
    origin: 'http://127.0.0.1:5501', // Permitir solo esta URL
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));  // Aplicar las opciones de CORS a todas las rutas

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/alumnos', alumnoRoutes);
app.use('/api/clases', claseRoutes);
app.use('/api/asistencias', asistenciaRoutes);  // Ruta correcta
app.use('/api/profesores', profesorRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
