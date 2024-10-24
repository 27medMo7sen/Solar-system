import express from "express";
import * as bc from "./brand.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as brandRoles from "./brand.endpoints.roles.js";
import * as schema from "./brand.validationSchemas.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
const router = express.Router();
router.post(
  "/",
  isAuth(brandRoles.createBrand),
  validateBody(schema.createBrandSchema),
  asyncHandler(bc.createBrand)
);
router.get("/", isAuth(brandRoles.getBrands), asyncHandler(bc.getBrands));
router.get(
  "/:id",
  isAuth(brandRoles.getBrandById),
  validateId(),
  asyncHandler(bc.getBrandById)
);
router.put(
  "/:id",
  isAuth(brandRoles.updateBrand),
  validateId(),
  validateBody(schema.updateBrandSchema),
  asyncHandler(bc.updateBrand)
);
router.delete(
  "/:id",
  isAuth(brandRoles.deleteBrand),
  validateId(),
  asyncHandler(bc.deleteBrand)
);

export default router;
