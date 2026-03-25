const express = require('express');
const router  = express.Router();
const Sale    = require('../models/Sale');
const auth    = require('../middleware/auth');

// POST /api/sales – Add a new sale (Public for now, usually from payment)
router.post('/', async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json({ success: true, data: sale });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// ADMIN: GET all sales (for graphs)
router.get('/stats', auth, async (req, res) => {
  try {
    const sales = await Sale.find().sort({ createdAt: 1 });
    
    // Group sales by day/month for charts
    const stats = sales.reduce((acc, sale) => {
      const date = sale.createdAt.toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + sale.totalAmount;
      return acc;
    }, {});

    const chartData = Object.keys(stats).map(date => ({
      date,
      amount: stats[date]
    }));

    res.json({ success: true, data: chartData });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

module.exports = router;
