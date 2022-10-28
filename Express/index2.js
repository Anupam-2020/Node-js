const { response } = require('express');
const express = require('express');
const app = express();

app.get('', (request, response) => {
    // console.log(request.query);
    response.send(`
        <h1>Hello, this is Home page</h1>
        <button>Click me</button>
        <a href = "/about">Go to about page</a>
        <p></P>
        <a href = "/help">Go to help page</a>
    `);
});

app.get('/about', (request, response) => {
    response.send(`
        <input type="text" placeholder="username" value=${request.query.name}></input>
        <a href="/">Go to home page</a>
    `);
});

app.get('/help',(request, response) => {
    response.send(`
        [
            {
                "name": "anupam",
                "age": "26"
            },
            {
                name: 'anurag',
                age: 23
            }
        ]
    `)
})
app.listen(4200);