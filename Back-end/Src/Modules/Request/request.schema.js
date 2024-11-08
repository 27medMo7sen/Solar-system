import mongoose from "mongoose";

const partnerRequestSchema = new mongoose.Schema({
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
  notes: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

const partnerRequestModel = mongoose.model(
  "PartnerRequest",
  partnerRequestSchema
);

export default partnerRequestModel;
