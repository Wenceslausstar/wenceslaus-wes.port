"use client";
import { motion } from "framer-motion";
import { experience } from "@/components/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center">
          Experience
        </h2>
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-md"
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.role} @{" "}
                <span className="text-blue-400">{exp.company}</span>
              </h3>
              <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
