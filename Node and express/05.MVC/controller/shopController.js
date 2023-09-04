const Product = require("../models/product");

exports.getProducts = (req, resp, next) => {
    Product.fetchAllProducts((products) => {
        resp.render('shop/products-list', {prod:  products, docTitle: 'shop here', path: 'shop'})
    })
}

exports.goToCheckout = (req, resp, next) => {
    resp.render('shop/index', {docTitle: 'Index', path: 'index'});
}

exports.showIndex = (res, resp, next) => {
    Product.fetchAllProducts((products) => {
        resp.render('shop/index', {docTitle: 'Products', path: 'products', prod: products});
    })
}

exports.showCart = (res, resp, next) => {
    resp.render('shop/cart', {docTitle: 'Cart', path: 'cart'});
}

exports.orders = (req, resp, next) => {
    resp.render('shop/order', {docTitle: 'Orders', path: 'order'})
}