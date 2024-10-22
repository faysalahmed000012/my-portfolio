import { skills } from "@/constants";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
}
