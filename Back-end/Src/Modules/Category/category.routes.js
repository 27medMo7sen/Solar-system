import express from "express";
import * as cc from "./category.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as categoryRoles from "./category.endpoints.roles.js";
import * as schema from "./category.validationSchemas.js";
import { validate } from "../../Middlewares/validation.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createCategorySchema),
  isAuth(categoryRoles.createCategory),
  asyncHandler(cc.createCategory)
);
router.get("/", asyncHandler(cc.getCategories));
router.get(
  "/:id",
  isAuth(categoryRoles.getCategoryById),
  asyncHandler(cc.getCategoryById)
);
router.put(
  "/:id",
  validate(schema.updateCategorySchema),
  isAuth(categoryRoles.updateCategory),
  asyncHandler(cc.updateCategory)
);
router.delete(
  "/:id",
  isAuth(categoryRoles.deleteCategory),
  asyncHandler(cc.deleteCategory)
);

export default router;
