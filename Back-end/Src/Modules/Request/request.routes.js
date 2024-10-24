import express from "express";
import * as pc from "./request.controller.js";
import { isAuth } from "../../Middlewares/auth.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as requestRoles from "./request.endpoints.roles.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import * as schema from "./request.validationSchemas.js";
const router = express.Router();
router.post(
  "/",
  // isAuth(requestRoles.createRequest),
  validateBody(schema.createPartnerRequestSchema),
  asyncHandler(pc.createRequest)
);
router.get("/", 
  // isAuth(requestRoles.getRequests), 
  asyncHandler(pc.getRequests));
router.get(
  "/:id",
  // isAuth(requestRoles.getRequestById),
  validateId(),
  asyncHandler(pc.getRequestById)
);
router.put(
  "/:id",
  // isAuth(requestRoles.updateRequest),
  validateId(),
  validateBody(schema.updatePartnerRequestSchema),
  asyncHandler(pc.updateRequest)
);
router.post(
  "/:id/approve",
  // isAuth(requestRoles.approveRequest),
  validateId(),
  asyncHandler(pc.approveRequest)
);
router.delete(
  "/:id",
  // isAuth(requestRoles.deleteRequest),
  validateId(),
  asyncHandler(pc.deleteRequest)
);

export default router;
