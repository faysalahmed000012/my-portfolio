"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IBlog } from "@/models/blog.model";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  const { title, description, time, _id: slug } = blog;
  const date = new Date(time);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const truncateDescription = (text: string | undefined, wordLimit: number) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 hover:scale-105">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold line-clamp-2 portfolio-gradient-text">
            {title}
          </CardTitle>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-600 dark:text-gray-300">
            {truncateDescription(description, 20)}
          </p>
        </CardContent>
        <CardFooter className="p-4">
          <Link href={`/blogs/${slug}`} passHref>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300">
              Read Full Blog
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
