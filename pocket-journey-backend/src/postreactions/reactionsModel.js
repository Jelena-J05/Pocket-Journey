import mongoose, { Schema } from "mongoose"

const ReactionsSchema = new Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    image: String, 
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  });
  
export const Reaction = mongoose.model("reactions", ReactionsSchema)
