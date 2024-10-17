import mongoose from 'mongoose';
const addressSchema = new mongoose.Schema({
  location: String,
  zip_code: Number,
  city: String,
  size: Number,
  address_type: String,
  created_at: { type: Date, default: Date.now }
});

const userModel = mongoose.model('Address', addressSchema);
export default userModel;