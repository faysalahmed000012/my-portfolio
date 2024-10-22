// skill related

import { dbConnect } from "@/db/connect";
import { ISkill, Skill } from "@/models/skill.model";

async function getAllSkills() {
  await dbConnect();
  const skills = await Skill.find().lean();
  return JSON.stringify(skills);
}

async function createSkill(credential: ISkill) {
  await dbConnect();
  const skill = await Skill.create(credential);
  return JSON.stringify(skill);
}

async function deleteSkill(id: string) {
  await dbConnect();
  const skill = await Skill.findByIdAndDelete(id);
  return JSON.stringify(skill);
}

export { createSkill, deleteSkill, getAllSkills };
