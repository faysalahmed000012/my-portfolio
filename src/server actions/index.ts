"use server";

import { IBlog } from "@/models/blog.model";
import { getUser } from "@/queries/user.query";

export async function loginUser(email: string, password: string) {
  const user = await getUser(email);
  const parsedUser = JSON.parse(user);
  if (parsedUser?.password != password) {
    throw new Error("Password Does not match");
  } else {
    return parsedUser;
  }
}

export async function createBlog(credential: IBlog): Promise<IBlog> {
  try {
    const blog = await createBlog(credential);
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create blog");
  }
}
