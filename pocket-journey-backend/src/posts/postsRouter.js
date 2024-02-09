import express from "express"
import { Post } from "./postsModel.js"
import authControl from "../a-settings/authControl.js"
import { Comment } from "../postcomments/commentsModel.js"

const postsRouter = express.Router()

postsRouter

    .get("/", async (req, res) => {
        try {
            let posts = await Post.find().populate("user").populate("comments")
            res.json(posts)
        } catch (error) {
            console.error(error)
            res.status(500).send("Server Error")
        }
    })

    .post("/", authControl, async (req, res) => {
        try {
            const newPost = new Post({
                user: req.user._id,
                ...req.body,
            })

            await newPost.save()
            res.status(201).send(newPost)
        } catch (error) {
            console.error(error)
            res.status(500).send("Server error")
        }
    })

    .post("/:postId/comments", authControl, async (req, res) => {
        try {
            const { text } = req.body
            const postId = req.params.postId

            const newComment = await Comment.create({
                text: text,
                user: req.user._id,
                post: postId,
            })

            await Post.findByIdAndUpdate(postId, {
                $push: { comments: newComment._id },
            })

            res.status(201).json(newComment)
        } catch (error) {
            console.error(error)
            res.status(500).send("Server Error")
        }
    })

export default postsRouter
