import { Schema } from "mongoose";

export const houseSchema = new Schema({
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        minLength: 3,
        maxLength: 80
    }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);