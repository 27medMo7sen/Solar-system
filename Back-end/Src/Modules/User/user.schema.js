import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  address: {
    location: String,
    zip_code: Number,
    city: String,
  },
  profile_pic: String,
  installed_products: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      installation_location: String,
      date_of_installation: Date,
      end_of_warranty: Date,
    },
  ],
  monthly_consumption: Number,
  created_at: { type: Date, default: Date.now, index: true },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
