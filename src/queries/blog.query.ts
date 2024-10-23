// blog related

import { dbConnect } from "@/db/connect";
import { Blog, IBlog } from "@/models/blog.model";

async function getAllBlogs() {
  await dbConnect();
  const blogs = await Blog.find().lean();
  return JSON.stringify(blogs);
}

async function createBlog(credential: IBlog) {
  await dbConnect();
  const blog = await Blog.create(credential);
  return JSON.stringify(blog);
}

async function getBlogById(id: string) {
  await dbConnect();

  const blog = await Blog.findById(id).lean();
  return JSON.stringify(blog);
}

async function deleteBlog(id: string) {
  console.log(id);
  const blog = await Blog.findByIdAndDelete(id);
  return JSON.stringify(blog);
}

async function editBlog(credential: Partial<IBlog>, id: string) {
  await dbConnect();
  const blog = await Blog.findByIdAndUpdate(id, credential, {
    new: true,
  });

  return JSON.stringify(blog);
}

export { createBlog, deleteBlog, editBlog, getAllBlogs, getBlogById };
