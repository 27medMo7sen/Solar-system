import { roles } from "../../Utils/roles.js";

export const getUsers = [roles.ADMIN];
export const getUserById = [roles.CUSTOMER, roles.ADMIN];
export const updateUser = [roles.CUSTOMER, roles.ADMIN];
export const deleteUser = [roles.CUSTOMER, roles.ADMIN];
