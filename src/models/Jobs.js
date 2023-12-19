import { Schema } from "mongoose";

export const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pay: {
        type: Number,
        required: true
    }
})