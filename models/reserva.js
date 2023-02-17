const reservaSchema= new mongoose.Schema(
    {
        userID:  { type:  mongoose.Schema.ObjectId, ref: "users" },
        hotelID:   { type:  mongoose.Schema.ObjectId, ref: "hotels" },
        date: {type: Date, default: Date.now}
    },{ collection:'reservas' }
)

module.exports =  mongoose.model('reserva',reservaSchema)