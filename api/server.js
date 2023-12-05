import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express()
app.use(express.json())
dotenv.config();

const DB = process.env.DATABASE.replace("<PASS>", process.env.DATABASE_PASS);

mongoose
    .connect(DB)
    .then(() => { console.log("server connected") })
    .catch((error) => { console.log("servernot connected", error) })

//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter)


//! undefined route - error management


app.listen(8000, () => {
    console.log("api listening on port 8000");
})

