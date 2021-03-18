const express = require("express");
const mongoose = require("mongoose");
const productsRoutes = require("./api/Routes/Product/product");
const bodyParser = require("body-parser");
require("dotenv/config")

const app = express();
app.use(bodyParser.json())

mongoose.connect(
process.env.DB_CONNECTION,  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (req, res) => {
    console.log("connect to the database");
  }
);

app.use("/post/product/", productsRoutes);


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
