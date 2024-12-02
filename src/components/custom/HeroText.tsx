"use client";

import { motion } from "framer-motion";
import { CheckIcon, FileDown } from "lucide-react";
import { AnimatedSubscribeButton } from "../ui/animated-subscribe-button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const HeroText = () => {
  const words = [
    {
      text: "I am a",
    },
    {
      text: "Frontend",
    },
    {
      text: "Developer.",
      className: "text-[#22d3ee] dark:text-[#22d3ee]",
    },
  ];

  const description = ` I Love Building Responsive and Dynamic Web Applications with Modern
            Tech. With a strong foundation in frontend development and a passion
            for clean, efficient code, I'm committed to delivering exceptional
            web experiences. My expertise in React, Next.js, Node.js, and
            MongoDB allows me to build scalable and maintainable applications.`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-lg ">
        Hello, I&lsquo;m Misbahul Haq <span className="waving-hand">👋</span>
      </h1>

      <TypewriterEffectSmooth className="mt-0 mb-3 " words={words} />

      <TextGenerateEffect
        className="text-md font-normal mb-6"
        words={description}
      />
      <AnimatedSubscribeButton
        buttonTextColor="#000000"
        subscribeStatus={false}
        initialText={
          <span className="group inline-flex items-center">
            <a
              href="/Misbahul Haq_ MERN stack web-developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume{" "}
            </a>
            <FileDown className="ml-1 size-4 transition-transform duration-300 group-hover:translate-y-1" />
          </span>
        }
        changeText={
          <span className="group inline-flex items-center text-black">
            <CheckIcon className="mr-2 size-4" />
            Downloaded{" "}
          </span>
        }
      />
    </motion.div>
  );
};

export default HeroText;
