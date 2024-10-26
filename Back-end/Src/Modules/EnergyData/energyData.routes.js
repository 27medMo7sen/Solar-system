import express from "express";
import * as ec from "./energyData.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as schema from "./energyData.validationSchemas.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import { validateQuery } from "../../Middlewares/queryValidation.js";

const router = express.Router();
router.post(
  "/",
  validateBody(schema.createEnergyDataSchema),
  asyncHandler(ec.createEnergyData)
);
router.get("/", validateQuery(), asyncHandler(ec.getEnergyData));
router.get("/:id", validateId(), asyncHandler(ec.getEnergyDataById));
router.put(
  "/:id",
  validateId(),
  validateBody(schema.updateEnergyDataSchema),
  asyncHandler(ec.updateEnergyData)
);
router.delete("/:id", validateId(), asyncHandler(ec.deleteEnergyData));

export default router;
