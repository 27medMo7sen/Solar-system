import { roles } from "../../Utils/roles.js";

export const createVendor = [roles.ADMIN];
export const getVendors = [roles.ADMIN];
export const getVendorById = [roles.VENDOR, roles.ADMIN];
export const updateVendor = [roles.VENDOR, roles.ADMIN];
export const deleteVendor = [roles.ADMIN];
