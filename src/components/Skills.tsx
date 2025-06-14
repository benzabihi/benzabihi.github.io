// src/components/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiNodedotjs,
  SiCplusplus,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

const skills = [
  // Programming Languages & Frameworks
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Java", icon: <IoLogoJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Dagster", icon: <FaDatabase /> },
];

const Skills: React.FC = () => (
  <section id="skills" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="text-4xl mb-2 text-blue-600">{skill.icon}</div>
            <span className="mt-1 text-gray-800 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
