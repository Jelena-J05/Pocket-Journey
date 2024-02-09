import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../users/usersModel.js"
import avatarUpload from "../a-settings/cloudinary.js"

const registerRouter = express.Router()

registerRouter.post("/", avatarUpload, async (req, res, next) => {
    try {
        const { email, password, name, lastName, birthday, bio } = req.body

        const avatarUrl = req.file ? req.file.path : ""

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            email,
            password: hashedPassword,
            name,
            lastName,
            birthday,
            bio,
            avatar: avatarUrl,
        })

        await user.save()

        const payload = {
            id: user._id,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            birthday: user.birthday,
            avatar: avatarUrl,
            bio: user.bio,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "120d",
        })

        res.status(201).json({
            message: "User registered successfully",
            token: token,
            payload: {
                id: user.id,
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                birthday: user.birthday,
                avatar: user.avatar,
                bio: user.bio,
            },
        })
    } catch (error) {
        next(error)
    }
})

export default registerRouter
