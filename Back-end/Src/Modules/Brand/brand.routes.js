import express from "express";
import * as bc from "./brand.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as brandRoles from "./brand.endpoints.roles.js";
import * as schema from "./brand.validationSchemas.js";
import { validate } from "../../Middlewares/validation.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createBrandSchema),
  isAuth(brandRoles.createBrand),
  asyncHandler(bc.createBrand)
);
router.get("/", isAuth(brandRoles.getBrands), asyncHandler(bc.getBrands));
router.get(
  "/:id",
  isAuth(brandRoles.getBrandById),
  asyncHandler(bc.getBrandById)
);
router.put(
  "/:id",
  validate(schema.updateBrandSchema),
  isAuth(brandRoles.updateBrand),
  asyncHandler(bc.updateBrand)
);
router.delete(
  "/:id",
  isAuth(brandRoles.deleteBrand),
  asyncHandler(bc.deleteBrand)
);

export default router;
