"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IProject } from "@/models/project.model";
import { createProjectAction, editProjectAction } from "@/server actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  image: z.string().url({
    message: "Please enter a valid URL for the image.",
  }),
  liveLink: z.string().url({
    message: "Please enter a valid URL for the live project.",
  }),
  serverCode: z
    .string()
    .url({
      message: "Please enter a valid URL for the server code repository.",
    })
    .optional(),
  clientCode: z.string().url({
    message: "Please enter a valid URL for the client code repository.",
  }),
});

export default function AddEditProjectModal({
  isEditMode = false,
  data = null,
}: {
  isEditMode?: boolean;
  data?: IProject | null;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
      image: data?.image || "",
      liveLink: data?.liveLink || "",
      serverCode: data?.serverCode || "",
      clientCode: data?.clientCode || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const project = {
      title: values.title,
      description: values.description,
      image: values.image,
      liveLink: values.liveLink,
      clientCode: values.clientCode,
      serverCode: values.serverCode ?? "",
    };
    let response;
    try {
      if (isEditMode) {
        if (!data) {
          toast.error(
            "Something went wrong getting data, please try again later"
          );
        } else {
          response = await editProjectAction(project, data?._id as string);
          if (response) {
            toast.success("Project edited successfully");
          }
        }
      } else {
        response = await createProjectAction(project);
        if (response) {
          toast.success("Project created successfully");
        }
      }
    } catch (error) {
      console.log(error);
    }

    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {isEditMode ? (
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Edit2Icon className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            Add New Project
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[425px] dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold dark:text-white">
            {isEditMode ? "Edit" : "Add New"} Project
          </DialogTitle>
          <DialogDescription className="dark:text-gray-400">
            Fill in the details of your new project. Click save when you&apos re
            done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Title"
                      {...field}
                      className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Project Description"
                      {...field}
                      className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                      className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">
                    Live Project Link
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://your-project.com"
                      {...field}
                      className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serverCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">
                    Server Code Repository
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/your-username/server-repo"
                      {...field}
                      className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">
                    Client Code Repository
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/your-username/client-repo"
                      {...field}
                      className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                className="w-full sm:w-auto dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
              >
                Save Project
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
