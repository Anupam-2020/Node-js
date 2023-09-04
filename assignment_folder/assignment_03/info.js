const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/users', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, 'views', 'info.html'))
})

module.exports = router;