const express = require("express");
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get("/products-page", (req, resp, next) => {
  // resp.sendFile(path.join(rootDir, 'views', 'normal_html', 'product-page.html'));
  resp.render('product-page',{ docTitle: 'admin page', path: 'admin'})
});

router.post("/products-page", (req, resp, next) => {
  const body = req.body;
  products.push({title: body.title});
  console.log(body);
  resp.redirect('/admin/');
});

module.exports = {
  router,
  products
}
