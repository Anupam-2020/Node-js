const express = require('express');

const router = express.Router();

router.get('/',(req, resp, next) => { // this middleware will run always because the url is `/`, which will come in all middlewres....
    console.log('This runs always!')
    next();
});


router.get('/products-page', (req, resp, next) => {
    resp.setHeader('Content-type', 'text/html');
    resp.write('<h1>This is products page.</h1>');
    resp.write('<form action="/admin/products-page" method="POST"><input name="title" type="text"/><button type="submit">Add Product</button></form>')
})

router.post('/products-page', (req, resp, next) => { // `products-page` -> if methods are different the we can have same page name....
    const body = req.body;
    console.log(body);
    resp.send(`<h1>Product list -> ${body.title}</h1>`);
})

router.get('/home-page', (req, resp, next) => {
    resp.send('<h1>This is home page!</h1>')
})

router.get('/', (req, resp, next) => {
    resp.send('<h1>Hello from home.</h1>')
})

module.exports = router;