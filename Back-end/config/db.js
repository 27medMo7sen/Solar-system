import mongoose from "mongoose";
import blogModel from "../models/Blog.js";
import brandModel from "../models/Brand.js";
import cartModel from "../models/Cart.js";
import categoryModel from "../models/Category.js";
import energyDataModel from "../models/EnergyData.js";
import maintenanceModel from "../models/Maintenance.js";
import orderModel from "../models/Order.js";
import productModel from "../models/Product.js";
import userModel from "../models/User.js";

import { config } from "dotenv";
const connectDB = async () => {
  // Connect to MongoDB
  config();
  mongoose
    .connect(process.env.CONNECTION_DB_URL)
    .then(() => {
      console.log("MongoDB connected");

      // Create collections without inserting data
      userModel
        .createCollection()
        .then(() => console.log("User collection created"))
        .catch((err) => console.log(err));

      energyDataModel
        .init()
        .then(() => console.log("EnergyData collection created"))
        .catch((err) => console.log(err));

      maintenanceModel
        .init()
        .then(() => console.log("Maintenance collection created"))
        .catch((err) => console.log(err));

      productModel
        .init()
        .then(() => console.log("Product collection created"))
        .catch((err) => console.log(err));

      categoryModel
        .init()
        .then(() => console.log("Category collection created"))
        .catch((err) => console.log(err));

      blogModel
        .init()
        .then(() => console.log("Blog collection created"))
        .catch((err) => console.log(err));

      orderModel
        .init()
        .then(() => console.log("Order collection created"))
        .catch((err) => console.log(err));

      cartModel
        .init()
        .then(() => console.log("Cart collection created"))
        .catch((err) => console.log(err));

      brandModel
        .init()
        .then(() => console.log("Brand collection created"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log("MongoDB connection error:", err));
};
export default connectDB;
