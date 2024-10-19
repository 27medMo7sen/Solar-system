import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  created_at: { type: Date, default: Date.now },
});

const blogModel = mongoose.model("Blog", blogSchema);
export default blogModel;
