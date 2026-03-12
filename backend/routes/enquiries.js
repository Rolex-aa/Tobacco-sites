const express = require('express');
const router  = express.Router();
const Enquiry = require('../models/Enquiry');

// POST /api/enquiries – submit a new enquiry
router.post('/', async (req, res) => {
  try {
    const { name, phone, city, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Name and phone are required.' });
    }
    const enquiry = await Enquiry.create({ name, phone, city, message });
    res.status(201).json({ success: true, data: enquiry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET /api/enquiries – list all enquiries
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

module.exports = router;
