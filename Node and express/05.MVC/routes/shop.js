const express = require('express');
const { getProducts, goToCheckout, showIndex, showCart, orders } = require('../controller/shopController');


const router = express.Router();

router.get('/', getProducts);

router.get('/cart', showCart)

router.get('/shop/products', showIndex);

router.get('/checkout', goToCheckout);

router.get('/order', orders);

module.exports = router;