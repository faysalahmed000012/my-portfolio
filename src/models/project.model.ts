import mongoose, { Schema } from "mongoose";

export interface IProject {
  _id?: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  clientCode: string;
  serverCode: string;
}

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  clientCode: {
    type: String,
    required: false,
  },
  serverCode: {
    type: String,
    required: false,
  },
});

export const Project =
  mongoose?.models?.Project ||
  mongoose?.model<IProject>("Project", ProjectSchema);
