const fs = require('fs');
const path = require('path');

// to create file(s) in root of the project...........................
// fs.writeFileSync("hello.txt","this is weird");


// to create file(s) in specific folder.......................................
let dirPath = path.join(__dirname,'Files');
// console.log(dirPath);
// for(i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i+1}.txt`,"This is hello file");
// }


// to read file(s)............................................
// fs.readdir(dirPath,(err, files) => {
//     // console.log(files); // this will print the files in array.
//     files.forEach((file) => {
//         console.log(file);
//     })
// })


// code for CRUD operations on file(s).................................
dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

fs.writeFileSync(filePath,"this is fruit");   // to create file.
// fs.readFile(filePath,'UTF-8', (err, items) => {    // to read file contents......
//     console.log(items);
// })

// fs.appendFile(filePath,' and file name is apple.txt',(err)=> {  // to append/update file................
//     if(!err) console.log("file updated");
// })


// fs.rename(filePath,`${dirPath}/fruit.txt`, (err) => {  // to remname file..................
//     if(!err) {
//         console.log("file renamed!");
//     }
// })


// fs.unlinkSync(`${dirPath}/fruit.txt`)   // to delete file............................