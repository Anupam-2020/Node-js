const Register = require("../models/registerSchema");

exports.getRegistrationPage = (req, resp) => {
  resp.render("register", {
    name: "Employee Registration Form",
    title: "Register Page",
  });
};

exports.postRegisterDetails = async (req, resp, next) => {
  // const body = req.body;
  // console.log(body);
  // fs.writeFile(path.join(rootDir, 'public', 'json', 'user.json'), JSON.stringify(body), (err) => {
  //     console.log(err);
  // });

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
      console.log(register);
    } else {
        resp.send("<h2>Password doesn't match...</h2>");
        return resp.end();
    }
  } catch (err) {
    console.log(err);
  }

  resp.redirect("/user/");
};
