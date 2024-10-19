import express from "express";
import * as bc from "./blog.controller.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as blogRoles from "./blog.endpoints.roles.js";
const router = express.Router();
router.post("/", isAuth(blogRoles.createBlog), asyncHandler(bc.createBlog));
router.get("/", asyncHandler(bc.getBlogs));
router.get("/:id", asyncHandler(bc.getBlogById));
router.put("/:id", isAuth(blogRoles.getBlog), asyncHandler(bc.updateBlog));
router.delete(
  "/:id",
  isAuth(blogRoles.deleteBlog),
  asyncHandler(bc.deleteBlog)
);

export default router;
