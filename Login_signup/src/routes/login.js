const express = require('express');
const { getLoginPage, postLoginDetails } = require('../controller/loginController');

const router = express.Router();

router.get('/', getLoginPage);

router.post('/', postLoginDetails)

module.exports = {router};