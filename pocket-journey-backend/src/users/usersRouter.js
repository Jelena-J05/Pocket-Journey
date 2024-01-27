import express from "express"
import { User } from "./usersModel.js"
import avatarUpload from "../a-settings/cloudinary.js"
/* import { JWTAuthMiddleware } from "../../lib/auth/index.js" */
/* import Blog from "../blogs/model.js"*/

const usersRouter = express.Router()

usersRouter
    .get(
        "/",
        /* JWTAuthMiddleware, */ async (req, res, next) => {
            try {
                let users = await User.find()
                res.send(users)
            } catch (error) {
                next(error)
            }
        }
    ) /*WORKING*/
    .get(
        "/:id",
        /* JWTAuthMiddleware, */ async (req, res, next) => {
            try {
                let user = await User.findById(req.params.id)
                res.send(user)
            } catch (error) {
                next(error)
            }
        }
    ) /*WORKING*/

    .post("/", async (req, res, next) => {
        try {
            let user = await User.create(req.body)
            res.send(user)
        } catch (error) {
            next(error)
        }
    }) /*WORKING*/
    .put(
        "/:id",
        /* JWTAuthMiddleware, */ async (req, res, next) => {
            try {
                let user = await User.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(user)
            } catch (error) {
                next(error)
            }
        }
    ) /*WORKING*/

    .delete("/:id", async (req, res, next) => {
        try {
            await User.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) /*WORKING*/

    .patch("/:id/avatar", avatarUpload, async (req, res, next) => {
        try {
            console.log(req.file)
            let updated = await User.findByIdAndUpdate(
                req.params.id,
                { avatar: req.file.path },
                { new: true }
            )
            res.send(updated)
        } catch (error) {
            next(error)
        }
    })

export default usersRouter
/* .get(
        "/:id/blogs",
        JWTAuthMiddleware, async (req, res, next) => {
            try {
                let author = await Blog.find({
                    author: req.params.id,
                }).populate({
                    path: "author",
                    select: ["name", "lastName", "avatar"],
                })
                res.send(author)
            } catch (error) {
                next(error)
            }
        }
    ) */
