const express = require("express")
const userRouter = express.Router()

const User = require("../models/User")
const Order = require("../models/Order")
const passport = require("passport")
const s = require('sequelize')


//Registro de un Usuario
userRouter.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).send(user)
  } catch (error) {
    console.log(error)
  }
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
userRouter.put("/edit/:id", async (req, res) => {
 try {
    const newData = await User.update(req.body, { where: { id: req.params.id } })
    res.status(200).send(newData)
  } catch (error) {
    res.status(400).send(error)
  }
})

//Devuelve todos los users menos quien pide
userRouter.get("/all/:id", async (req, res) => {
  try {
    const data = await User.findAll({
      where: { [s.Op.not]: { id: req.params.id } },
      include: { model: Order }
    })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

//Devuelve un User x id
userRouter.get("/get/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { include: { model: Order } })
    res.send(user)
  } catch (error) {
    console.log(error)
  }
})

//Promueve o degrada a Admin
userRouter.put("/promote/:id", async (req, res) => {
  try {
    const newData = await User.update(req.body, { where: { id: req.params.id } })
    res.status(200).send(newData)
  } catch (error) {
    res.status(400).send(error)
  }
})

//Eliminar un User
userRouter.delete("/delete/:id", async (req, res) => {
try {
     await User.destroy({ where: { id: req.params.id } })
     res.status(204).send("DELETED")
} catch (error) {
  console.log(error)
}
});


module.exports = userRouter