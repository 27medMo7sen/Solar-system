import { globalResponse } from "./errorhandling.js";
import connectDB from "../../config/db.js";
import * as allRoutes from "../Modules/index.routes.js";
import cors from "cors";

export const initiateApp = (app, express) => {
  app.use(express.json());
  connectDB();

  app.use(cors({ origin: "https://solarease.vercel.app", 
    credentials: true,
    "Access-Control-Allow-Credentials": true,
    allowedHeaders: ["Content-Type", "Authorization", "x-requested-with"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }));
  // Test route
  app.get("/", (req, res) => res.send("Hello World"));

  // API routes
  app.use("/api/auth", allRoutes.authRouter);
  app.use("/api/blogs", allRoutes.blogRouter);
  app.use("/api/brands", allRoutes.brandRouter);
  app.use("/api/carts", allRoutes.cartRouter);
  app.use("/api/categories", allRoutes.categoryRouter);
  app.use("/api/energy-data", allRoutes.energyDataRouter);
  app.use("/api/maintenances", allRoutes.maintenanceRouter);
  app.use("/api/orders", allRoutes.orderRouter);
  app.use("/api/products", allRoutes.productRouter);
  app.use("/api/requests", allRoutes.requestRouter);
  app.use("/api/vendors", allRoutes.vendorRouter);

  // 404 route
  app.all("*", (req, res) => {
    res.status(404).json({ message: "404 not found" });
  });

  // Error handling middleware
  app.use(globalResponse);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
