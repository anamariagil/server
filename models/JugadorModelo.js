const {model, Schema} = require('mongooose')
const JugadorModelo=Schema({
    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    equipo:{
        type:String,
        required:true
    },
    posicion:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    }
})

module.exports=model('Jugadores', JugadorModelo)