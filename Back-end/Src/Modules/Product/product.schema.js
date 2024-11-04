import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  power_output: Number,
  efficiency: Number,
  images: [
    {
      secure_url: String,
      public_id: String,
    },
  ],
  brand: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Brand" },
  warranty_years: Number,
  price: {type: Number, index: true},
  stock_quantity: Number,
  created_at: { type: Date, default: Date.now, index: true },
});
const productModel = mongoose.model("Product", productSchema);
export default productModel;
