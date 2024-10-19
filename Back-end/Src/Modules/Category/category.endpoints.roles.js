import { roles } from "../../Utils/roles.js";

export const createCategory = [roles.ADMIN];
export const getCategoryById = [roles.ADMIN, roles.CUSTOMER, roles.SELLER];
export const updateCategory = [roles.ADMIN];
export const deleteCategory = [roles.ADMIN];
