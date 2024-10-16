const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time: Date,
  done_by: String,
  type: String,
  equipment_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' }],
  details: String,
  next_maintenance_id: { type: mongoose.Schema.Types.ObjectId, ref: 'FutureMaintenance' }
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
