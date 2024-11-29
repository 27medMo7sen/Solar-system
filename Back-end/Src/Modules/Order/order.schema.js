import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }, 
  cart_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }, 
  total_price: Number, 
  shipping_address: String, 
  status: String, 
  created_at: { type: Date, default: Date.now, index: true }
});

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;
