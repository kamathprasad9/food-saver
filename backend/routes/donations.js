const express = require('express');
const {
    getAllDonations,
    getDonation,
    createDonation,
    deleteDonation,
    updateDonation,
} = require('../controllers/donationController')

const router = express.Router()

// relative route. i.e. /api/workouts/
// GET all workouts
router.get('/', getAllDonations)

// GET a single workout
router.get('/:id', getDonation)

// POST a single workout
router.post('/', createDonation)

// DELETE a single workout
router.delete('/:id', deleteDonation)

// UPDATE a single workout
router.patch('/:id', updateDonation)

// export all the above routes to
module.exports = router