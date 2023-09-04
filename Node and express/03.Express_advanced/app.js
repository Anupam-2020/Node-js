const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminPage = require('./routes/admin');
const shopPage = require('./routes/shop');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false})); // this is to parse the data that we get from server from input-text.....
app.use(express.static(path.join(__dirname, 'public'))); // this is added to make css file to be available in html pages...

app.use('/admin',adminPage);
app.use('/admin', shopPage);

app.use('/', (req, resp, next) => {
    // resp.status(404).send('<h2>Page not found!</h2>')
    resp.status(404).sendFile(path.join(__dirname, 'views', 'page404.html'))
})

app.listen(3000);