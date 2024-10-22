"use server";

import { getUser } from "@/db/queries";

export async function loginUser(email: string, password: string) {
  const user = await getUser(email);
  const parsedUser = JSON.parse(user);
  if (parsedUser?.password != password) {
    throw Error("Password does not match");
  }

  return parsedUser;
}