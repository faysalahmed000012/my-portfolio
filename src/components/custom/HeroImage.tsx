"use client";
import man from "@/assets/images/download.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-end"
    >
      <div className="relative w-[370px] h-[370px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-800  opacity-75 blur-md animate-pulse"></div>

        <div
          className="absolute inset-1 bg-gray-900 rounded-full overflow-hidden
        "
        >
          <Image
            className="w-[370px] h-[370px] rounded-full object-cover"
            src={man}
            alt="me"
            width={370}
            height={370}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
