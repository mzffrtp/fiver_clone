import mongoose, { Schema } from "mongoose";
import validator from "validator"

const gigSchema = new mongoose.Schema({
    userId: {
        type: Schema.ObjectId,
        ref: "User",
        required: [true, "Please send userID!"],
    },
    title: {
        type: String,
        required: [true, "Title shouldn´t be blank!"],

    },
    desc: {
        type: String,
        required: [true, "Descriptiion shouldn´t be blank!"]
    },
    avgRating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    totalRating: {
        type: Number,
        default: 1
    },
    category: {
        type: String,
        required: [true, "Category shouldn´t be blank!"]
    },
    price: {
        type: Number,
        required: false
    },
    cover: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: false
    },
    shortTitle: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true
    },
    revisionNumber: {
        type: Number,
        required: true
    },
    features: {
        type: [String],
        required: false
    },
    sales: {
        type: Number,
        default: 0
    }
},
    { timestamps: true })


export default mongoose.model("Gig", gigSchema);
