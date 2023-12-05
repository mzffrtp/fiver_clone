import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()
dotenv.config();

const DB = process.env.DATABASE.replace("<PASS>", process.env.DATABASE_PASS);

mongoose
    .connect(DB)
    .then(() => { console.log("server connected") })
    .catch((error) => { console.log("servernot connected", error) })

app.listen(8000, () => {
    console.log("api listening on port 8000");
})

