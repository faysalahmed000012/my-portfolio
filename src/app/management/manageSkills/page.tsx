import Skills from "@/components/custom/SkillManagement";
import { skills } from "@/constants";

const ManageSkills = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl portfolio-gradient-text">Manage Skills : </h1>
      </div>

      <Skills skills={skills} />
    </div>
  );
};

export default ManageSkills;
