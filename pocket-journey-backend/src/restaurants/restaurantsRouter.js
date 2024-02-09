import express from "express"
import { Restaurant } from "./restaurantsModel.js"

const restaurantsRouter = express.Router()

restaurantsRouter
    .get("/", async (req, res, next) => {
        try {
            const restaurants = await Restaurant.find()
            res.json(restaurants)
        } catch (error) {
            res.status(500).send(error)
            next(error)
        }
    })
    .get("/:id", async (req, res, next) => {
        const { id } = req.params
        try {
            const restaurant = await Restaurant.findOne({ _id: id })
            res.status(200).json(restaurant)
        } catch (error) {
            next(error)
        }
    })

    .post("/", async (req, res) => {
        const newRestaurant = await Restaurant.create({
            ...req.body,
        })

        res.status(201).send(newRestaurant)
    })
    .put("/:id", async (req, res, next) => {
        try {
            const updatedRestaurant = await Restaurant.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (!updatedRestaurant) {
                return res.status(404).send("Restaurant not found")
            }
            res.json(updatedRestaurant)
        } catch (error) {
            next(error)
        }
    })

    .delete("/:id", async (req, res, next) => {
        try {
            const deletedRestaurant = await Restaurant.findByIdAndDelete(
                req.params.id
            )

            if (!deletedRestaurant) {
                return res.status(404).send()
            }

            res.status(204).send({ message: "Restaurant deleted" })
        } catch (error) {
            next(error)
        }
    })

export default restaurantsRouter
