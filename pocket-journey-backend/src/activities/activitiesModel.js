import mongoose, { Schema } from "mongoose"

const ActivitiesSchema = new Schema({
    destination: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    guests: {
        type: String,
    },
    activity: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pricePerPerson: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
})

export const Activity = mongoose.model("activities", ActivitiesSchema)
