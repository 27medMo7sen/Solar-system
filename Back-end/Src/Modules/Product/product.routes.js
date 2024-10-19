import express from "express";
import * as pc from "./product.controller.js";
import { isAuth } from "../../Middlewares/auth.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as productRoles from "./product.endpoints.roles.js";
import { validate } from "../../Middlewares/validation.js";
import * as schema from "./product.validationSchemas.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createProductSchema),
  isAuth(productRoles.createProduct),
  asyncHandler(pc.createProduct)
);
router.get("/", isAuth(productRoles.getProducts), asyncHandler(pc.getProducts));
router.get(
  "/:id",
  isAuth(productRoles.getProductById),
  asyncHandler(pc.getProductById)
);
router.put(
  "/:id",
  validate(schema.updateProductSchema),
  isAuth(productRoles.updateProduct),
  asyncHandler(pc.updateProduct)
);
router.delete(
  "/:id",
  isAuth(productRoles.deleteProduct),
  asyncHandler(pc.deleteProduct)
);

export default router;
