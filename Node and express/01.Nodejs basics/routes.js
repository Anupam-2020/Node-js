const fs = require('fs');


const understandingBasicServer = (req, resp) => {
    console.log(req.headers.host)
    console.log(req.url)
    console.log(req.method)
    // process.exit(); // this command un-registers from event loop and closes the program...
}

const understandingResponseFromSever = (req, resp) => {
    resp.setHeader('Content-type', 'text/html');
    resp.write('<html>')
    resp.write('<head><title>My Header Page</title></head>')
    resp.write('<body><h1>Header File</h1></body>')
    resp.write('</html>')
    resp.end();
}


const connectingRequestAndResponse = (req, resp) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        resp.setHeader('Content-type', 'text/html');
        resp.write('<html>')
        resp.write('<head><title>My Header Page in main page</title></head>')
        resp.write('<body><h1>Header File</h1><form action="/message" method="POST"><input type="text" name="msg" /><button type="submit">Send</button></form></body>')
        resp.write('</html>')
        return resp.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            // console.log(chunks)
            body.push(chunks);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message); 
            // fs.writeFileSync('message.txt', message); // this method works synchronously with the flow and can block the code if file size is too large.
            // So, we should use `writeFile` instead...
            fs.writeFile('message.txt', message, (err) => {
                resp.statusCode = 302;
                resp.setHeader('Location', '/');
                return resp.end();
            });
        })
    }

    resp.setHeader('Content-type', 'text/html');
    resp.write('<html>')
    resp.write('<head><title>My Header Page in other page</title></head>')
    resp.write('<body><h1>Header File</h1></body>')
    resp.write('</html>')
    resp.end();
}

module.exports = {
    connectingRequestAndResponse,
    understandingBasicServer,
    understandingResponseFromSever
}