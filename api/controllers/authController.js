import express from "express";
import User from "../models/userModel.js"
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 12)
        const newUser = await User.create({ ...req.body, password: hash })
        res.status(201).json({
            status: "success",
            message: "User registered!",
            data: { newUser }
        })
    } catch (error) {
        next(console.log(error))
    }
};
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username }).select("+password")

        if (!user) return res.status(404).send("User not found!")

        if (!req.body.password) return res.status(400).send("Password is required!")

        // Ensure user.password contains a valid bcrypt hash
        if (!user.password || typeof user.password !== 'string') {
            return res.status(500).send("Invalid user password hash!")
        }

        const isCorrectPass = bcrypt.compareSync(req.body.password, user.password)

        if (!isCorrectPass) return res.status(404).send("Email or password is not correct!")

        //! DO NOT SEND PASSWORD TO FRONT-END
        user.password = null
        res.status(201).json({
            status: "success",
            message: "User logedin succesfully!",
            data: { user }
        })
    } catch (error) {
        next(console.log(error))
    }
};
export const logout = () => {

};