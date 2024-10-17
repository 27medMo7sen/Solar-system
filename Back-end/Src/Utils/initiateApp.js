import { globalResponse } from "./errorhandling.js";
import connectDB from "../../Config/db.js";
import * as allRoutes from "../Modules/index.routes.js";
export const initiateApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.get("/", (req, res) => res.send("Hello World"));
  app.use("/auth", allRoutes.authRouter);
  const port = process.env.PORT || 3000;
  app.all("*", (req, res, next) => {
    res.status(404).json({ message: "404 not found" });
  });
  app.use(globalResponse);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
