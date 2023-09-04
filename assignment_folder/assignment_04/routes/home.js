const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, resp, next) => {
    resp.render('home', {title: 'Home page'});
});


router.post('/', (req, resp, next) => {
    users.push({title: req.body.title});
    console.log(users)
    resp.redirect('/app/users');
})

module.exports = {
    users,
    router
}