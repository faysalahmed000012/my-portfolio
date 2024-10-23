import ProjectsManagement from "@/components/custom/ProjectsManagement";
import { getAllProjects } from "@/queries/project.queries";

const ManageProjects = async () => {
  const projects = await getAllProjects();
  const parsedProjects = JSON.parse(projects);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl portfolio-gradient-text">Manage Projects : </h1>
      </div>

      <ProjectsManagement projects={parsedProjects} />
    </div>
  );
};

export default ManageProjects;
