import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    gigId: {
        type: Schema.ObjectId,
        ref: "Gig",
        required: true
    },
    userId: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    desc: {
        type: String,
        required: true
    }
},
    { timestamps: true })


export default mongoose.model("Review", Review);
