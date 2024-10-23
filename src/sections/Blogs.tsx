"use client";

import BlogCard from "@/components/custom/BlogCard";
import { IBlog } from "@/models/blog.model";

export default function BlogList({ blogs }: { blogs: IBlog[] }) {
  return (
    <div id="blogs" className={`min-h-screen`}>
      <div className="container mx-auto px-4 py-8  transition-colors duration-300">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold portfolio-gradient-text">
            Latest Blog Posts
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post: IBlog) => (
            <BlogCard key={post._id} blog={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
