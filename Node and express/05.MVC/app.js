const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopPage = require('./routes/shop');
const path = require('path');
const { get404page } = require('./controller/error');

app.set('views', 'views/ejs_templates');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express)


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.router);
app.use('/admin', shopPage);

app.use('/', get404page)

app.listen(3000);