import express from "express";
import { deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/jwtVerify.js";

const userRouter = express.Router();

userRouter.delete("/:id", verifyToken, deleteUser);

export default userRouter