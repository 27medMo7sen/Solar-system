import cartModel from "../models/Cart.js";
import userModel from "../models/User.js";
import productModel from "../models/Product.js";

export const createCart = async (req, res) => {
  try {
    const { user_id, products } = req.body;

    const user = await userModel.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    for (const item of products) {
      const product = await productModel.findById(item.product_id);
      if (!product) {
        return res
          .status(400)
          .json({ message: `Invalid product ID: ${item.product_id}` });
      }
    }

    const cart = new cartModel(req.body);
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCarts = async (req, res) => {
  try {
    const carts = await cartModel.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCartById = async (req, res) => {
  try {
    const cart = await cartModel.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { user_id, products } = req.body;

    if (user_id) {
      const user = await userModel.findById(user_id);
      if (!user) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
    }

    if (products) {
      for (const item of products) {
        const product = await productModel.findById(item.product_id);
        if (!product) {
          return res
            .status(400)
            .json({ message: `Invalid product ID: ${item.product_id}` });
        }
      }
    }

    const cart = await cartModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const cart = await cartModel.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
