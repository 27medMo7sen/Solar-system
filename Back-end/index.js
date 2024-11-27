import express from "express";
import { config } from "dotenv";
import { initiateApp } from "./Src/Utils/initiateApp.js";
const app = express();
config();
initiateApp(app, express);