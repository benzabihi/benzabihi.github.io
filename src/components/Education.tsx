// src/components/Education.tsx
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.S. in Computer Science",
    institution: "University of Colorado Boulder",
    period: "Aug 2021 - May 2025",
    details: [
      "Minor in Computer Engineering",
      "Concentrations: Full Stack Development, AI/ML",
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Databases",
    ],
  },
];

const Education: React.FC = () => (
  <section id="education" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
        Education
      </h2>

      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden text-left"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <p className="text-gray-600 mb-2">
                {edu.institution} &middot; {edu.period}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {edu.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
