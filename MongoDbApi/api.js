const express = require('express');
const dbConnect = require('../MongoDB/mangodb');


const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    console.log(data);
    response.send(data)
});

app.post('/', async (request, response) => {
    // console.log(request.body)
    let data = await dbConnect();
    let result = data.insert(request.body)
    response.send(result)
})


app.listen(5000);
