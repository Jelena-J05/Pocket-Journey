import express from "express"
import { Reaction } from "./reactionsModel.js"

const reactionsRouter = express.Router()

reactionsRouter
    .get("/", async (req, res, next) => {
        try {
            let reactions = await Reaction.find();
            res.send(reactions);
        } catch (error) {
            next(error);
        }
    })
    .get("/:id",  async (req, res, next) => {
        try {
            let reaction = await Reaction.findById(req.params.id);
            res.send(reaction); 
        } catch (error) {
            next(error);
        }
    })

    .post("/", async (req, res) => {

        const newReaction = await Reaction.create({
            ...req.body,
        })

        res.status(201).send(newReaction)
    })

    .put(
        "/:id",  async (req, res, next) => {
            try {
                let reaction = await Reaction.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(reaction)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .delete("/:id", async (req, res, next) => {
        try {
            await Reaction.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) 

export default reactionsRouter
