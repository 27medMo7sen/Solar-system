import express from "express";
import * as cc from "./cart.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as cartRoles from "./cart.endpoints.roles.js";
import * as schema from "./cart.validationSchemas.js";
import { validate } from "../../Middlewares/validation.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createCartSchema),
  isAuth(cartRoles.createCart),
  asyncHandler(cc.createCart)
);
router.get("/", asyncHandler(cc.getCarts));
router.get("/:id", isAuth(cartRoles.getCartById), asyncHandler(cc.getCartById));
router.put(
  "/:id",
  validate(schema.updateCartSchema),
  isAuth(cartRoles.updateCart),
  asyncHandler(cc.updateCart)
);
router.delete(
  "/:id",
  isAuth(cartRoles.deleteCart),
  asyncHandler(cc.deleteCart)
);

export default router;
