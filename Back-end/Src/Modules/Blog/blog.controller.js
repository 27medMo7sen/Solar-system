import blogModel from "./blog.schema.js";
import { apiFeatures } from "../../Utils/apiFeatures.js";

export const createBlog = async (req, res) => {
  const blog = new blogModel(req.body);
  await blog.save();
  res.status(201).json(blog);
};

export const getBlogs = async (req, res) => {
  const features = new apiFeatures(blogModel.find(), req.query)
    .filter()
    .sort()
    .select()
    .search()
    .pagination();

  const blogs = await features.mongooseQuery;
  const totalItems = await blogModel.countDocuments();

  res.status(200).json({
    data: blogs,
    pagination: {
      currentPage: req.query.page,
      totalItems,
      pageSize: req.query.size,
    },
  });
  // const blogs = await blogModel.find();
  // res.status(200).json(blogs);
};

export const getBlogById = async (req, res, next) => {
  const blog = await blogModel.findById(req.params.id);
  if (!blog) {
    return next(new Error("Blog not found", { cause: 404 }));
  }
  res.status(200).json(blog);
};

export const updateBlog = async (req, res, next) => {
  const blog = await blogModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!blog) {
    return next(new Error("Blog not found", { cause: 404 }));
  }
  res.status(200).json(blog);
};

export const deleteBlog = async (req, res, next) => {
  const blog = await blogModel.findByIdAndDelete(req.params.id);
  if (!blog) {
    return next(new Error("Blog not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Blog deleted successfully" });
};
