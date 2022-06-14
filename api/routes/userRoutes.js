const express = require("express")
const userRouter = express.Router()

const User = require("../models/User")
const Order = require("../models/Order")
const passport = require("passport")
const s = require('sequelize')


//Registro de un Usuario
userRouter.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user)
    })
    .catch(err => console.log(err))
})

//Log in
userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user)
})

//Log Out
userRouter.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err) }
    res.sendStatus(200)
  })
})

//Actualiza los datos del User
userRouter.put("/edit/:id", (req, res) => {
  const id = req.params.id
  const data = req.body
  User.findByPk(id)
    .then((user) => {
      user.update(data)
    })
    .then((newData) => {
      res.status(200).send(newData)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

//Devuelve todos los users menos quien pide
 userRouter.get("/all/:id", (req, res) => {
  User.findAll({ where:{ [s.Op.not]: {id: req.params.id}}, include: { model: Order } })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

//Devuelve un User x id
userRouter.get("/get/:id", (req, res) => {
  const id = req.params.id
  User.findByPk(id, { include: { model: Order } })
    .then((user) => res.send(user))
})

//Promueve o degrada a Admin
userRouter.put("/promote/:id", (req, res) => {
  const { admin } = req.body
  res.sendStatus(200)
})

//Eliminar un User
userRouter.delete("/delete/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((data) => res.status(204).send("DELETED"))
    .catch((err) => console.log(err));
});

module.exports = userRouter