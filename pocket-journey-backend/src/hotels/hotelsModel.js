import mongoose, { Schema } from "mongoose"

const HotelsSchema = new Schema({
    destination: {
        type: String,
        required: true,
    },
    checkIn: {
        type: String,
        required: true,
    },
    checkOut: {
        type: String,
    },
    rooms: {
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
    hotelName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    stars: {
        type: String,
        required: true,
    },

})

export const Hotel = mongoose.model("hotels", HotelsSchema)