const dbConnect = require('./mangodb');

const updateRecord = async () => {
    let data = await dbConnect();
    let result = await data.update(
        {name: 'max 1'}, {$set: {name: 'max pro 5', price: 20000}}
    )
    console.log(result);
}

updateRecord();