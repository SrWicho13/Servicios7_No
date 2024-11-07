const { default: Facturapi } = require('facturapi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['ELECTRONICS', 'CLOTHING', 'FOOD', 'TOYS'], required: true },
  brand: { type: String, required: true }, 
  stock: { type: Number, default: 0 },
  creationDate: { type: Date, default: Date.now },
  imgs: [String],
  Facturapiid: {type: String, required: true},
});

module.exports = mongoose.model('Product', productSchema);
