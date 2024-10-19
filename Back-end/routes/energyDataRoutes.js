import express from 'express';
import { createEnergyData, getEnergyData, getEnergyDataById, updateEnergyData, deleteEnergyData } from '../controllers/energyDataController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { createEnergyDataSchema, updateEnergyDataSchema } from '../validation/energyDataValidation.js';

const router = express.Router();
router.post('/', validate(createEnergyDataSchema), createEnergyData);
router.get('/', getEnergyData);
router.get('/:id', getEnergyDataById);
router.put('/:id', validate(updateEnergyDataSchema), updateEnergyData);
router.delete('/:id', deleteEnergyData);

export default router;