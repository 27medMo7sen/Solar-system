import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;
