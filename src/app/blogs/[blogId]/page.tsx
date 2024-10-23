import { getBlogById } from "@/queries/blog.query";
import Link from "next/link";

const page = async ({ params }: { params: { blogId: string } }) => {
  const blog = await getBlogById(params.blogId);
  const parsedBlog = JSON.parse(blog);
  const date = new Date(parsedBlog.time);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="mx-6 mt-20 max-w-3xl md:mx-auto ">
      <h1 className="text-3xl md:text-5xl">{parsedBlog.title}</h1>
      <div className="mt-6 flex items-center justify-start gap-6 text-gray-500">
        <p>By: Misbahul Haq</p>
        <p>{formattedDate}</p>
      </div>
      <p className="mt-10 mb-10 text-lg">{parsedBlog.description}</p>
      <Link
        className="mt-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground  px-6 py-3"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
};

export default page;
