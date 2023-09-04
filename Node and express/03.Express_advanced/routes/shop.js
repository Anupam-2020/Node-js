const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, resp, next) => {
    // resp.send('<h1>This is home page.</h1>')
    // resp.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    resp.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;