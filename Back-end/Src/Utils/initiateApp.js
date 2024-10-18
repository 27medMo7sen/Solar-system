import { globalResponse } from "./errorhandling.js";
import connectDB from "../../config/db.js";
import * as allRoutes from "../Modules/index.routes.js";

// Add your route imports here
import userRoutes from '../../routes/userRoutes.js';
import productRoutes from '../../routes/productRoutes.js';
import orderRoutes from '../../routes/orderRoutes.js';
import maintenanceRoutes from '../../routes/maintenanceRoutes.js';
import energyDataRoutes from '../../routes/energyDataRoutes.js';
import categoryRoutes from '../../routes/categoryRoutes.js';
import brandRoutes from '../../routes/brandRoutes.js';
import blogRoutes from '../../routes/blogRoutes.js';
import cartRoutes from '../../routes/cartRoutes.js';

export const initiateApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.get("/", (req, res) => res.send("Hello World"));
  app.use("/auth", allRoutes.authRouter);
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/maintenances", maintenanceRoutes);
  app.use("/api/energy-data", energyDataRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/brands", brandRoutes);
  app.use("/api/blogs", blogRoutes);
  app.use("/api/carts", cartRoutes);
  app.all("*", (req, res) => {
    res.status(404).json({ message: "404 not found" });
  });
  app.use(globalResponse);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
