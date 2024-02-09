import express from "express"
import { Activity } from "./activitiesModel.js"

const activitiesRouter = express.Router()

activitiesRouter
    .get("/", async (req, res, next) => {
        try {
            const activities = await Activity.find()
            res.json(activities)
        } catch (error) {
            res.status(500).send(error)
            next(error)
        }
    })
    .get("/:id", async (req, res, next) => {
        const { id } = req.params
        try {
            const activity = await Activity.findOne({ _id: id })
            res.status(200).json(activity)
        } catch (error) {
            next(error)
        }
    })

    .post("/", async (req, res) => {
        const newActivity = await Activity.create({
            ...req.body,
        })

        res.status(201).send(newActivity)
    })

    .put("/:id", async (req, res, next) => {
        try {
            const updatedActivity = await Activity.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (!updatedActivity) {
                return res.status(404).send("Activity not found")
            }
            res.json(updatedActivity)
        } catch (error) {
            next(error)
        }
    })

    .delete("/:id", async (req, res, next) => {
        try {
            const deletedActivity = await Activity.findByIdAndDelete(
                req.params.id
            )

            if (!deletedActivity) {
                return res.status(404).send()
            }

            res.status(204).send({ message: "Activity deleted" })
        } catch (error) {
            next(error)
        }
    })
export default activitiesRouter
