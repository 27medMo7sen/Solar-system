import { globalResponse } from "./errorhandling.js";
import connectDB from "../../config/db.js";
import * as allRoutes from "../Modules/index.routes.js";

export const initiateApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.get("/", (req, res) => res.send("Hello World"));
  app.use("/auth", allRoutes.authRouter);
  app.use("/blogs", allRoutes.blogRouter);
  app.use("/brands", allRoutes.brandRouter);
  app.use("/carts", allRoutes.cartRouter);
  app.use("/categories", allRoutes.categoryRouter);
  app.use("/energy-data", allRoutes.energyDataRouter);
  app.use("/maintenances", allRoutes.maintenanceRouter);
  app.use("/orders", allRoutes.orderRouter);
  app.use("/products", allRoutes.productRouter);

  // global route
  app.all("*", (req, res) => {
    res.status(404).json({ message: "404 not found" });
  });

  app.use(globalResponse);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
