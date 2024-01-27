import mongoose, { Schema } from "mongoose"

const RestaurantsSchema = new Schema({
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
    adults: {
        type: String,
    },
    children: {
        type: String,
    },
    infants: {
        type: String,
    },
    restaurantName: {
        type: String,
        required: true,
    },
    fixedPriceMenu: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

})

export const Restaurant = mongoose.model("restaurants", RestaurantsSchema)