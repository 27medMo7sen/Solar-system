import express from "express";
import * as bc from "./blog.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as blogRoles from "./blog.endpoints.roles.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import * as schema from "./blog.validationSchemas.js";
const router = express.Router();
router.post(
  "/",
  isAuth(blogRoles.createBlog),
  validateBody(schema.createBlogSchema),
  asyncHandler(bc.createBlog)
);
router.get("/", asyncHandler(bc.getBlogs));
router.get("/:id", validateId(), asyncHandler(bc.getBlogById));
router.put(
  "/:id",
  isAuth(blogRoles.updateBlog),
  validateId(),
  validateBody(schema.updateBlogSchema),
  asyncHandler(bc.updateBlog)
);
router.delete(
  "/:id",
  isAuth(blogRoles.deleteBlog),
  validateId(),
  asyncHandler(bc.deleteBlog)
);

export default router;
