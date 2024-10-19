import * as ac from "./auth.controller.js";
import { Router } from "express";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as authRoles from "./auth.endpoints.roles.js";
const router = Router();
router.post("/", asyncHandler(ac.signUp));
router.get("/confirm/:token", asyncHandler(ac.confirmEmail));
router.patch("/login", asyncHandler(ac.logIn));
router.get("/", isAuth(authRoles.getUsers), asyncHandler(ac.getUsers));
router.get("/:id", isAuth(authRoles.getUserById), asyncHandler(ac.getUserById));
router.put("/:id", isAuth(authRoles.updateUser), asyncHandler(ac.updateUser));
router.delete(
  "/:id",
  isAuth(authRoles.deleteUser),
  asyncHandler(ac.deleteUser)
);

export default router;
