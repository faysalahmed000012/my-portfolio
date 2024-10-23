"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IBlog } from "@/models/blog.model";
import { createBlogAction, editBlogAction } from "@/server actions";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import Tiptap from "./Tiptap";

export default function CreateAndEditBlog({
  isEditMode = false,
  data = null,
}: {
  isEditMode?: boolean;
  data?: IBlog | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(isEditMode ? data?.title : "");

  const [description, setDescription] = useState(
    isEditMode ? data?.description : ""
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const time = Date.now();
    // Handle blog creation logic here
    if (!title || !description) {
      alert("Please  fill in all fields");
      return;
    } else {
      let response;
      if (isEditMode) {
        response = await editBlogAction(
          { title, description, time },
          data?._id as string
        );

        console.log(title);
        if (response) {
          toast("Blog Edited Successfully");
          console.log(response);
        }
      } else {
        response = await createBlogAction({ title, description, time });
        if (response) {
          toast("Blog Created Successfully");
          console.log(response);
        }
      }

      setIsOpen(false);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {isEditMode ? (
        <DialogTrigger asChild>
          <Button variant="outline" className=" ">
            Edit
          </Button>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 portfolio-gradient text-white rounded-md shadow-lg mt-10 ms-3 active:scale-95 transition-all duration-300 ease-in-out"
          >
            Create New Blog
          </motion.button>
        </DialogTrigger>
      )}

      <AnimatePresence>
        {isOpen && (
          <DialogContent className="sm:max-w-[425px] text-white border border-gray-700 p-0 max-h-[95vh] overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-bold portfolio-gradient-text">
                  {isEditMode ? "Edit" : "Create New"} Blog
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  Fill in the details for your new blog post.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-300"
                  >
                    Title
                  </Label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter blog title"
                      required
                    />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-300"
                  >
                    Description
                  </Label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <div onClick={(e) => e.preventDefault()}>
                      <Tiptap
                        defaultValue={description || ""}
                        onChange={setDescription}
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className=""
                    >
                      Cancel
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="portfolio-gradient text-white"
                    >
                      {isEditMode ? "Edit" : "Create"} Blog
                    </Button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
