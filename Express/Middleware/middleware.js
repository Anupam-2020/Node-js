module.exports = (req, resp, next) => {
    if(!req.query.age) {
        resp.send('Please provide age')
    }
    if(req.query.age < 18) {
        resp.send("You can't access this page")
    }
    else {
        next();
    }
}