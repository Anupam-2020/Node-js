const express = require('express');
const rootDir = require('./utils/pathDir');
require('./src/db/connect');
const registerData = require('./src/models/registerSchema');
const path = require('path');
const bodyParser = require('body-parser');
const loginPage = require('./src/routes/login');
const registerPage = require('./src/routes/register');


const app = express();
app.set('views', 'src/views/ejs');
app.set('view engine', 'ejs');

app.use(express.static(path.join(rootDir,'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/welcome/:name', (req, resp) => {
    resp.send('<h1>Welcome to login/register app.</h1>')
});

app.use('/user', loginPage.router);

app.use('/user', registerPage.router);

try{
    app.listen(8000, () => {
        console.log('server started.')
    })
} catch(err) {
    console.log(err);
}
