import mongoose from "mongoose";
import blogModel from "../Src/Modules/Blog/blog.schema.js";
import brandModel from "../Src/Modules/Brand/brand.schema.js";
import cartModel from "../Src/Modules/Cart/cart.schema.js";
import categoryModel from "../Src/Modules/Category/category.schema.js";
import energyDataModel from "../Src/Modules/EnergyData/energyData.schema.js";
import maintenanceModel from "../Src/Modules/Maintenance/maintenance.schema.js";
import orderModel from "../Src/Modules/Order/order.schema.js";
import productModel from "../Src/Modules/Product/product.schema.js";
import userModel from "../Src/Models/User.js";
import vendorModel from "../Src/Modules/Vendor/vendor.schema.js";
import partnerRequestModel from "../Src/Modules/Request/request.schema.js";

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
        .init()
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

      vendorModel
        .init()
        .then(() => console.log("Vendor collection created"))
        .catch((err) => console.log(err));

        partnerRequestModel
        .init()
        .then(() => console.log("Request collection created"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log("MongoDB connection error:", err));
};
export default connectDB;
