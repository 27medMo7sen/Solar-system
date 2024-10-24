import express from "express";
import * as mc from "./maintenance.controller.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import * as schema from "./maintenance.validationSchemas.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
const router = express.Router();
router.post(
  "/",
  validateBody(schema.createMaintenanceSchema),
  asyncHandler(mc.createMaintenance)
);
router.get("/", asyncHandler(mc.getMaintenances));
router.get("/:id", validateId(), asyncHandler(mc.getMaintenanceById));
router.put(
  "/:id",
  validateId(),
  validateBody(schema.updateMaintenanceSchema),
  asyncHandler(mc.updateMaintenance)
);
router.delete("/:id", validateId(), asyncHandler(mc.deleteMaintenance));

export default router;
