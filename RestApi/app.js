require('dotenv').config();
const express = require("express");
const router = require("./routes/products");
const connectDB = require("./db/connect");
const products = require('./models/products');
const ProductsJson = require('./products.json');
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/products', router);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await products.deleteMany()
    await products.create(ProductsJson)
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
