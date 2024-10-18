import express from 'express';
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { validate } from '../middleware/validationMiddleware.js';
import { createBlogSchema, updateBlogSchema } from '../validators/blogValidation.js';

const router = express.Router();
router.post('/', validate(createBlogSchema), createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.put('/:id', validate(updateBlogSchema), updateBlog);
router.delete('/:id', deleteBlog);

export default router;