import express from "express";
import { config } from "dotenv";
import path from "path";
import { initiateApp } from "./Src/Utils/initiateApp.js";
const app = express();
config({ path: path.resolve(".env") });
initiateApp(app, express);
