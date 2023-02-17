const userSchema= new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        cedula: Number,
    },{ collection:'users' }
)

module.exports =  mongoose.model('user',userSchema)