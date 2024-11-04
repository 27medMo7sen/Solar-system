import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  products: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
      quantity: Number 
    }
  ],
  created_at: { type: Date, default: Date.now, index: true },
});

const cartModel = mongoose.model('Cart', cartSchema);
export default cartModel;
