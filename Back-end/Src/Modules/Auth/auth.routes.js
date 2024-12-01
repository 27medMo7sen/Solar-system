import * as ac from "./auth.controller.js";
import { Router } from "express";
import { asyncHandler } from "../../Utils/errorhandling.js";
import { isAuth } from "../../Middlewares/auth.js";
import * as authRoles from "./auth.endpoints.roles.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { createUserSchema } from "../User/user.validationSchemas.js";
import { loginValidationSchema } from "./auth.validationSchemas.js";

const router = Router();
router.post(
  "/sign-up",
  validateBody(createUserSchema),
  asyncHandler(ac.signUp)
);
router.get("/confirm/:token", asyncHandler(ac.confirmEmail));
router.post(
  "/log-in",
  validateBody(loginValidationSchema),
  asyncHandler(ac.logIn)
);
router.patch("/log-out", isAuth(authRoles.logOut), asyncHandler(ac.logOut));

export default router;
