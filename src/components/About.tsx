// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import Buff from "/skobuffs.jpg";

const About: React.FC = () => (
  <section id="about" className="bg-white py-20">
    <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left: Text */}
      <motion.div
        className="flex-1 text-left space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>

        <p className="text-lg text-gray-700 max-w-lg">
          Hard-working and motivated software engineer with over 6 years of
          experience in designing, developing, and implementing software
          applications. Equipped with a diverse and promising skill set,
          including expertise in various platforms, systems, and languages.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            ⚙️ Experience building web applications using React, JavaScript and
            HTML/CSS{" "}
          </li>
          <li>🔧 Designed backend pipelines in Python & Dagster</li>
          <li>☁️ Experienced deploying to AWS, Azure & Vercel</li>
          <li>📈 Passionate about performance optimization and clean code</li>
        </ul>
      </motion.div>

      {/* Right: Cartoon Avatar */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={Buff}
          alt=" Ben Zabihi"
          className="!h-90 w-auto md:h-64 rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default About;
