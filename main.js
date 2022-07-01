const express = require('express');
const app = express()
const PORT = 8080;

const server = app.listen( PORT, () => {
    console.log(`Servidor http escuchando puerto ${server.address().port}`)
})
server.on('error', error => console.log('Error ' + error))

app.get('/', (req, res) => {
    res.send({mensaje:'Hola mundo'})
})

app.get('/vistas', (req, res) => {
    res.send({mensaje:'Vistas'})
})

app.get('/fyh', (req, res) => {
    res.send({mensaje:'Fecha'})
})
