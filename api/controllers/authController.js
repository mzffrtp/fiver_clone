import express from "express";
import User from "../models/userModel.js"

export const register = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            status: "success",
            message: "User registered!",
            data: { newUser }
        })
    } catch (error) {
        next(console.log(error))
    }
};
export const login = () => {

};
export const logout = () => {

};