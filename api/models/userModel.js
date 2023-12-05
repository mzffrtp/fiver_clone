import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please write you name"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "e-mail shouldn´t be blank"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "Please enter a valid email!"]
    },
    country: {
        type: String,
        required: [true, "Please provide a country name!"]
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone name!"]
    },
    isSeller: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })

const User = mongoose.model("User", userSchema);
module.exports = User