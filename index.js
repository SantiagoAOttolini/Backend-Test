const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//CALL ROUTES
const productsRoutes = require("./api/Routes/Product/product");

const app = express();

//CORS
app.use(cors());

app.use(bodyParser.json());

//MONGO CONNECT
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (req, res) => {
    console.log("Connect to the database");
  }
);

//ROUTES
app.use("/api/product/", productsRoutes);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
