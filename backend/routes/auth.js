const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const User    = require('../models/User');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user._id, role: 'admin' }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// Initial Setup (Temporary - only for first user)
router.post('/register-initial', async (req, res) => {
  try {
    const count = await User.countDocuments();
    if (count > 0) return res.status(403).json({ error: 'Admin already exists' });
    
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.json({ success: true, message: 'Admin created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
