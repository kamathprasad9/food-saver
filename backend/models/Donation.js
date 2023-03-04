const mongoose = require("mongoose");
const { Schema } = mongoose;

const donationSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    foodItems:{
        type: String,
        required: true
    },
    forNumberOfPeople:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    donationMode:{
        type: String,
        required: true
    },
    donationStatus:{
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Donation', donationSchema)