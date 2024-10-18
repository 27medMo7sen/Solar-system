import express from 'express';
import { createEnergyData, getEnergyData, getEnergyDataById, updateEnergyData, deleteEnergyData } from '../controllers/energyDataController.js';

const router = express.Router();
router.post('/', createEnergyData);
router.get('/', getEnergyData);
router.get('/:id', getEnergyDataById);
router.put('/:id', updateEnergyData);
router.delete('/:id', deleteEnergyData);

export default router;