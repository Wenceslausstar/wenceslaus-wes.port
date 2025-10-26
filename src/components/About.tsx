"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <p className="text-gray-400 leading-relaxed">
        I’m a developer with a strong focus on building clean, efficient, and
        accessible web applications. I love bringing ideas to life through code,
        blending design and functionality into meaningful digital experiences.
      </p>
    </section>
  );
}
