import { roles } from "../../Utils/roles.js";
export const createBlog = [roles.GUEST];
export const updateBlog = [roles.ADMIN];
export const getBlogById = [roles.GUEST];
export const getBlog = [roles.GUEST];
export const deleteBlog = [roles.ADMIN];
