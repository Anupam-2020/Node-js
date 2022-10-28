const app = require('./app') // import methods/variables from other files.............
const fs = require('fs');
// const fs = require('fs').writeFileSync;  // another way of importing class with only the required methods......

// note:- node js is not a programming language. It is a runtime environment which runs JS code using V8 engine.
// `===` compares value as well as type. On the other hand `==` compares matches value only....
console.log("anupam");
console.log(app.z());
console.log(app.x);

const arr = [2,4,7,1,3,8,3];

let result = arr.filter((item) => {
    // console.log(item)
    return item === 3
})

console.log(result);

fs.writeFileSync('hello.txt','code in js'); // this method will create a file.....
console.log("directory name ->", __dirname);