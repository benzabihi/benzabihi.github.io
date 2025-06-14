import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-[50vh] flex justify-center items-center bg-white overflow-hidden"
    >
      <div
        className="
          max-w-6xl mx-auto px-6 md:px-20
          flex flex-col-reverse md:flex-row
          items-center justify-center   /* ← center emoji+text as a group */
          gap-12
        "
      >
        {/* Left: Waving hand emoji */}
        <motion.div
          className="text-[8rem] md:text-[12rem] leading-none"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: 0.2,
          }}
        >
          👋
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="
            text-left space-y-6
            max-w-md md:max-w-lg   /* ← constrain width so it doesn't flex-grow */
          "
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hey, I'm <span className="text-blue-600">Ben Zabihi</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700">
            Full-stack software developer who thrives on solving complex
            problems and creating innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/devResume2025.pdf"
              download
              className="
                px-6 py-3 bg-blue-600 !text-white 
                rounded-lg shadow hover:bg-blue-700 
                transition
              "
            >
              Resume
            </a>
            <a
              href="#contact"
              className="
                px-6 py-3 border border-blue-600 
                text-blue-600 rounded-lg shadow 
                hover:bg-blue-50 transition
              "
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
