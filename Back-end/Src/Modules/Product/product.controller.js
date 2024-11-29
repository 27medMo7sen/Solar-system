import productModel from "./product.schema.js";

export const createProduct = async (req, res) => {
  const product = new productModel({ ...req.body });
  await product.save();
  res.status(201).json(product);
};

export const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return next(new Error("Product not found", { cause: 404 }));
  }
  res.status(200).json(product);
};

export const updateProduct = async (req, res, next) => {
  const product = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!product) {
    return next(new Error("Product not found", { cause: 404 }));
  }
  res.status(200).json(product);
};

export const deleteProduct = async (req, res, next) => {
  const product = await productModel.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new Error("Product not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Product deleted successfully" });
};
