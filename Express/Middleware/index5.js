const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();


// app.use(reqFilter);  // Middleware(application layer middleware)....................................................

// we can use middle on particular route by giving route.get instead of app.get.......
route.use(reqFilter);  // step - 1 for middle on particular route.....................

app.get('/', reqFilter, (req, resp) => {  // `reqFilter` parameter means, middleware is applied only on this particular route.............
    resp.send('Welcome to home page');
})

app.get('/profile',(req, resp) => {
    resp.send('Welcome to profile page');
})

route.get('/contact',(req, resp) => {  // step - 2 middle on particular route..............................
    resp.send('Welcome to contacts page');
})

app.use('/',route); // step - 3 middle on particular route.............................

app.listen(5000);