import express from "express";
import { config } from "dotenv";
import { initiateApp } from "./Src/Utils/initiateApp.js";
const app = express();
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://solarease.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-requested-with"
  );
  res.sendStatus(200); // Respond to preflight request
});

app.use(
  cors({
    origin: "https://solarease.vercel.app",
    credentials: true,
  })
);
config();
initiateApp(app, express);
