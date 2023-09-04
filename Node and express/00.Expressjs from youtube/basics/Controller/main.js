exports.getMainPage = (req, resp, next) => {
    resp.send('<h1>Welcome to home page</h1>');
}

exports.getAboutPage = (req, resp, next) => {
    resp.send('<h1>Welcome to about page.</h1>')
}

exports.getContactsPage = (req, resp, next) => {
    resp.send('<h1>Welcome to contacts page</h1>')
}