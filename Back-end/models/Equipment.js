const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: String,
  model: String,
  serial_number: String,
  manufacturer: String,
  type: String,
  description: String,
  date_of_installation: Date,
  installation_location: String,
  end_of_warranty: Date
});

module.exports = mongoose.model('Equipment', equipmentSchema);
