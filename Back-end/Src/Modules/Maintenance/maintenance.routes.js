import express from "express";
import * as mc from "./maintenance.controller.js";
const router = express.Router();
router.post("/", mc.createMaintenance);
router.get("/", mc.getMaintenances);
router.get("/:id", mc.getMaintenanceById);
router.put("/:id", mc.updateMaintenance);
router.delete("/:id", mc.deleteMaintenance);

export default router;
