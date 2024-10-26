import express from "express";
import * as pc from "./product.controller.js";
import { isAuth } from "../../Middlewares/auth.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as productRoles from "./product.endpoints.roles.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import * as schema from "./product.validationSchemas.js";
import { validateQuery } from "../../Middlewares/queryValidation.js";

const router = express.Router();
router.post(
  "/",
  isAuth(productRoles.createProduct),
  validateBody(schema.createProductSchema),
  asyncHandler(pc.createProduct)
);
router.get(
  "/",
  validateQuery(),
  isAuth(productRoles.getProducts),
  asyncHandler(pc.getProducts)
);
router.get(
  "/:id",
  isAuth(productRoles.getProductById),
  validateId(),
  asyncHandler(pc.getProductById)
);
router.put(
  "/:id",
  isAuth(productRoles.updateProduct),
  validateId(),
  validateBody(schema.updateProductSchema),
  asyncHandler(pc.updateProduct)
);
router.delete(
  "/:id",
  isAuth(productRoles.deleteProduct),
  validateId(),
  asyncHandler(pc.deleteProduct)
);

export default router;
