import { roles } from "../../Utils/roles.js";
export const createBlog = [roles.ADMIN, roles.CUSTOMER, roles.VENDOR];
export const getBlog = [roles.ADMIN, roles.CUSTOMER, roles.VENDOR];
export const deleteBlog = [roles.ADMIN, roles.CUSTOMER, roles.VENDOR];
