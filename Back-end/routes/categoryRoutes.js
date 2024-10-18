import express from 'express';
import { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/categoryController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { createCategorySchema, updateCategorySchema } from '../validation/categoryValidation.js';

const router = express.Router();
router.post('/', validate(createCategorySchema), createCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.put('/:id', validate(updateCategorySchema), updateCategory);
router.delete('/:id', deleteCategory);

export default router;