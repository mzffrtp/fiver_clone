import express from "express"
import { createGig, deleteGig, getAllGigs, getGig } from "../controllers/gigController.js";
import { verifyToken } from "../middlewares/jwtVerify.js";

const gigRouter = express.Router();

gigRouter.post("/", verifyToken, createGig)
gigRouter.delete("/delete/:id", verifyToken, deleteGig)
gigRouter.get("/single/:id", getGig)
gigRouter.get("/", getAllGigs)


export default gigRouter