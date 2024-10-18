import express from 'express';
import { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { createOrderSchema, updateOrderSchema } from '../validation/orderValidation.js';

const router = express.Router();
router.post('/', validate(createOrderSchema), createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.put('/:id', validate(updateOrderSchema), updateOrder);
router.delete('/:id', deleteOrder);

export default router;