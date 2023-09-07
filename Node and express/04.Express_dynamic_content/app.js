const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopPage = require('./routes/shop');
const path = require('path');

// app.set('views', 'views/pug_template'); // this is used to set the path where our pug/ejs/hbs files are there...
// app.set('view engine', 'pug'); // this is used to set the view engine...
// app.engine('pug', require('pug').__express) // this is optional step.

app.set('views', 'views/ejs_templates');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express)


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.router);
app.use('/admin', shopPage);

app.use('/', (req, resp, next) => {
    // resp.status(404).sendFile(path.join(__dirname, 'views', 'normal_html', 'page404.html'));
    resp.status(404).render('page404', {docTitle: '404 not found', path: '/'})
})

app.listen(3000);