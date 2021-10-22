const { Router } = require('express')
const rutas = Router();

const { registrarJugador } = require('../controllers/controlador.js')
const { buscarJugador } = require('../controllers/controlador.js')
const { buscarJugadores } = require('../controllers/controlador.js')
const { editarJugador } = require('../controllers/controlador.js')
const { eliminarJugador } = require('../controllers/controlador.js')

rutas.get('/jugadores', buscarJugadores)
rutas.get('/jugadores/:id', buscarJugador)
rutas.post('/jugadores', registrarJugador)
rutas.put('/jugadores/:id', editarJugador)
rutas.delete('/jugadores/:id', eliminarJugador)

module.exports = rutas