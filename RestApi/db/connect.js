const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/cart';

const connectDB = async (uri) => {
    try {
        console.log('connecd to database');
        await mongoose.connect(uri)
    } catch(e) { console.log(e) }
}

module.exports = connectDB;