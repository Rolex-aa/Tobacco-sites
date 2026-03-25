const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: { type: String },
    quantity: { type: Number, default: 1 },
    price: { type: Number }
  }],
  totalAmount: { type: Number, required: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  status: { type: String, default: 'completed' }
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);
