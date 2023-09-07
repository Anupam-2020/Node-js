const express = require('express');
const { postRegisterDetails, getRegistrationPage } = require('../controller/regesterController');
const router = express.Router();

router.get('/register', getRegistrationPage);

router.post('/register', postRegisterDetails);

module.exports = {router};