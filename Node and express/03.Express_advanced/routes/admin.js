const express = require("express");
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get("/products-page", (req, resp, next) => {
  resp.sendFile(path.join(rootDir, 'views', 'product-page.html'));
});

router.post("/products-page", (req, resp, next) => {
    const body = req.body;
    console.log(body);
    resp.send(`<h2>${body.title}</h2>`)
});

module.exports = router;
