import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import maintenanceRoutes from "./routes/maintenanceRoutes.js";
import energyDataRoutes from "./routes/energyDataRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import { config } from "dotenv";
const app = express();
const PORT = 3000;
config();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/maintenances", maintenanceRoutes);
app.use("/api/energy-data", energyDataRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/carts", cartRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
