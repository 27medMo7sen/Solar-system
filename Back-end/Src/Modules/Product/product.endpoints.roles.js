import { roles } from "../../Utils/roles.js";

export const createProduct = [roles.VENDOR, roles.ADMIN];
export const getProducts = [roles.VENDOR, roles.CUSTOMER];
export const getProductById = [roles.VENDOR, roles.CUSTOMER, roles.ADMIN];
export const updateProduct = [roles.VENDOR, roles.ADMIN];
export const deleteProduct = [roles.VENDOR, roles.ADMIN];
