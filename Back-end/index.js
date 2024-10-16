import express from "express";
import path from "path";
import { config } from "dotenv";
const app = express();
const PORT = 3000;
config({ path: path.resolve("./Config/config.env") });
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
