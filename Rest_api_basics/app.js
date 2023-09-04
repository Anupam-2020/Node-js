const express = require('express');
const feedRoute = require('./routes/feed');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, resp, next) => {
    // resp.setHeader('Access-Control-Allow-Origin','*')
    // resp.setHeader('Access-Control-Allow-Methods','GET')
    // resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use('/feed', feedRoute);

app.listen(8080);