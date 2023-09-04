const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');


const router = express.Router();

router.get('/', (req, resp, next) => {
    console.log(adminData.products)
    // resp.sendFile(path.join(rootDir, 'views', 'normal_html', 'shop.html'));
    resp.render('shop', {prod: adminData.products, docTitle: 'shop here', path: 'shop'})
});

module.exports = router;