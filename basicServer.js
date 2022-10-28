const http = require('http'); // http handles the request/response of server on node js.................


let dataControl = (request, response) => {
    response.write("<h1>Hello World.</h1>");
    response.end();
}

http.createServer(dataControl).listen(3000);