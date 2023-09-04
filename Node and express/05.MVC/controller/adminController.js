const Product = require("../models/product");

exports.getInputPage = (req, resp, next) => {
    resp.render('admin/add-products',{ docTitle: 'admin page', path: 'admin/add-products'})
}

exports.postData = (req, resp, next) => {
    const body = req.body;
    const product = new Product(body.title, body.image, body.desc, body.price);
    product.save();
    // console.log(product);
    resp.redirect('/admin/');
}

exports.adminProducts = (req, resp, next) => {
    Product.fetchAllProducts(prods => {
        resp.render('admin/product-list-admin', {docTitle: 'admin products', path: 'admin/products', prod: prods});
    })
  }