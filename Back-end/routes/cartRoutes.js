import express from 'express';
import { createCart, getCarts, getCartById, updateCart, deleteCart } from '../controllers/cartController.js';

const router = express.Router();
router.post('/', createCart);
router.get('/', getCarts);
router.get('/:id', getCartById);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);

export default router;