import mongoose, { Schema } from "mongoose"

const ReactionsSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users" },
    description: { type: String, required: true },
    image: String,
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: Schema.Types.ObjectId, ref: "users" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
})

export const Reaction = mongoose.model("reactions", ReactionsSchema)
