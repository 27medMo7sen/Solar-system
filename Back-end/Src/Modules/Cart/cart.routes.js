import express from "express";
import * as cc from "./cart.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as cartRoles from "./cart.endpoints.roles.js";
import * as schema from "./cart.validationSchemas.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
const router = express.Router();
router.post(
  "/",
  isAuth(cartRoles.createCart),
  validateBody(schema.createCartSchema),
  asyncHandler(cc.createCart)
);
router.get("/", asyncHandler(cc.getCarts));
router.get("/:id", isAuth(cartRoles.getCartById), validateId(), asyncHandler(cc.getCartById));
router.put(
  "/:id",
  isAuth(cartRoles.updateCart),
  validateId(),
  validateBody(schema.updateCartSchema),
  asyncHandler(cc.updateCart)
);
router.delete(
  "/:id",
  isAuth(cartRoles.deleteCart),
  validateId(),
  asyncHandler(cc.deleteCart)
);

export default router;
