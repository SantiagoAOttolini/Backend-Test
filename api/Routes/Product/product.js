const express = require("express");
const router = express.Router();
const Product = require("../../Models/product");

router.post("/", (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    postDate: req.body.postDate,
  });
  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});
module.exports = router;
