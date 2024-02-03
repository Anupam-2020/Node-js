// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config("./env")
const app = express();
connectDB()
.then(() => {
    app.on('error', (error) => { // handle event error.
        console.log("Err: ", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed!!!", err);
})







// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";

// const app = express();

// ;(async function(){
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log("Error", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch(error) {
//         console.log(error);
//         throw error
//     }
// })()