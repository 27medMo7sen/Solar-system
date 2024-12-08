import express from "express";
import { config } from "dotenv";
import { initiateApp } from "./Src/Utils/initiateApp.js";
const app = express();
app.options("*", cors());

app.use(
    cors({
      origin: "https://solarease.vercel.app",
      credentials: true,
    })
  );
config();
initiateApp(app, express);