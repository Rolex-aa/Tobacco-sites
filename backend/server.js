require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const path      = require('path');

const enquiriesRouter = require('./routes/enquiries');
const authRouter      = require('./routes/auth');
const productsRouter  = require('./routes/products');
const salesRouter     = require('./routes/sales');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/machine', express.static(path.join(__dirname, 'public/machine')));
app.use('/parts',   express.static(path.join(__dirname, 'public/parts')));

// ── Routes ──────────────────────────────────────────────────
app.use('/api/enquiries', enquiriesRouter);
app.use('/api/auth',      authRouter);
app.use('/api/products',  productsRouter);
app.use('/api/sales',     salesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'NK Engineering API is running ✅' });
});

// ── Connect & Start ─────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅  MongoDB connected');
    app.listen(PORT, () =>
      console.log(`🚀  Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌  MongoDB connection error:', err.message);
    process.exit(1);
  });
