import express from 'express';
import { createMaintenance, getMaintenances, getMaintenanceById, updateMaintenance, deleteMaintenance } from '../controllers/maintenanceController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { createMaintenanceSchema, updateMaintenanceSchema } from '../validation/maintenanceValidation.js';

const router = express.Router();
router.post('/', validate(createMaintenanceSchema), createMaintenance);
router.get('/', getMaintenances);
router.get('/:id', getMaintenanceById);
router.put('/:id', validate(updateMaintenanceSchema), updateMaintenance);
router.delete('/:id', deleteMaintenance);

export default router;