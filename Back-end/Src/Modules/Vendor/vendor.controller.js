import vendorModel from "./vendor.schema.js";

export const createVendor = async (req, res) => {
  const vendor = new vendorModel({ ...req.body });
  await vendor.save();
  res.status(201).json(vendor);
};

export const getVendors = async (req, res) => {
  const vendors = await vendorModel.find();
  res.status(200).json(vendors);
};

export const getVendorById = async (req, res, next) => {
  const vendor = await vendorModel.findById(req.params.id);
  if (!vendor) {
    return next(new Error("Vendor not found", { cause: 404 }));
  }
  res.status(200).json(vendor);
};

export const updateVendor = async (req, res, next) => {
  const vendor = await vendorModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!vendor) {
    return next(new Error("Vendor not found", { cause: 404 }));
  }
  res.status(200).json(vendor);
};

export const deleteVendor = async (req, res, next) => {
  const vendor = await vendorModel.findByIdAndDelete(req.params.id);
  if (!vendor) {
    return next(new Error("Vendor not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Vendor deleted successfully" });
};
