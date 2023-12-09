import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import gigRouter from "./routes/gigRoutes.js";

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true
}))

dotenv.config();

const DB = process.env.DATABASE.replace("<PASS>", process.env.DATABASE_PASS);

mongoose
    .connect(DB)
    .then(() => { console.log("server connected") })
    .catch((error) => { console.log("servernot connected", error) })

//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/gig", gigRouter)

//!Global error management
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Soory, something went wrong!"

    return res.status(errStatus).json({
        statusCode: errStatus,
        message: errMessage
    });
});

app.listen(8000, () => {
    console.log("api listening on port 8000");
})

