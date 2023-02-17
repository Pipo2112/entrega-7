const model = require('../models/user')


export async function createdUsers(){
    const user= new model({
        nombre: "zelddfdfa",
        apellido: "nitSAUSERdo",
        cedula: 2021,
    })
    const respuesta = await user.save()
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