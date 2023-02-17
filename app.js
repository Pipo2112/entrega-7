const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/hoteles',{useNewUrlParser:true})
.then(()=>console.log('se conecto con mongodb: true'))
.catch(()=>console.log('se conecto con mongodb: false'))

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


const userSchema= new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        cedula: Number,
    },{ collection:'users' }
)
const reservaSchema= new mongoose.Schema(
    {
        userID:  { type:  mongoose.Schema.ObjectId, ref: "users" },
        hotelID:   { type:  mongoose.Schema.ObjectId, ref: "hotels" },
        date: {type: Date, default: Date.now}
    },{ collection:'reservas' }
)

const Hotel = mongoose.model('hotel',hotelSchema)
const User = mongoose.model('user',userSchema)
const Reserva = mongoose.model('reserva',reservaSchema)
createdHotel();
createdUsers()
createdReservas()
async function createdHotel(){
    const hotel= new Hotel({
        nombre: "zelssdda",
        ciudad: "niiGAMEiido",
       telefono: 2021,
       habitaciones:[{
        numero:2
    }]
    })
    const respuesta = await hotel.save()
    console.log(respuesta);
}
async function createdUsers(){
    const user= new User({
        nombre: "zelddfdfa",
        apellido: "nitSAUSERdo",
        cedula: 2021,
    })
    const respuesta = await user.save()
    console.log(respuesta);
}

async function createdReservas(){
    const reserva= new Reserva({
        userID:  "63ed6ce25d2b187d9104608d",
        hotelID:  "63ed6ce25d2b187d9104608c",
    })
    const respuesta = await reserva.save()
    console.log(respuesta);
}