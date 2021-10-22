const { request, response } = require('express')

function registrarJugador(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "Registrando un jugador"
    })

}

function buscarJugador(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "Buscando un jugador"
    })

}

function buscarJugadores(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "Buscando todos los jugadores"
    })

}

function editarJugador(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "Editando un jugador"
    })

}

function eliminarJugador(peticion = request, respuesta = response) {

    let id = peticion.params.id
    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "Eliminando un jugador"
    })

}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}