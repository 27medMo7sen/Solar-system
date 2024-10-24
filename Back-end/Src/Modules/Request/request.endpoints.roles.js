import { roles } from "../../Utils/roles.js";

export const createRequest = [roles.VENDOR, roles.ADMIN];
export const getRequests = [roles.ADMIN];
export const getRequestById = [roles.VENDOR, roles.ADMIN];
export const updateRequest = [roles.VENDOR, roles.ADMIN];
export const deleteRequest = [roles.ADMIN];
