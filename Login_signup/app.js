const express = require('express');
const rootDir = require('./utils/pathDir');
require('./src/db/connect');
const Register = require('./src/models/registerSchema');
const path = require('path');
const bodyParser = require('body-parser');
const loginPage = require('./src/routes/login');
const registerPage = require('./src/routes/register');
const bcrypt = require('bcryptjs');


const app = express();
app.set('views', 'src/views/ejs');
app.set('view engine', 'ejs');

app.use(express.static(path.join(rootDir,'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/welcome/:name', async (req, resp) => {
    const query = req.params.name;
    const firstName = await Register.findOne({firstName: query});
    console.log(firstName._id)
    if(firstName) {
        resp.send('<h1>Welcome to login/register app.</h1>')
    } else {
        resp.redirect('/user/')
    }
});

app.use('/user', loginPage.router);

app.use('/user', registerPage.router);

app.use('/', (req, resp, next) => {
    resp.status(404).send('<h3>Page not found</h3>')
})

try{
    app.listen(8000, () => {
        console.log('server started.')
    })
} catch(err) {
    console.log(err);
}
