import jwt from "jsonwebtoken"
import error from "../utils/error.js"

export const verifyToken = (req, res, next) => {
    //TODO 1 has token?
    const token = req.cookies.accessToken

    //TODO 2 valid token?
    if (!token) return res.status(401).json({
        message: "No access!"
    })

    //TODO 3 delete user?
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) return next(error(404, "Invalid token!"))

        req.userId = payload.id;
        req.isSeller = payload.isSeller
    })
    next();
}