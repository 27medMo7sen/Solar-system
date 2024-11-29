import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  email: { type: String, index: true },
  password: String,
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    required: true,
  },
  token: String,
  isConfirmed: { type: Boolean, default: false },
  profile: {
    type: mongoose.Schema.Types.Mixed,
    default: null,
  },
  created_at: { type: Date, default: Date.now, index: true },
});

const accountModel = mongoose.model("Account", accountSchema);
export default accountModel;
