import express from "express";
import * as mc from "./maintenance.controller.js";
import { validate } from "../../Middlewares/validation.js";
import * as schema from "./maintenance.validationSchemas.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createMaintenanceSchema),
  asyncHandler(mc.createMaintenance)
);
router.get("/", asyncHandler(mc.getMaintenances));
router.get("/:id", asyncHandler(mc.getMaintenanceById));
router.put(
  "/:id",
  validate(schema.updateMaintenanceSchema),
  asyncHandler(mc.updateMaintenance)
);
router.delete("/:id", asyncHandler(mc.deleteMaintenance));

export default router;
