
const model = require('../models/hotel')

export async function createdHotel(){
    const hotel= new model({
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

exports.listall = (req, res) => {
    model.find({}, (err,docs) => {
      res.send({
        docs
    })
  } )
  }
  
  exports.insert= (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }
  
    })
  }
  exports.update= (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
  }
  exports.delete= (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
  }