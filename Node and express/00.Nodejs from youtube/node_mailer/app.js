const express = require('express');
const { postMail, getInput, getData } = require('./controller/getMail');
const path = require('path');
const rootDir = path.dirname(require.main.filename);

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', getData);

app.get('/mail', getInput)

app.post('/mail', postMail);

async function start () {
    try{
        app.listen(8000, () => {
            console.log('Server started on port');
        });
    } catch(e) {
        console.log(e);
    }
}

start()