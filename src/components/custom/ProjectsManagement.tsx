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
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack MERN e-commerce solution with user authentication and payment integration.",
    image: "/placeholder.svg",
    demoLink: "#",
    frontendCode: "#",
    backendCode: "#",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality.",
    image: "/placeholder.svg",
    demoLink: "#",
    frontendCode: "#",
    backendCode: "#",
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for blogs built with Node.js and MongoDB.",
    image: "/placeholder.svg",
    demoLink: "#",
    frontendCode: "#",
    backendCode: "#",
  },
];

export default function ProjectsManagement() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-8 portfolio-gradient-text">
            My Projects
          </h2>
          <Button>Add New Project</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <div className="aspect-video w-full">
                  <Image
                    src="/api/placeholder/400/320"
                    width={400}
                    height={320}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.frontendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Frontend
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.backendCode}
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
                      href={project.demoLink}
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
