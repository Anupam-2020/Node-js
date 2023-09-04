const path = require('path');
const rootDir = path.dirname(require.main.filename);
const fs = require('fs');

exports.postMail = (req, resp, next) => {
    const data = req.body.info;
    fs.writeFile(`${rootDir}/mail.txt`, data, (err) => err ? console.log(err) : null);
    resp.sendFile(rootDir+'/mail.txt');
    resp.redirect('/');
}

exports.getInput = (req, resp, next) => {
    // console.log(`${rootDir}/index.html`)
    resp.sendFile(`${rootDir}/index.html`, (err) => err ? console.log(err) : null);
}

exports.getData = (req, resp, next) => {
    resp.sendFile(rootDir+'/mail.txt', err => err ? console.log(err) : null);
}