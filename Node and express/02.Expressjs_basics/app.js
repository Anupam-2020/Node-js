const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

// app.use((req, resp, next) => { // This is a middleware
//     console.log('This is middleware');

//     // resp.setHeader('Content-type', 'text/html');
//     // resp.write('<h1>Inside express js.</h1>')

//     // resp.send('<h1>Inside express js.</h1>');
//     next(); // Allows the request to continue to next middleware.....
//     // resp.end();
// }); 

// app.use((req, resp, next) => { // This is another middleware
//     resp.send('<h1>Inside express js.</h1>');
//     console.log('This is another middleware');
//     // resp.setHeader('Content-type', 'text/html');
//     // next(); 
// });



app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',router)

app.use((req, resp, next) => {
    resp.status(404).send('<h1>Page not found!</h1>')
})

app.listen(3000)