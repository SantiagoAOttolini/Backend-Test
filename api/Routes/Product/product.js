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

//PUT
router.put("/:productId", (req, res) => {
let id = req.params.productId
let update = req.body

Product.findByIdAndUpdate(id, update, (err, productUpdate) => {
  if (err) {
    res.status(500).send({message: err.message});
  }
  res.status(200).send({product: productUpdate})
})
    
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
      { $set: { description: req.body.description } }
    );
    res.json(updateProdcut);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
 /*  try {
    let id = req.params.productId;
    let name = req.body.name
    let description = req.body.description
    let price = req.body.price
    let postDate = req.body.postDate
    

    let index = Product.findIndex((product)=>{
      return (product.id == id) 
    })

    if (index>=0) {
      let prd  = Product[index]
      prd.name = name
      prd.description = description
      prd.price = price
      prd.postDate = postDate
      res.json(prd)
    }
  } catch (error) {
    res.json({ message: error });
  } */