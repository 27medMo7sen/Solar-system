import express from 'express';
import { createBrand, getBrands, getBrandById, updateBrand, deleteBrand } from '../controllers/brandController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { createBrandSchema, updateBrandSchema } from '../validation/brandValidation.js';

const router = express.Router();
router.post('/', validate(createBrandSchema), createBrand);
router.get('/', getBrands);
router.get('/:id', getBrandById);
router.put('/:id', validate(updateBrandSchema), updateBrand);
router.delete('/:id', deleteBrand);

export default router;