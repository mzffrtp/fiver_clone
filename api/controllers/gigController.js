import Gig from "../models/gigModel.js"
import error from "../utils/error.js";

export const createGig = async (req, res, next) => {
    if (!req.isSeller) return next(error(403, "Just sellers can create a gig!"))

    const newGig = new Gig({
        userId: req.userId,
        ...req.body,
    })

    try {
        const savedGig = await newGig.save()
        res.status(201).json({
            message: "Gig succesfully created!",
            gig: savedGig
        })
    } catch (err) {
        next(err)
    }
};
export const deleteGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) return next(error(404, "Gig not found"))

        if (gig.userId.toString() !== req.userId) return next(error(403, "You are unauthorizied to delete gig"))

        await Gig.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: "Successfully deleted!" })
    } catch (err) {
        next(err)
    }
};
export const getAllGigs = async (req, res, next) => {
    try {
        const gigs = await Gig.find()
        res.status(200).json({
            nGigs: gigs.length,
            gigs
        })
    } catch (err) {
        next(err)
    }
};
export const getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)
        if (!gig) return next(error(404, "Gig was not found!"))
        res.status(200).json({
            gig
        })

    } catch (err) {
        next(err)
    }
};
