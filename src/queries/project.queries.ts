// project related

import { dbConnect } from "@/db/connect";
import { IProject, Project } from "@/models/project.model";

async function getAllProjects() {
  await dbConnect();
  const projects = await Project.find().lean();
  return JSON.stringify(projects);
}

async function createProject(credential: IProject) {
  await dbConnect();
  const project = await Project.create(credential);
  return JSON.stringify(project);
}

async function getProjectById(id: string) {
  await dbConnect();
  const project = await Project.findById(id).lean();
  return JSON.stringify(project);
}

async function deleteProject(id: string) {
  await dbConnect();
  const project = await Project.findByIdAndDelete(id);
  return JSON.stringify(project);
}

async function editProject(credential: Partial<IProject>, id: string) {
  await dbConnect();
  const project = await Project.findByIdAndUpdate(id, credential, {
    new: true,
  });

  return JSON.stringify(project);
}

export {
  createProject,
  deleteProject,
  editProject,
  getAllProjects,
  getProjectById,
};
