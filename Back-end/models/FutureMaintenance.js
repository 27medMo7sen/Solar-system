import mongoose from 'mongoose';

const futureMaintenanceSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scheduled_date: Date,
  type: String,
  details: String,
  created_at: { type: Date, default: Date.now }
});

const futureMaintenanceModel = mongoose.model('FutureMaintenance', futureMaintenanceSchema);
export default futureMaintenanceModel;