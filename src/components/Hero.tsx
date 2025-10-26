"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold sm:text-6xl"
      >
        Hi, I’m <span className="text-blue-500">Wenceslaus Wesilei</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-gray-400 text-lg max-w-xl"
      >
        A passionate Front-End Developer crafting interactive and accessible web
        experiences.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-gray-300 text-base max-w-2xl"
      >
        I build amazing frontend websites using Next.js, mobile apps with React
        Native, and robust backends with Django, Flask, and various databases.
        Let's create something amazing together!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
