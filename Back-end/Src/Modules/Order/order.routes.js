import express from "express";
import * as oc from "./order.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as orderRoles from "./order.endpoints.roles.js";
import * as schema from "./order.validationSchemas.js";
import { validate } from "../../Middlewares/validation.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createOrderSchema),
  isAuth(orderRoles.createOrder),
  asyncHandler(oc.createOrder)
);
router.get("/", isAuth(orderRoles.getOrders), asyncHandler(oc.getOrders));
router.get(
  "/:id",
  isAuth(orderRoles.getOrderById),
  asyncHandler(oc.getOrderById)
);
router.put(
  "/:id",
  validate(schema.updateOrderSchema),
  isAuth(orderRoles.updateOrder),
  asyncHandler(oc.updateOrder)
);
router.delete(
  "/:id",
  isAuth(orderRoles.deleteOrder),
  asyncHandler(oc.deleteOrder)
);

export default router;
