const Register = require("../models/registerSchema");

exports.getRegistrationPage = (req, resp) => {
  resp.render("register", {
    name: "Employee Registration Form",
    title: "Register Page",
    passwordCheck: true
  });
};

exports.postRegisterDetails = async (req, resp, next) => {
  
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmpassword;

    if (password === confirmPassword) {
      const registerEmployee = new Register({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirmPassword: req.body.confirmpassword,
      });

      const register = await registerEmployee.save();
      // console.log(register);
      resp.redirect("/user/");
    } else {
        resp.render('register', {
          name: "Employee Registration Form",
          title: "Register Page",
          passwordCheck: false
        });
    }
  } catch (err) {
    console.log(err);
  }
};
