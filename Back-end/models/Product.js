import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  power_output: Number,
  efficiency: Number,
  warranty_years: Number,
  price: Number,
  stock_quantity: Number,
  installation_date: Date,
  created_at: { type: Date, default: Date.now },
});
const productModel = mongoose.model("Product", productSchema);
export default productModel;