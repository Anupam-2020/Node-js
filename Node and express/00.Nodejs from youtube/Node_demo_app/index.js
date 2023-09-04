const weekdays = [];
weekdays[0] = 'Sunday';
weekdays[1] = 'Monday';
weekdays[2] = 'Tuesday';
weekdays[3] = 'Wednesday';
weekdays[4] = 'Thursday';
weekdays[5] = 'Friday';
weekdays[6] = 'Saturday';

const currentDay = new Date();
console.log(weekdays[currentDay.getDay()]);

const http = require('http');
const requests = require('requests');
const fs = require('fs');
const path = require('path');
const rootDir = path.dirname(require.main.filename);


const server = http.createServer((req, resp) => {
    if(req.url === '/') {
        let data = [];
        requests('https://dummyjson.com/products/1')
        .on('data', function (chunk) {
            const parsedData = JSON.parse(chunk);
            data.push(parsedData);
            fs.writeFileSync(`${rootDir}/data.txt`, JSON.stringify(data), (err) => console.log(err));

            fs.readFile(`${rootDir}/data.txt`, 'utf-8', (err, fileContent) => {
                console.log(JSON.parse(fileContent));
                console.log(data);
            })

            let homeFile = fs.readFileSync(`${rootDir}/index.html`, 'utf-8')

            let title = homeFile.replace('{%city%}', data[0].title);
                title = title.replace('date', data[0].price);
                title = title.replace('{%temp%}', data[0].description); 
                resp.write(title);
        })
        .on('end', (err) => {
            return err ? console.log(err) : resp.end();
        })
    }
}).listen(3000, () => console.log('Started server'))
