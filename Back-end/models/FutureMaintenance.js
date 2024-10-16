const mongoose = require('mongoose');

const futureMaintenanceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scheduled_date: Date,
  type: String,
  details: String
});

module.exports = mongoose.model('FutureMaintenance', futureMaintenanceSchema);
