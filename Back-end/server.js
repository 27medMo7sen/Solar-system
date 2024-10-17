import express from "express";
import connectDB from "./Config/db.js";
import { config } from "dotenv";
import path from "path";
const app = express();

connectDB();
config({ path: path.resolve(".env") });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
