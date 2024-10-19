import categoryModel from "../../../models/Category.js";

export const createCategory = async (req, res) => {
  console.log(req.body);
  const category = new categoryModel({ ...req.body });
  await category.save();
  res.status(201).json(category);
};

export const getCategories = async (req, res) => {
  const categories = await categoryModel.find();
  res.status(200).json(categories);
};

export const getCategoryById = async (req, res, next) => {
  const category = await categoryModel.findById(req.params.id);
  if (!category) {
    return next(new Error("Category not found", { cause: 404 }));
  }
  res.status(200).json(category);
};

export const updateCategory = async (req, res, next) => {
  const category = await categoryModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!category) {
    return next(new Error("Category not found", { cause: 404 }));
  }
  res.status(200).json(category);
};

export const deleteCategory = async (req, res, next) => {
  const category = await categoryModel.findByIdAndDelete(req.params.id);
  if (!category) {
    return next(new Error("Category not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Category deleted successfully" });
};
