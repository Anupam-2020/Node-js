const express = require('express');
const app = express();
const path = require('path');

const homeRoute = require('./home');
const userRoute = require('./info');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoute)
app.use(userRoute)

app.listen(3000);