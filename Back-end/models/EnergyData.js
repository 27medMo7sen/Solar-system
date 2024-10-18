import mongoose from "mongoose";
const energyDataSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  usage: Number,
  start_time_interval: Date,
  end_time_interval: Date,
  savings_estimate: Number,
  created_at: { type: Date, default: Date.now },
});

const energyDataModel = mongoose.model("EnergyData", energyDataSchema);
export default energyDataModel;