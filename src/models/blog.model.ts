import mongoose, { Schema } from "mongoose";

export interface IBlog {
  _id?: string;
  title: string;
  description: string;
  time: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  time: {
    required: false,
    type: Date,
  },
});

export const Blog =
  mongoose?.models?.Blog || mongoose?.model<IBlog>("Blog", BlogSchema);
