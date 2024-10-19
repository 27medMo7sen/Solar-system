import { roles } from "../../Utils/roles.js";
export const createBrand = [roles.VENDOR, , roles.ADMIN];
export const getBrands = [roles.VENDOR, roles.CUSTOMER, roles.ADMIN];
export const getBrandById = [roles.VENDOR, roles.CUSTOMER, roles.ADMIN];
export const updateBrand = [roles.VENDOR, roles.ADMIN];
export const deleteBrand = [roles.VENDOR, roles.ADMIN];
