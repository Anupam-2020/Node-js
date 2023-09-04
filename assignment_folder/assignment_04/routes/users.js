const express = require('express');

const router = express.Router();

const usersArray = require('./home');

router.get('/users', (req, resp, next) => {
   resp.render('users', {title: 'Users page', users: usersArray.users});
});

module.exports = router;