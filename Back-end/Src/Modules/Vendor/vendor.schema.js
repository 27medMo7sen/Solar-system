import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  contact_person: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  profile_picture: {
    type: String,
    default: null,
  },
  brands: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const vendorModel = mongoose.model("Vendor", VendorSchema);

export default vendorModel;
