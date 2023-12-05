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
    password: {
        type: String,
        required: [true, 'Lütfen şifre alanını gönderiniz'],
        select: false,
    },
    img: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: [true, "Please provide a country name!"]
    },
    phone: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })

export default mongoose.model("User", userSchema);
