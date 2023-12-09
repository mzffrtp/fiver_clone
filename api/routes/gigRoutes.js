import express from "express"
import { deleteGig } from "../controllers/gigController.js";

const gigRouter = express.Router();

gigRouter.delete("/delete", deleteGig)

export default gigRouter