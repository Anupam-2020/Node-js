const fs = require('fs');
const path = require('path');

const rootDir = path.dirname(require.main.filename);


// to create folder.....
// fs.mkdir(rootDir+"/anupam", (err) => err ? console.log(err) : null);

// to create 
// fs.writeFile(rootDir+"/anupam/"+'bio.txt', 'Hi, This is Anupam', (err) => { err ? console.log(err) : null});

// fs.readFile(rootDir+"/anupam/"+'bio.txt', (err,fileContent) => {
//     !err ? console.log(fileContent.toString()) : console.log(err);
// })

// fs.appendFile(rootDir+'/anupam/bio.txt', '. I am 26 years old.', (err, fileContent) => {
//     err ? console.log(err) : null;
// })

// fs.rename(rootDir+'/anupam/bio.txt',rootDir+'/anupam/mybio.txt', (err) => {err ? console.log(err) : null});

// to delete file....
// fs.unlink(rootDir+'/anupam/bio.txt',(err) => err ? console.log(err) : null);

// to delete folder....
// fs.rmdir(rootDir+'/anupam', (err) => err ? console.log(err) : null);
