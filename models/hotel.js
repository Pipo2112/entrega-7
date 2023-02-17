const mongoose = require ('mongoose');

const hotelSchema= new mongoose.Schema(
    {
        nombre: String,
        ciudad: String,
        direccion:String,
        telefono: Number,
        habitaciones: [{
            numero:Number
        }]
    },{ collection:'hotels' }
)
module.exports = mongoose.model('hotel',hotelSchema)