const http = require('http');
const fs = require('fs');
const routes = require('./routes');


const server = http.createServer(routes.connectingRequestAndResponse)

server.listen(2000)