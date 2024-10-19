import express from 'express';
import { createCart, getCarts, getCartById, updateCart, deleteCart } from '../controllers/cartController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { createCartSchema, updateCartSchema } from '../validation/cartValidation.js';

const router = express.Router();
router.post('/', validate(createCartSchema), createCart);
router.get('/', getCarts);
router.get('/:id', getCartById);
router.put('/:id', validate(updateCartSchema), updateCart);
router.delete('/:id', deleteCart);

export default router;