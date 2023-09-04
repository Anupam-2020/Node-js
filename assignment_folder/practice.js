const http = require('http');
const fs = require('fs');

const server = http.createServer((req, resp) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        resp.setHeader('Content-type', 'text/html')
        resp.write('<html>');
        resp.write('<header><title>Practice Project.</title></header>')
        resp.write('<body>')
        resp.write('<h1>This is practice project!!</h1>')
        resp.write('<form method="POST" action="/message">')
        resp.write('<input type="text" placeholder="enter name" name="message"/>')
        resp.write('<button type="submit">Click</button>')
        resp.write('</form');
        resp.write('</body>')
        resp.write('</html>');
        return resp.end();
    }
    if(url === '/message' && method === 'POST') {
        const data = [];
        req.on('data',(chunks) => {
            data.push(chunks);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(data).toString();
            const message = parsedBody
            fs.writeFile('message.txt',message, (err) => {
                resp.statusCode = 302;
                resp.setHeader('Location', '/');
                return resp.end();
            });
        })
    }

    resp.write('<html>');
    resp.write('<header><title>Practice Project.</title></header>')
    resp.write('<body>')
    resp.write('<h1>This is practice project!!</h1>')
    resp.end()
})

server.listen(3000);