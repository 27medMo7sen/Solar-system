import express from "express";
import * as pc from "./user.controller.js";
import { isAuth } from "../../Middlewares/auth.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as userRoles from "./user.endpoints.roles.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import * as schema from "./user.validationSchemas.js";
const router = express.Router();
router.get(
  "/",
  //  isAuth(userRoles.getUsers),
  asyncHandler(pc.getUsers)
);
router.get(
  "/:id",
  // isAuth(userRoles.getUserById),
  validateId(),
  asyncHandler(pc.getUserById),
);
router.put(
  "/:id",
  // isAuth(userRoles.updateUser),
  validateId(),
  validateBody(schema.updateUserSchema),
  asyncHandler(pc.updateUser),
);
router.delete(
  "/:id",
  // isAuth(userRoles.deleteUser),
  validateId(),
  asyncHandler(pc.deleteUser),
);

export default router;
