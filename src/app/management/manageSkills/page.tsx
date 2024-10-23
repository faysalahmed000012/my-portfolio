import Skills from "@/components/custom/SkillManagement";
import { getAllSkills } from "@/queries/skill.query";

const ManageSkills = async () => {
  const skills1 = await getAllSkills();
  const parsedSkills = JSON.parse(skills1);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl portfolio-gradient-text">Manage Skills : </h1>
      </div>

      <Skills skills={parsedSkills} />
    </div>
  );
};

export default ManageSkills;
