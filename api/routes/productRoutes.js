const express = require("express");
const productRouter = express.Router();

const Product = require("../models/Product");

//Agrega un producto
productRouter.post("/add", (req, res) => {
  Product.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => console.log(err));
});

//Trae todos los productos
productRouter.get("/all", (req, res) => {
  Product.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//Busca un producto en especifico (Por id)
productRouter.get("/:id", (req, res) => {
  Product.findByPk(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//Editar un producto
productRouter.put("/edit/:id", (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
});

module.exports = productRouter;
