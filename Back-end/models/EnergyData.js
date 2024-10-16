const mongoose = require('mongoose');

const energyDataSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  usage: Number,
  start_time_interval: Date,
  end_time_interval: Date,
  savings_estimate: Number,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EnergyData', energyDataSchema);
