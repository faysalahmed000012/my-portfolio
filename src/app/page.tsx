import { getAllBlogs } from "@/queries/blog.query";
import { getAllProjects } from "@/queries/project.queries";
import { getAllSkills } from "@/queries/skill.query";
import BlogList from "@/sections/Blogs";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import ProjectShowcase from "@/sections/ProjectShowcase";
import Skills from "@/sections/Skills";

export default async function Home() {
  const skills = await getAllSkills();
  const parsedSkills = JSON.parse(skills);
  const blogs = await getAllBlogs();
  const parsedBlogs = JSON.parse(blogs);
  const projects = await getAllProjects();
  const parsedProjects = JSON.parse(projects);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills skills={parsedSkills} />
      <ProjectShowcase projects={parsedProjects} />
      <BlogList blogs={parsedBlogs} />
      <Contact />
      <Footer />
    </div>
  );
}
