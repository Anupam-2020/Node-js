const dbConnect = require('./mangodb');


// Read data in database using promises and async/await methods................................

// promises method.............................................
// dbConnect().then((response) => {
//     response.find({brand:'Samsung'}).toArray().then((data) => {
//         console.log(data)
//     })
// })


// async await method............................................
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray()
    console.log(data);
}

main();