import mongoose, { Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const User =
  mongoose?.models?.User || mongoose?.model<IUser>("User", UserSchema);
