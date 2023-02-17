const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/hoteles',{useNewUrlParser:true})
.then(()=>console.log('se conecto con mongodb: true'))
.catch(()=>console.log('se conecto con mongodb: false'))

module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb://localhost:27017/database'
}