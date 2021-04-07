const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config');
require('dotenv').config();


// Crear servidor/ aplicación express
const app = express();
//  Conexión a la base de datos
dbConection()

// Directorio público
app.use( express.static('public'))
// CORS
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );
// Rutas
app.use('/api/auth', require('./routes/auth'))

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
} )