const express = require("express");
const router = express.Router();
const Product = require("../../Models/product");

//GET
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET BY ID
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
});

//POST
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    postDate: req.body.postDate,
  });
  try {
    const saveProduct = await product.save();
    res.json(saveProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETE
router.delete("/:productId", async (req, res) => {
  try {
    const removeProduct = await Product.remove({ _id: req.params.productId });
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

//MODIFY
router.patch("/:productId", async (req, res) => {
  try {
    const updateProdcut = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { description: req.body.description} }
    );
    res.json(updateProdcut);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
