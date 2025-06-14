// src/components/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "GameHub",
    description:
      "A full-stack game discovery app using React, TypeScript, and the RAWG API.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    demo: "https://game-hub-delta-hazel.vercel.app/",
    repo: "https://github.com/benzabihi/game-hub",
    image: "gameview.png",
  },
  {
    title: "BookWyrm",
    description:
      "A website/application that allows users to search a library of books, check off favorite categories/genres, and get recommended other books based on their preferences. ",
    tech: ["HTML", "JavaScript", "CSS"],
    demo: "https://github.com/Lumi297/Recitation-15-02-BookWrym",
    repo: "https://github.com/Lumi297/Recitation-15-02-BookWrym",
    image: "/Bookwrym.png",
  },
  {
    title: "5 Stage Processor",
    description:
      "Developed a 5 stage Pipelined processor using RISCV architecture within codasip",
    tech: ["C", "Assembly"],
    demo: "https://github.com/ecen3593-spring2025/phase5-benzabihi",
    repo: "https://github.com/ecen3593-spring2025/phase5-benzabihi",
    image: "/pipeline.png",
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.demo}
            target="_blank"
            rel="noopener"
            className="block bg-white rounded-xl overflow-hidden shadow-md"
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 flex-1">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
