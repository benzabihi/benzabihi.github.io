// src/components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Backend Software Engineer",
    company: "Bruin Group LLC",
    period: "Oct 2024 - Present",
    bullets: [
      "Engineered scalable fraud detection pipelines for real-time data, reducing false positives by 18%",
      "Automated deployment and monitoring workflows, cutting manual ops time by 20%",
      "Collaborated with sales and product teams to align backend features with client needs, enhancing customer satisfaction",
    ],
  },
  {
    role: "Technology and Strategy Intern",
    company: "M&D Capital Premier Billing",
    period: "May 2023 - Aug 2023",
    bullets: [
      "Attended pre-IPO investment meetings and analyzed startups from a technical perspective to support investment decisions",
      "Leveraged technical expertise to explain complex product architectures and business models to non-technical leadership",
      "Created a streamlined file management system for organizing patient and investment documents",
      "Applied knowledge of heuristics and user-centered design to help develop a new web portal for patients",
    ],
  },
  {
    role: "Mid-Atlantic Regional Intern",
    company: "StandWithUs",
    period: "Aug 2019 - Jun 2020",
    bullets: [
      "Coordinated and ran 5 Israel advocacy programs in the community, leading to increased public awareness of U.S.-Israel relations",
      "Attended weekly regional video meetings to share experiences, resulting in higher productivity and diverse problem-solving solutions",
      "Represented fellow interns at 3 national conventions, securing increased funding and resources for the following year",
    ],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden text-left"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-gray-600">{exp.period}</p>
            </div>

            {/* Details */}
            <div className="p-6">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
