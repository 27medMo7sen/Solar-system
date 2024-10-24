const mongoose = require('mongoose');

const partnerRequestSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  contact_person: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  website: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  notes: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});

const PartnerRequest = mongoose.model('PartnerRequest', partnerRequestSchema);

module.exports = PartnerRequest;
