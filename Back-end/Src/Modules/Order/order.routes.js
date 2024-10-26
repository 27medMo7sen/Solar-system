import express from "express";
import * as oc from "./order.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as orderRoles from "./order.endpoints.roles.js";
import * as schema from "./order.validationSchemas.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import { validateQuery } from "../../Middlewares/queryValidation.js";
const router = express.Router();
router.post(
  "/",
  isAuth(orderRoles.createOrder),
  validateBody(schema.createOrderSchema),
  asyncHandler(oc.createOrder)
);
router.get(
  "/",
  validateQuery(),
  isAuth(orderRoles.getOrders),
  asyncHandler(oc.getOrders)
);
router.get(
  "/:id",
  isAuth(orderRoles.getOrderById),
  validateId(),
  asyncHandler(oc.getOrderById)
);
router.put(
  "/:id",
  isAuth(orderRoles.updateOrder),
  validateId(),
  validateBody(schema.updateOrderSchema),
  asyncHandler(oc.updateOrder)
);
router.delete(
  "/:id",
  isAuth(orderRoles.deleteOrder),
  validateId(),
  asyncHandler(oc.deleteOrder)
);

export default router;
