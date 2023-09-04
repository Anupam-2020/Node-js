const express = require("express");
const { getInputPage, postData, adminProducts } = require("../controller/adminController");

const router = express.Router();

router.get("/add-products", getInputPage);

router.post("/add-products", postData);

router.get("/products", adminProducts)

module.exports = {
  router
}
