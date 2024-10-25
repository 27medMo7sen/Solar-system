import { roles } from "../../Utils/roles.js";
export const getUsers = [roles.ADMIN];
export const createUser = [roles.CUSTOMER, roles.ADMIN]
export const getUserById = [roles.CUSTOMER, roles.VENDOR, roles.ADMIN];
export const updateUser = [roles.CUSTOMER, roles.VENDOR, roles.CUSTOMER];
export const deleteUser = [roles.ADMIN];
