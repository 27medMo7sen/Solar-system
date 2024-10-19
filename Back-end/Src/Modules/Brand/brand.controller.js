import brandModel from "../../../models/Brand.js";
export const createBrand = async (req, res) => {
  const brand = new brandModel({ ...req.body });
  await brand.save();
  res.status(201).json(brand);
};

export const getBrands = async (req, res) => {
  const brands = await brandModel.find();
  res.status(200).json(brands);
};

export const getBrandById = async (req, res, next) => {
  const brand = await brandModel.findById(req.params.id);
  if (!brand) {
    return next(new Error("Brand not found", { cause: 404 }));
  }
  res.status(200).json(brand);
};

export const updateBrand = async (req, res, next) => {
  const brand = await brandModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!brand) {
    return next(new Error("Brand not found", { cause: 404 }));
  }
  res.status(200).json(brand);
};

export const deleteBrand = async (req, res, next) => {
  const brand = await brandModel.findByIdAndDelete(req.params.id);
  if (!brand) {
    return next(new Error("Brand not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Brand deleted successfully" });
};
