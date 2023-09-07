const rootDir = require('../../utils/pathDir');
const path = require('path');
const fs = require('fs');


exports.getLoginPage = (req, resp) => {
    resp.render('login', {name: "Login to app", title: "Login Page"});
};

exports.postLoginDetails = (req, resp) => {
    resp.redirect('/welcome');
}
