const express = require('express');
const router = require('./routes/products');

const PORT = 8000;

const app = express();

app.use('/products',router);


const start = () => {
    try{
        app.listen(PORT, () => console.log(`Listening on port -> ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start();