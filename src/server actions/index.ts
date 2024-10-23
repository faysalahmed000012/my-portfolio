"use server";

import { IBlog } from "@/models/blog.model";
import { IProject } from "@/models/project.model";
import { ISkill } from "@/models/skill.model";
import { createBlog, deleteBlog, editBlog } from "@/queries/blog.query";
import {
  createProject,
  deleteProject,
  editProject,
} from "@/queries/project.queries";
import { createSkill, deleteSkill } from "@/queries/skill.query";
import { getUser } from "@/queries/user.query";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// user

export async function loginUser(email: string, password: string) {
  const user = await getUser(email);
  const parsedUser = JSON.parse(user);
  if (parsedUser?.password != password) {
    throw new Error("Password Does not match");
  } else {
    // In a real application, you'd generate a proper token here
    const token = Buffer.from(`${email}:${password}`).toString("base64");

    // Set the cookie
    cookies().set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return parsedUser;
  }
}

export async function logOutUser() {
  cookies().delete("authToken");
  return { success: true };
}

// blog

export async function createBlogAction(credential: IBlog) {
  try {
    const blog = await createBlog(credential);
    revalidatePath("/");
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create blog");
  }
}

export async function editBlogAction(credential: Partial<IBlog>, id: string) {
  try {
    const blog = await editBlog(credential, id);
    revalidatePath("/");
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to edit blog");
  }
}

export async function deleteBlogAction(id: string) {
  try {
    const result = await deleteBlog(id);
    revalidatePath("/");
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete blog");
  }
}

// project

export async function createProjectAction(credential: IProject) {
  try {
    const result = await createProject(credential);
    revalidatePath("/");
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create project");
  }
}

export async function editProjectAction(
  credential: Partial<IProject>,
  id: string
) {
  try {
    const result = await editProject(credential, id);
    revalidatePath("/");
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to edit project");
  }
}

export async function deleteProjectAction(id: string) {
  try {
    const result = await deleteProject(id);
    revalidatePath("/");
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete project");
  }
}

// skill

export async function createSkillAction(credential: ISkill) {
  try {
    const response = await createSkill(credential);
    revalidatePath("/");
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To add skill");
  }
}

export async function deleteSkillAction(id: string) {
  try {
    const response = await deleteSkill(id);
    revalidatePath("/");
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To delete skill");
  }
}
