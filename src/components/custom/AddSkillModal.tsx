"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { createSkillAction } from "@/server actions";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

export default function AddSkill() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createSkillAction({ name, category, image });
      if (response) {
        toast.success("Skill Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }

    setIsOpen(false);
    setImage("");
    setName("");
    setCategory("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 portfolio-gradient text-white rounded-md shadow-lg mt-10 ms-3 active:scale-95 transition-all duration-300 ease-in-out"
        >
          Add Skill
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
                  Add New Skill
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <div className="space-y-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        {category || "Category"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>
                        Select Skill Category
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={category}
                        onValueChange={setCategory}
                      >
                        <DropdownMenuRadioItem value="Frontend">
                          Frontend
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Backend">
                          Backend
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Language">
                          Language
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Database">
                          Database
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    name
                  </Label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter skill name"
                      required
                    />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-300"
                  >
                    Image Link
                  </Label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <Input
                      id="image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="w-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Image Link Here"
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
                      Create Skill
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
