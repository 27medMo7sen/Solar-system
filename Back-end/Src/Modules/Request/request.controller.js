import partnerRequestModel from "./request.schema.js";
import vendorModel from "../Vendor/vendor.schema.js";
import { randomBytes } from "crypto";
import accountModel from "../Auth/account.schema.js";
import { hashSync } from "bcrypt";

export const createRequest = async (req, res) => {
  const request = new partnerRequestModel({ ...req.body });
  await request.save();
  res.status(201).json(request);
};

export const getRequests = async (req, res) => {
  const requests = await partnerRequestModel.find();
  res.status(200).json(requests);
};

export const getRequestById = async (req, res, next) => {
  const request = await partnerRequestModel.findById(req.params.id);
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  res.status(200).json(request);
};

export const approveRequest = async (req, res, next) => {
  const request = await partnerRequestModel.findById(req.params.id);
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  const password = randomBytes(12).toString('hex').slice(0, 12)
  console.log('password', password)
  const hashedPassword = await hashSync(password, 10);
  const accountData = {
    email: request.email,
    role: 'vendor',
    password: hashedPassword,
    isVerified: true
  }
  const vendorData = {
    company_name: request.company_name,
    contact_person: request.contact_person,
    phone_number: request.phone_number,
    website: request.website || null,
    address: request.address || null,
  };
  const vendor = new vendorModel(vendorData);
  await vendor.save();
  const account = new accountModel(accountData)
  await account.save()
  await partnerRequestModel.deleteOne({ _id: req.params.id });
  res.status(200).json(vendor);
};

export const updateRequest = async (req, res, next) => {
  const request = await partnerRequestModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  res.status(200).json(request);
};

export const deleteRequest = async (req, res, next) => {
  const request = await partnerRequestModel.findByIdAndDelete(req.params.id);
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Request deleted successfully" });
};
