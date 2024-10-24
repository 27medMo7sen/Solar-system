import express from "express";
import * as pc from "./request.controller.js";
import { isAuth } from "../../Middlewares/auth.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as requestRoles from "./request.endpoints.roles.js";
import { validate } from "../../Middlewares/validation.js";
import * as schema from "./request.validationSchemas.js";
const router = express.Router();
router.post(
  "/",
  validate(schema.createRequestSchema),
  isAuth(requestRoles.createRequest),
  asyncHandler(pc.createRequest)
);
router.get("/", isAuth(requestRoles.getRequests), asyncHandler(pc.getRequests));
router.get(
  "/:id",
  isAuth(requestRoles.getRequestById),
  asyncHandler(pc.getRequestById)
);
router.put(
  "/:id",
  validate(schema.updateRequestSchema),
  isAuth(requestRoles.updateRequest),
  asyncHandler(pc.updateRequest)
);
router.delete(
  "/:id",
  isAuth(requestRoles.deleteRequest),
  asyncHandler(pc.deleteRequest)
);

export default router;
