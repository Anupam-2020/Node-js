const Product = require("../models/product");

exports.getProducts = (req, resp, next) => {
    Product.fetchAllProducts((products) => {
        resp.render('shop/products-list', {prod:  products, docTitle: 'Products', path: 'products'})
    })
}

exports.getProductDetails = (req, resp, next) => {
    const id = req.params.productId
    console.log(id);
    Product.fetchProductsById(id, product => {
        resp.render('shop/product-details', {details: product, docTitle: product.title, path:''});
        // console.log(product);
    })
}

exports.goToCheckout = (req, resp, next) => {
    resp.render('shop/checkout', {docTitle: 'Index', path: 'index'});
}

exports.showIndex = (res, resp, next) => {
    Product.fetchAllProducts((products) => {
        resp.render('shop/index', {docTitle: 'Shop Here', path: 'shop', prod: products});
    })
} 

exports.showCart = (res, resp, next) => {
    resp.render('shop/cart', {docTitle: 'Cart', path: 'cart'});
}

exports.postToCart = (req, resp, next) => {
    const id = req.body.productId;
    console.log(id)
    resp.redirect('/admin/cart');
}

exports.orders = (req, resp, next) => {
    resp.render('shop/order', {docTitle: 'Orders', path: 'order'})
}