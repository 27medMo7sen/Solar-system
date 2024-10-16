const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  location: String,
  zip_code: Number,
  city: String,
  size: Number,
  address_type: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Address', addressSchema);
