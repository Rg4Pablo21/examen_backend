const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/db'); // 📌 Usa la conexión de `db.js`

// Importar rutas
const asistenciaRoutes = require('./routes/asistenciaRoutes.js');
const alumnoRoutes = require('./routes/alumnoRoutes.js');
const claseRoutes = require('./routes/claseRoutes.js');
const profesorRoutes = require('./routes/profesorRoutes.js');

const app = express();

// Habilitar CORS y JSON
app.use(cors());
app.use(bodyParser.json());

// Rutas API
app.use('/api/asistencia', asistenciaRoutes);
app.use('/api/alumno', alumnoRoutes);
app.use('/api/clase', claseRoutes);
app.use('/api/profesor', profesorRoutes);

// Verificar conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('✅ Conexión a la base de datos exitosa');
        return sequelize.sync({ force: true }); // Puedes usar 'force: true' para borrar y crear las tablas nuevamente (ten cuidado con esto en producción)
    })
    .then(() => {
        console.log('✅ Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('❌ Error al conectar con la base de datos:', error);
    });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
