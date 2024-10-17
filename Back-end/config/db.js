const mongoose = require("mongoose");
import userModel from "../models/User";
import addressModel from "../models/Address";
import energyDataModel from "../models/EnergyData";
import maintenanceModel from "../models/Maintenance";
import futureMaintenanceModel from "../models/FutureMaintenance";
import productModel from "../models/Product";
import categoryModel from "../models/Category";
import installedUnitModel from "../models/InstalledUnit";
import blogModel from "../models/Blog";

require("dotenv").config();

const connectDB = async () => {
  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");

      // Create collections without inserting data
      userModel
        .createCollection()
        .then(() => console.log("User collection created"))
        .catch((err) => console.log(err));

      addressModel
        .createCollection()
        .then(() => console.log("Address collection created"))
        .catch((err) => console.log(err));

      energyDataModel
        .createCollection()
        .then(() => console.log("EnergyData collection created"))
        .catch((err) => console.log(err));

      maintenanceModel
        .createCollection()
        .then(() => console.log("Maintenance collection created"))
        .catch((err) => console.log(err));

      futureMaintenanceModel
        .createCollection()
        .then(() => console.log("FutureMaintenance collection created"))
        .catch((err) => console.log(err));

      productModel
        .createCollection()
        .then(() => console.log("Product collection created"))
        .catch((err) => console.log(err));

      categoryModel
        .createCollection()
        .then(() => console.log("Category collection created"))
        .catch((err) => console.log(err));

      installedUnitModel
        .createCollection()
        .then(() => console.log("InstalledUnit collection created"))
        .catch((err) => console.log(err));

      blogModel
        .createCollection()
        .then(() => console.log("Blog collection created"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log("MongoDB connection error:", err));
};
export default connectDB;
