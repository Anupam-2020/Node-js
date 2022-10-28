const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));  // if we use this method of sending page, then we need to pass extension of file as well in the browser url. 

// with below methods we just need to pass file name in the browser url.........
app.get('', (request, response) => { 
    response.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (request, response) => {
    response.sendFile(`${publicPath}/about.html`)
})

app.get('*', (request, response) => {
    response.sendFile(`${publicPath}/pagenotfound.html`)
})


app.listen(5000);