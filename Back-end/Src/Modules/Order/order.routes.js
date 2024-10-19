import express from "express";
import * as oc from "./order.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as orderRoles from "./order.endpoints.roles.js";
const router = express.Router();
router.post("/", isAuth(orderRoles.createOrder), asyncHandler(oc.createOrder));
router.get("/", isAuth(orderRoles.getOrders), asyncHandler(oc.getOrders));
router.get(
  "/:id",
  isAuth(orderRoles.getOrderById),
  asyncHandler(oc.getOrderById)
);
router.put(
  "/:id",
  isAuth(orderRoles.updateOrder),
  asyncHandler(oc.updateOrder)
);
router.delete(
  "/:id",
  isAuth(orderRoles.deleteOrder),
  asyncHandler(oc.deleteOrder)
);

export default router;
