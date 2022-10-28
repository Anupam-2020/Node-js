const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const dirPath = path.join(__dirname,'Views');


app.get('/profile',(request, response) => {
    const user = {
        name: "Anupam",
        email: 'anupam@xyz.com',
        city: 'Patna',
        skills: ['c++','node','js','python']
    }
    response.render(`${dirPath}/profile`, {user});
})

app.get('/login', (_, response) => {
    response.render(`${dirPath}/login`)
})

app.listen(5000);