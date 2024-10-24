import orderModel from "./order.schema.js";

export const createOrder = async (req, res) => {
  const order = new orderModel(req.body);
  await order.save();
  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const orders = await orderModel.find();
  res.status(200).json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await orderModel.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json(order);
};

export const updateOrder = async (req, res) => {
  const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json(order);
};

export const deleteOrder = async (req, res) => {
  const order = await orderModel.findByIdAndDelete(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json({ message: "Order deleted successfully" });
};
