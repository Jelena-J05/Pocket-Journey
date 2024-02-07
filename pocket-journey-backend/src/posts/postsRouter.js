import express from "express"
import { Post } from "./postsModel.js"
import avatarUpload from "../a-settings/cloudinary.js"
import authControl from "../a-settings/authControl.js"

const postsRouter = express.Router()

postsRouter
    .get(
        "/",
         authControl, async (req, res, next) => {
            try {
                let posts = await Post.find()
                res.send(posts)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .get(
        "/:id",
        authControl,  async (req, res, next) => {
            try {
                let post = await Post.findById(req.params.id)
                res.send(post)
            } catch (error) {
                next(error)
            }
        }
    ) 

    .post("/", async (req, res) => {

        const newPost = await Post.create({
            ...req.body,
        })

        res.status(201).send(newPost)
    })

    .put(
        "/:id",
        authControl,  async (req, res, next) => {
            try {
                let post = await Post.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(post)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .delete("/:id", async (req, res, next) => {
        try {
            await Post.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) 

    .patch("/:id/avatar", avatarUpload, async (req, res, next) => {
        try {
            console.log(req.file)
            let updated = await Post.findByIdAndUpdate(
                req.params.id,
                { avatar: req.file.path },
                { new: true }
            )
            res.send(updated)
        } catch (error) {
            next(error)
        }
    })

export default postsRouter
