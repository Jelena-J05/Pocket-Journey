import mongoose, { Schema } from "mongoose"

const PostsSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: "users" }],
    description: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: Schema.Types.ObjectId, ref: "users" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
})

export const Post = mongoose.model("posts", PostsSchema)
