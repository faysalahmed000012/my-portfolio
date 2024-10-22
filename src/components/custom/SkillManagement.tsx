"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skill, Skills as TSkills } from "@/types";
import { motion } from "framer-motion";
import {
  Blocks,
  Code2,
  Database,
  FileCode2,
  LayoutGrid,
  Repeat,
  ServerCog,
  Terminal,
  Type,
} from "lucide-react";
import AddSkill from "./AddSkillModal";

// Icon mapping object
const iconMapping = {
  React: <Repeat className="w-6 h-6" />,
  Tailwind: <LayoutGrid className="w-6 h-6" />,
  Redux: <Blocks className="w-6 h-6" />,
  "Next JS": <FileCode2 className="w-6 h-6" />,
  Typescript: <Type className="w-6 h-6" />,
  Python: <Code2 className="w-6 h-6" />,
  Java: <Terminal className="w-6 h-6" />,
  C: <Code2 className="w-6 h-6" />,
  Javascript: <FileCode2 className="w-6 h-6" />,
  "Node JS": <ServerCog className="w-6 h-6" />,
  "Express JS": <ServerCog className="w-6 h-6" />,
  MongoDb: <Database className="w-6 h-6" />,
};

interface ISkillCard {
  title: string;
  skills: Skill[];
}

const SkillCard = ({ title, skills }: ISkillCard) => {
  return (
    <Card className="border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader>
        <CardTitle className="text-lg font-semibold portfolio-gradient-text">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors">
                      {iconMapping[skill.name] || <Code2 className="w-6 h-6" />}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to learn more about {skill.name}</p>
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

const Skills = ({ skills }: { skills: TSkills }) => {
  return (
    <section className="w-full pb-12 space-b-8">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="mt-10 text-3xl font-bold tracking-tighter mb-8 portfolio-gradient-text">
            Skills & Technologies
          </h2>
          <AddSkill />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Frontend Development" skills={skills.frontEnd} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard
              title="Programming Languages"
              skills={skills.languages}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Backend Development" skills={skills.backend} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SkillCard title="Databases" skills={skills.databases} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
