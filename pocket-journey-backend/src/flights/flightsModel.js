import mongoose, { Schema } from "mongoose"

const FlightsSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departureDate: {
        type: String,
        required: true,
    },
    returnDate: {
        type: String,
    },

    adults: {
        type: String,
    },
    children: {
        type: String,
    },
    infants: {
        type: String,
    },
    airlineCompany: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    time: {
        type: String,
    },
})

export const Flight = mongoose.model("flights", FlightsSchema)
