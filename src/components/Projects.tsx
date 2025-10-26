"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A modern web app built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "An e-commerce dashboard with dark mode and charts.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A portfolio site featuring animations and responsive design.",
    link: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-950 text-white flex flex-col items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-6 rounded-xl border border-gray-800 hover:border-blue-600 hover:shadow-lg transition bg-gray-900"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-400 underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
