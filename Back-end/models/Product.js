import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  description: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  power_output: Number,
  efficiency: Number,
  images: [String],
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
  warranty_years: Number,
  price: Number,
  stock_quantity: Number,
  created_at: { type: Date, default: Date.now },
});
const productModel = mongoose.model("Product", productSchema);
export default productModel;
