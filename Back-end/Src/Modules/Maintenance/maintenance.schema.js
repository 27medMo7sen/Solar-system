import mongoose from 'mongoose';

const maintenanceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time: Date,
  done_by: String,
  type: String,
  details: String,
  next_maintenance: Date,
  created_at: { type: Date, default: Date.now }
});

const maintenanceModel = mongoose.model('Maintenance', maintenanceSchema);
export default maintenanceModel;