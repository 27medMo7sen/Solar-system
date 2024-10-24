import express from "express";
import * as pc from "./vendor.controller.js";
import { isAuth } from "../../Middlewares/auth.js";
import { asyncHandler } from "../../Utils/errorhandling.js";
import * as vendorRoles from "./vendor.endpoints.roles.js";
import { validateBody } from "../../Middlewares/bodyValidation.js";
import { validateId } from "../../Middlewares/idValidation.js";
import * as schema from "./vendor.validationSchemas.js";
const router = express.Router();
router.post(
  "/",
  // isAuth(vendorRoles.createVendor),
  validateBody(schema.createVendorSchema),
  asyncHandler(pc.createVendor)
);
router.get(
  "/",
  //  isAuth(vendorRoles.getVendors),
  asyncHandler(pc.getVendors)
);
router.get(
  "/:id",
  // isAuth(vendorRoles.getVendorById),
  validateId(),
  asyncHandler(pc.getVendorById),
);
router.put(
  "/:id",
  // isAuth(vendorRoles.updateVendor),
  validateId(),
  validateBody(schema.updateVendorSchema),
  asyncHandler(pc.updateVendor),
);
router.delete(
  "/:id",
  // isAuth(vendorRoles.deleteVendor),
  validateId(),
  asyncHandler(pc.deleteVendor),
);

export default router;
