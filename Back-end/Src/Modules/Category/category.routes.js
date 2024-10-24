import express from "express";
import * as cc from "./category.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as categoryRoles from "./category.endpoints.roles.js";
import * as schema from "./category.validationSchemas.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
const router = express.Router();
router.post(
  "/",
  isAuth(categoryRoles.createCategory),
  validateBody(schema.createCategorySchema),
  asyncHandler(cc.createCategory)
);
router.get("/", asyncHandler(cc.getCategories));
router.get(
  "/:id",
  isAuth(categoryRoles.getCategoryById),
  validateId(),
  asyncHandler(cc.getCategoryById)
);
router.put(
  "/:id",
  isAuth(categoryRoles.updateCategory),
  validateId(),
  validateBody(schema.updateCategorySchema),
  asyncHandler(cc.updateCategory)
);
router.delete(
  "/:id",
  isAuth(categoryRoles.deleteCategory),
  validateId(),
  asyncHandler(cc.deleteCategory)
);

export default router;
