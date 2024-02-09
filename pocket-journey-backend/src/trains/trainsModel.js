import mongoose, { Schema } from "mongoose"

const TrainsSchema = new Schema({
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
    trainCompany: {
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
})

export const Train = mongoose.model("trains", TrainsSchema)
