import productModel from '../models/Product.js';
import categoryModel from '../models/Category.js';
import brandModel from '../models/Brand.js';

export const createProduct = async (req, res) => {
  try {
    const { category_id, brand } = req.body;

    const category = await categoryModel.findById(category_id);
    if (!category) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const brandExists = await brandModel.findById(brand);
    if (!brandExists) {
      return res.status(400).json({ message: 'Invalid brand ID' });
    }

    const product = new productModel(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { category_id, brand } = req.body;

    if (category_id) {
      const category = await categoryModel.findById(category_id);
      if (!category) {
        return res.status(400).json({ message: 'Invalid category ID' });
      }
    }

    if (brand) {
      const brandExists = await brandModel.findById(brand);
      if (!brandExists) {
        return res.status(400).json({ message: 'Invalid brand ID' });
      }
    }

    const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};