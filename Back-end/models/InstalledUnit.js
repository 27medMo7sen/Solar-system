const mongoose = require('mongoose');

const installedUnitSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Link to Product schema
  installation_location: String,
  date_of_installation: Date,
  end_of_warranty: Date,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InstalledUnit', installedUnitSchema);
