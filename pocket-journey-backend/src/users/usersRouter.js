import express from "express"
import { User } from "./usersModel.js"
import avatarUpload from "../a-settings/cloudinary.js"
import authControl from "../a-settings/authControl.js"
import bcrypt from "bcrypt"

const usersRouter = express.Router()

usersRouter
    .get("/", authControl, async (req, res, next) => {
        try {
            let users = await User.find()
            res.send(users)
        } catch (error) {
            next(error)
        }
    })
    .get("/:id", authControl, async (req, res, next) => {
        try {
            let user = await User.findById(req.params.id)
            res.send(user)
        } catch (error) {
            next(error)
        }
    })

    .post("/", async (req, res) => {
        const password = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({
            ...req.body,
            password: password,
        })

        res.status(201).send(newUser)
    })

    .put("/:id", authControl, async (req, res, next) => {
        try {
            let user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            })
            res.send(user)
        } catch (error) {
            next(error)
        }
    })

    .put("/profile", authControl, async (req, res, next) => {
        try {
            const userId = req.user.id
            let user = await User.findByIdAndUpdate(userId, req.body, {
                new: true,
            })
            res.send(user)
        } catch (error) {
            next(error)
        }
    })

    .delete("/:id", async (req, res, next) => {
        try {
            await User.deleteOne({
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

    .delete("/session", async (req, res) => {})

export default usersRouter
