import express from "express";
import User from "../models/userModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import error from "../utils/error.js"

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 12)
        const newUser = await User.create({ ...req.body, password: hash })
        res.status(201).json({
            status: "success",
            message: "User registered!",
            data: { newUser }
        })
    } catch (err) {
        next(error(400, "An error occured during register"))
    }
};
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username }).select("+password")

        if (!user) return res.status(404).send("User not found!")

        if (!req.body.password) return next(error(404, "User not found!"))

        // Ensure user.password contains a valid bcrypt hash
        if (!user.password || typeof user.password !== 'string') {
            return res.status(500).send("Invalid user password hash!")
        }

        const isCorrectPass = bcrypt.compareSync(req.body.password, user.password)

        if (!isCorrectPass) return next(error(404, "Email or password is not correct!"))

        //! DO NOT SEND PASSWORD TO FRONT-END
        user.password = null

        //!JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                isSeller: user.isSeller
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        )

        res
            .cookie("accessToken", token, {
                httpOnly: true
            })
            .status(201).json({
                status: "success",
                message: "User logedin succesfully!",
                data: { user }
            })
    } catch (err) {
        next(err)
    }
};
export const logout = (rew, res, nezt) => {
    //! clear cookie
    res.clearCookie("accessToken").status(200).json({
        messasge: "Successfull logout!"
    })
};