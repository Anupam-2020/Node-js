const mongoose = require('mongoose');
 
const URL = "mongodb://localhost:27017/login";

const connect = async(url) => {
    try{
        await mongoose.connect(url);
        console.log('mongodb connected.')
    } catch(err) {
        console.log(err);
    }
}

connect(URL);