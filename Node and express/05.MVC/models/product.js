const fs = require('fs');
const rootDir = require('../util/path');
const path = require('path');


// M -1 -> This is my logic..................................................
const p = path.join(rootDir, 'data', 'test.json');
module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAllProducts(callBack) {
        fs.readFile(p, (err, fileContent) => {
            err ? callBack([]) : callBack(JSON.parse(fileContent));
        })
    }
}


// M-2 -> This logic is as per the course...................................................
// const p = path.join(rootDir, 'data', 'products.json');

// module.exports = class Product {
//     constructor(title) {
//         this.title = title;
//     }

//     save() {
//         fs.readFile(p, (err, fileContent) => {
//             // console.log(fileContent);
//             let products = [];

//             !err ? products = JSON.parse(fileContent) : null
//             products.push(this);

//             fs.writeFile(p, JSON.stringify(products), (err, fileContent) => {
//                 console.log(err);
//             })
//         })
//     }

//     static fetchAllProducts(callBack) {
//         fs.readFile(p, (err, fileContent) => {
//             err ? callBack([]) : callBack(JSON.parse(fileContent));
//         })
//     }
// }