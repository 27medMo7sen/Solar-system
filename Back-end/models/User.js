const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  created_at: { type: Date, default: Date.now },
  address_id: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  role: {
    type: String,
    enum: ["admin", "user", "vendor"],
    default: "user",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }, // Hash the password before storing
  installed_units_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: "InstalledUnit" },
  ],
  monthly_consumption: Number,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);