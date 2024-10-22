import mongoose, { Schema } from "mongoose";

export interface ISkill {
  _id?: string;
  name: string;
  category: string;
  image: string;
}

const SkillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Skill =
  mongoose?.models?.Skill || mongoose?.model<ISkill>("Skill", SkillSchema);
