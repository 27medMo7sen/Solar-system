import express from "express";
import * as ec from "./energyData.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
const router = express.Router();
router.post("/", asyncHandler(ec.createEnergyData));
router.get("/", asyncHandler(ec.getEnergyData));
router.get("/:id", asyncHandler(ec.getEnergyDataById));
router.put("/:id", asyncHandler(ec.updateEnergyData));
router.delete("/:id", asyncHandler(ec.deleteEnergyData));

export default router;
