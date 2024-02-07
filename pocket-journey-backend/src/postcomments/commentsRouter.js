import express from "express"
import { Comment } from "./commentsModel.js"

const commentsRouter = express.Router()

commentsRouter
    .get(
        "/", async (req, res, next) => {
            try {
                let comments = await Comment.find()
                res.send(comments)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .get(
        "/:id",  async (req, res, next) => {
            try {
                let comment = await Comment.findById(req.params.id)
                res.send(comment)
            } catch (error) {
                next(error)
            }
        }
    ) 

    .post("/", async (req, res) => {

        const newComment = await Comment.create({
            ...req.body,
        })

        res.status(201).send(newComment)
    })

    .put(
        "/:id",  async (req, res, next) => {
            try {
                let comment = await Comment.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(comment)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .delete("/:id", async (req, res, next) => {
        try {
            await Comment.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) 

export default commentsRouter
