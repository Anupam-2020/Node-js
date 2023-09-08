const rootDir = require("../../utils/pathDir");
const path = require("path");
const Register = require("../models/registerSchema");
const fs = require("fs");
const bcrypt = require('bcryptjs');


exports.getLoginPage = (req, resp) => {
  resp.render("login", { name: "Login to app", title: "Login Page", credentialCheck: true });
};

exports.postLoginDetails = async (req, resp) => {
  try {
    const result = await Register.findOne({
      // password: req.body.password,
      email: req.body.email,
    });
    // console.log("value -> " + result);

    // fs.readFile(path.join(rootDir, 'public', 'json', 'user.json'), (err, fileContent) => {
    //    let userArray = [];
    //    if(!err) {
    //     userArray = JSON.parse(fileContent);
    //    }
    //    userArray.push(req.body);
    //    fs.writeFile(path.join(rootDir, 'public', 'json', 'user.json'), JSON.stringify(userArray), (err) => console.log(err));
    // })

    if (result) {
      const password = result.password;
      const passwordCheck = await bcrypt.compare(req.body.password, password);
      console.log(passwordCheck);
      if(passwordCheck) {
        resp.status(201).redirect(`/welcome/${result.firstName}`);
      } else {
        resp.render('login', { name: "Login to app", title: "Login Page", credentialCheck: false });
      }
    } else {
    //   resp.send("<h2>Username or password not found.</h2>");
        resp.render('login', { name: "Login to app", title: "Login Page", credentialCheck: false });
    }
  } catch (err) {
    console.log(err);
  }
};
