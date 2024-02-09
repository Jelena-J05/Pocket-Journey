import express from "express"
import { Hotel } from "./hotelsModel.js"

const hotelsRouter = express.Router()

hotelsRouter
    .get("/", async (req, res, next) => {
        try {
            const hotels = await Hotel.find()
            res.json(hotels)
        } catch (error) {
            res.status(500).send(error)
            next(error)
        }
    })
    .get("/:id", async (req, res, next) => {
        const { id } = req.params
        try {
            const hotel = await Hotel.findOne({ _id: id })
            res.status(200).json(hotel)
        } catch (error) {
            next(error)
        }
    })

    .post("/", async (req, res) => {
        const newHotel = await Hotel.create({
            ...req.body,
        })

        res.status(201).send(newHotel)
    })

    .put("/:id", async (req, res, next) => {
        try {
            const updatedHotel = await Hotel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (!updatedHotel) {
                return res.status(404).send("Hotel not found")
            }
            res.json(updatedHotel)
        } catch (error) {
            next(error)
        }
    })

    .delete("/:id", async (req, res, next) => {
        try {
            const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)

            if (!deletedHotel) {
                return res.status(404).send()
            }

            res.status(204).send({ message: "Hotel deleted" })
        } catch (error) {
            next(error)
        }
    })
export default hotelsRouter
