const mongoose = require('mongoose')
const Donation = require('../models/Donation')
const router = require('../routes/donations')

// get all donations
const getAllDonations = async (req, res) => {
    try{
        // find and sort in descending order by date
        const donations = await Donation.find().sort({createdAt: -1})
        res.status(200).json(donations)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// get a single donation
const getDonation = async (req, res) => {
    const {id} = req.params

    // check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such donation"})
    }
    try{
        const donation = await Donation.findById(id)
        // if no donation found
        if(!donation){
            return res.status(400).json({error: "No such donation"})
        }
        res.status(200).json(donation)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// create new donation
const createDonation = async (req, res) => {
	console.log("here: ", req.body)
    const {
        title,
        description,
        foodItems,
        address,
        forNumberOfPeople,
        donationMode,
        donationStatus
    } = req.body.data
    // add doc to db
    try{
        const donation = await Donation.create({
            title,
            description,
            foodItems,
            address,
            forNumberOfPeople,
            donationMode,
            donationStatus
        })
        res.status(200).json(donation)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a donation
const deleteDonation = async(req, res) => {
    const {id} = req.params

    // check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such donation"})
    }
    try{
        const donation = await Donation.findByIdAndDelete(id)
        // if no donation found
        if(!donation){
            return res.status(400).json({error: "No such donation"})
        }
        res.status(200).json(donation)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// update a donation
const updateDonation = async(req, res) => {
    const {id} = req.params

    // check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such donation"})
    }
    try{
        //  '...' spreads the objects
        const donation = await Donation.findByIdAndUpdate(id,{
            ...req.body.data
        })
        // if no donation found
        if(!donation){
            return res.status(400).json({error: "No such donation"})
        }
        res.status(200).json(donation)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllDonations,
    getDonation,
    createDonation,
    deleteDonation,
    updateDonation,
}