import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  logo: {
    secure_url: String,
    public_id: String,
  },
  created_at: { type: Date, default: Date.now },
});
const brandModel = mongoose.model("Brand", brandSchema);
export default brandModel;
