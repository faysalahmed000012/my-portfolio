import { IBlog } from "@/models/blog.model";
import { HoverEffect } from "../ui/card-hover-effect";
import CreateAndEditBlog from "./CreateAndEditBlogsModal";

const BlogsList = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <CreateAndEditBlog />
      <HoverEffect items={blogs} />
    </div>
  );
};

export default BlogsList;
