require('dotenv').config();
const config = require('./config.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
const uri = config.MONGODB_URI; // URI de conexión a tu base de datos
mongoose.connect(uri) 
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log('Error de conexión a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
