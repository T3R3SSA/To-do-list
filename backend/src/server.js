require('dotenv').config({ path: '../.env' }); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173', // Permitir solicitudes desde el frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

const taskRoutes = require('../routes/taskRoutes.js'); // Importar las rutas de tareas

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
// URI de conexión a tu base de datos
mongoose.connect(URI) 
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log('Error de conexión a MongoDB:', err));

// Ruta de prueba
// app.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
// });

app.use('/api', taskRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
