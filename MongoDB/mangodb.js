const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'nodeProject';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect()
    let db = result.db(databaseName);
    collection =  db.collection('products')
    return collection;
    // let response = await collection.find({name:'xiaomi'}).toArray();
    // console.log(response)
}

module.exports = dbConnect;