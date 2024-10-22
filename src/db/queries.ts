import { User } from "@/models/user.model";
import { toast } from "sonner";
import { dbConnect } from "./connect";

// user related
async function getUser(email: string) {
  await dbConnect();
  const user = await User.findOne({ email: email }).lean();
  if (!user) {
    toast("Email is Wrong");
  }
  return JSON.stringify(user);
}

export { getUser };
