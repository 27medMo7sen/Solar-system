import orderModel from '../models/Order.js';
import userModel from '../models/User.js';
import cartModel from '../models/Cart.js';

export const createOrder = async (req, res) => {
  try {
    const { user_id, cart_id } = req.body;

    const user = await userModel.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const cart = await cartModel.findById(cart_id);
    if (!cart) {
      return res.status(400).json({ message: 'Invalid cart ID' });
    }

    const order = new orderModel(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { user_id, cart_id } = req.body;

    if (user_id) {
      const user = await userModel.findById(user_id);
      if (!user) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
    }

    if (cart_id) {
      const cart = await cartModel.findById(cart_id);
      if (!cart) {
        return res.status(400).json({ message: 'Invalid cart ID' });
      }
    }

    const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await orderModel.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};