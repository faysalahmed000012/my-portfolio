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
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CreateAndEditBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle blog creation logic here
    console.log("Blog created:", { title, description });
    setIsOpen(false);
    setTitle("");
    setDescription("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 portfolio-gradient text-white rounded-md shadow-lg mt-10 ms-3 active:scale-95 transition-all duration-300 ease-in-out"
        >
          Create New Blog
        </motion.button>
      </DialogTrigger>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="sm:max-w-[425px] text-white border border-gray-700 p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-bold portfolio-gradient-text">
                  Create New Blog
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
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter blog description"
                      rows={4}
                      required
                    />
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
                      Create Blog
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
