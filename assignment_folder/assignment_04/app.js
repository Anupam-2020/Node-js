const express = require('express');

const app = express();
const rootDir = require('./util/path');
const path = require('path');
const userRoute = require('./routes/users');
const homeRoute = require('./routes/home');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', 'views');
app.engine('ejs', require('ejs').__express);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/app', homeRoute.router);
app.use('/app', userRoute);

app.use('/', (req, resp, next) => {
    resp.status(404).render('page404', {title: '404 not found'});
})


app.listen(3000);