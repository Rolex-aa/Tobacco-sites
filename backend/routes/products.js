const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const path    = require('path');
const Product = require('../models/Product');
const auth    = require('../middleware/auth');

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// PUBLIC: GET all products
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};
    if (category) query.category = category;
    if (featured) query.isFeatured = featured === 'true';

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// ADMIN: Create a product
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, category, specifications, isFeatured } = req.body;
    if (!req.file) return res.status(400).json({ success: false, error: 'Image is required.' });

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image: `/uploads/${req.file.filename}`,
      specifications: specifications ? JSON.parse(specifications) : [],
      isFeatured: isFeatured === 'true'
    });

    res.status(201).json({ success: true, data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// ADMIN: Update product
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const updates = { ...req.body };
    if (req.file) updates.image = `/uploads/${req.file.filename}`;
    if (updates.specifications) updates.specifications = JSON.parse(updates.specifications);
    if (updates.isFeatured) updates.isFeatured = updates.isFeatured === 'true';

    const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// ADMIN: Delete product
router.delete('/:id', auth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Product deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// SEED: Initial Products
router.post('/seed-initial', async (req, res) => {
  try {
    await Product.deleteMany({}); // Clear existing to prevent duplicates and restore original state

    const machines = Array.from({ length: 7 }, (_, i) => ({
      name: `NK Engineering Model ${5000 + i * 100}`,
      description: 'High-speed tobacco making machine with automatic feeding system. Durable, low maintenance.',
      price: 100000 + (i * 5000),
      category: 'machine',
      image: `/machine/${i + 1}.jpeg`,
      isFeatured: i < 5,
      specifications: [{ label: 'Warranty', value: '1 Year' }]
    }));

    const parts = [
      { name: 'Internal Timing Gear', image: '/parts/3.jpg', price: 3800, category: 'parts', description: 'Durable gear set for synchronized material feeding and processing.', specifications: [{label: 'Material', value: 'Hardened Steel'}] },
      { name: 'Main Drive Assembly', image: '/parts/4.jpg', price: 9500, category: 'parts', description: 'Complete drive unit for specialized tobacco manufacturing models.', specifications: [{label: 'Compatibility', value: 'Pro Series'}] },
    ];

    await Product.insertMany([...machines, ...parts]);
    res.json({ success: true, message: 'Initial products restored.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
