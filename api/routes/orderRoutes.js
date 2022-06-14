const express = require("express")
const orderRouter = express.Router()

const transporter = require('../config/mailer')
const models = require('../models')

//EN PROCESO, NINGUNA RUTA TERMINADA

//Crear una orden
orderRouter.post("/buy", (req, res) => {

  let idOrder = 0
  let arrOrderItems = req.body.data[1]

  models.Order.create({ userId: req.body.data[0] })
    .then(data => { idOrder = data.id, res.status(201).send(data) })
    .then(() =>
      //Crea los Order Item
      arrOrderItems.forEach(item => {
        models.Order_Item.create({
          amount: item.amount,
          orderId: idOrder,
          productId: item.productId
        }
        )
          .then(() => {
            transporter.sendMail({
              from: '"Blackcat" <blackcatpasteleria@gmail.com>', // sender address
              to: 'benjabecerrab@gmail.com', // list of receivers
              subject: "Confirmacion de pedido", // Subject line
              html: "<h1>Pedido realizado.</h1> <p> Su pedido sera confirmado luego de querealice el pago.</p>"
            })
          })
          .catch(err => console.log(err))
      })
    )
    .catch(err => console.log(err))

})


//Todas las ordenes de un usuario
orderRouter.get("/all/:id", (req, res) => {
  models.Order.findAll({ where: { userId: req.params.id }, include: { model: models.Order_Item } })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})


// Borrar una orden
orderRouter.delete("/:id", (req, res) => {
  models.Order.destroy({ where: { id: req.params.id } })
    .then((data) => res.status(204).send("DELETED"))
    .catch((err) => console.log(err));
});




//////////////////////
// RUTAS ORDER-ITEM //
//////////////////////


//Agregar un Order Item
orderRouter.post("/additem", (req, res) => {
  models.Order_Item.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => console.log(err))
})

//Devuelve todos los Order Item
orderRouter.get("/items", (req, res) => {
  models.Order_Item.findAll({ include: { model: models.Product } })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

//Devuelve un Order Item por ID
orderRouter.get("/item/:id", (req, res) => {
  const id = req.params.id
  models.Order_Item.findByPk(id, { include: { model: models.Product } })
    .then((user) => res.send(user))
})

// Borrar un Order-Item
orderRouter.delete("/item/:id", (req, res) => {
  models.Order_Item.destroy({ where: { id: req.params.id } })
    .then((data) => res.status(204).send("DELETED"))
    .catch((err) => console.log(err));
});


module.exports = orderRouter
