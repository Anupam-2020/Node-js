const express = require('express');
const { getProducts, goToCheckout, showIndex, showCart, orders, getProductDetails, postToCart } = require('../controller/shopController');


const router = express.Router();


router.get('/', showIndex);

router.get('/cart', showCart);

router.post('/cart', postToCart)

router.get('/shop/products', getProducts);

router.get('/checkout', goToCheckout);

router.get('/order', orders);

router.get('/shop/products/:productId', getProductDetails)

module.exports = router;