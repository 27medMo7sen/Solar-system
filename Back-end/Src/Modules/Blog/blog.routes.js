import express from "express";
import * as bc from "./blog.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as blogRoles from "./blog.endpoints.roles.js";
import { validate } from "../../Middlewares/validation.js";
import * as schema from "./blog.validationSchemas.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createBlogSchema),
  isAuth(blogRoles.createBlog),
  asyncHandler(bc.createBlog)
);
router.get("/", asyncHandler(bc.getBlogs));
router.get("/:id", asyncHandler(bc.getBlogById));
router.put(
  "/:id",
  validate(schema.updateBlogSchema),
  isAuth(blogRoles.updateBlog),
  asyncHandler(bc.updateBlog)
);
router.delete(
  "/:id",
  isAuth(blogRoles.deleteBlog),
  asyncHandler(bc.deleteBlog)
);

export default router;
