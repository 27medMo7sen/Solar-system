import express from "express";
import * as ec from "./energyData.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as schema from "./energyData.validationSchemas.js";
import { validate } from "../../Middlewares/validation.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createEnergyDataSchema),
  asyncHandler(ec.createEnergyData)
);
router.get("/", asyncHandler(ec.getEnergyData));
router.get("/:id", asyncHandler(ec.getEnergyDataById));
router.put(
  "/:id",
  validate(schema.updateEnergyDataSchema),
  asyncHandler(ec.updateEnergyData)
);
router.delete("/:id", asyncHandler(ec.deleteEnergyData));

export default router;
