import cartModel from "./cart.schema.js";

export const createCart = async (req, res) => {
  const cart = new cartModel(req.body);
  await cart.save();
  res.status(201).json(cart);
};

export const getCarts = async (req, res) => {
  const carts = await cartModel.find();
  res.status(200).json(carts);
};

export const getCartById = async (req, res, next) => {
  const cart = await cartModel.findById(req.params.id);
  if (!cart) {
    return next(new Error("Cart not found", { cause: 404 }));
  }
  res.status(200).json(cart);
};

export const updateCart = async (req, res, next) => {
  const cart = await cartModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!cart) {
    return next(new Error("Cart not found", { cause: 404 }));
  }
  res.status(200).json(cart);
};

export const deleteCart = async (req, res, next) => {
  const cart = await cartModel.findByIdAndDelete(req.params.id);
  if (!cart) {
    return next(new Error("Cart not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Cart deleted successfully" });
};
