exports.getAllProducts = (req, resp, next) => {
    resp.send('<h1>Hello from products page.</h1>');
}

exports.getAllProductsTesting = (req, resp, next) => {
    resp.send('<h1>Response from testing!</h1>')
}