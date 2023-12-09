import jwt from "jsonwebtoken";
import User from "../models/userModel.js"
import error from "../utils/error.js";

export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    console.log(user);

    if (!user) return next(error(400, "User not found!"))

    if (req.userId !== user._id.toString()) {
        return next(error(403, "no access!"))
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({
        message: "User deleted"
    })


}