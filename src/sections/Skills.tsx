"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ISkill } from "@/models/skill.model";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillCard = ({ title, skills }: { title: string; skills: ISkill[] }) => {
  return (
    <Card className="border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader>
        <CardTitle className="text-lg font-semibold portfolio-gradient-text">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors">
                      <Image
                        src={skill?.image}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = ({ skills }: { skills: ISkill[] }) => {
  const frontend = skills.filter((skill) => skill.category == "Frontend");
  const backend = skills.filter((skill) => skill.category == "Backend");
  const language = skills.filter((skill) => skill.category == "Language");
  const database = skills.filter((skill) => skill.category == "Database");

  return (
    <section id="skills" className="w-full pb-12 space-b-8">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="mt-10 text-3xl font-bold tracking-tighter mb-8 portfolio-gradient-text">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Frontend Development" skills={frontend} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Programming Languages" skills={language} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Backend Development" skills={backend} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Databases" skills={database} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
