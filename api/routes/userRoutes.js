import express from "express";
import { deleteUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.delete("/:id", deleteUser);

export default userRouter