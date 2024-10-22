import { User } from "@/models/user.model";
import { dbConnect } from "./connect";

// user related
async function getUser(email: string) {
  await dbConnect();
  const user = await User.findOne({ email: email }).lean();
  if (!user) {
    throw new Error("Email is Wrong");
  }
  return JSON.stringify(user);
}

export { getUser };
