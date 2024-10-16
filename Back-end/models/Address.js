const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  location: String,
  zip_code: Number,
  city: String,
  size: Number,
  address_type: String
});

module.exports = mongoose.model('Address', addressSchema);
