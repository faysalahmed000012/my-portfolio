import BlogsList from "@/components/custom/BlogsList";
import { getAllBlogs } from "@/queries/blog.query";

const MangeBlogs = async () => {
  const blogs = await getAllBlogs();
  const parsedBlogs = JSON.parse(blogs);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl portfolio-gradient-text">Manage Blogs : </h1>
      </div>

      <BlogsList blogs={parsedBlogs} />
    </div>
  );
};

export default MangeBlogs;
