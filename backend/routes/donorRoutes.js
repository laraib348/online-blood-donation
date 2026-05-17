const express = require('express');
const router = express.Router();
const Donor = require('../models/donor');

// Add Donor
router.post('/add', async (req, res) => {
    try {
        const donor = new Donor(req.body);
        await donor.save();

        res.status(201).json({
            success: true,
            message: "Donor added Successfully",
            donor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Get All Donors
router.get('/all', async (req, res) => {
    try {
        const donors = await Donor.find();

        res.status(200).json({
            success: true,
            donors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
// Delete donor
router.delete('/delete/:id', async (req, res) => {
    try {
        await Donor.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Donor Deleted Successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;