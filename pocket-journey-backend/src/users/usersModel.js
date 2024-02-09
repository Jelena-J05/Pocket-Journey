import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    birthday: {
        type: String,
    },
    avatar: {
        type: String,
    },
    bio: {
        type: String,
    },

    likes: {
        type: String,
    },
})

export const User = mongoose.model("users", UsersSchema)
