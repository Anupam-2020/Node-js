const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, resp, next) => {
    console.log(__dirname)
    resp.sendFile(path.join(__dirname, 'views', 'home.html'));
})

module.exports = router;