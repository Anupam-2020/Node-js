import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // limiting data is a good practice and not mandatory.

// url has its encoder(eg. in url, space(" ") is denoted as %20...), so we need to add configuration.
app.use(express.urlencoded({extended: true, limit: "16kb"})) // Also, extended and limit are not mandatory.
app.use(express.static("public")) // This is for static files/folders...
app.use(cookieParser())

export {app};