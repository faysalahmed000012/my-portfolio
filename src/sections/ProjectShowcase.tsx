"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProject } from "@/models/project.model";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

export default function ProjectShowcase({
  projects,
}: {
  projects: IProject[];
}) {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-8 portfolio-gradient-text">
            My Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <div className=" w-full h-[300px] overflow-hidden">
                  <Image
                    src={project?.image}
                    width={400}
                    height={320}
                    alt={project?.title}
                    className="rounded-t-lg hover:translate-y-[-50%] transition-all duration-300 ease-in-out"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project?.title}</CardTitle>
                  <CardDescription>{project?.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project?.clientCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Frontend
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project?.serverCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Backend
                      </a>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" asChild>
                    <a
                      href={project?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
