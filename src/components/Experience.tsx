"use client";
import { motion } from "framer-motion";
import { Building } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Unikliniono",
    period: "August 2024 - Present",
    description:
      "Developed responsive and interactive web applications using Next.js and React. Implemented modern UI/UX designs and optimized performance for better user experience.",
    tags: ["NextJS", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Data Analyst",
    company: "Podi Consultants Ltd",
    period: "Jun 2024 - Present",
    description:
      "Analyzed complex datasets to extract valuable insights. Created data visualizations and reports to support business decisions. Developed data processing pipelines.",
    tags: ["Python", "SQL", "Data Visualization", "Statistical Analysis"],
  },
  {
    title: "Mobile Developer",
    company: "Lumuni Foundation",
    period: "Nov 2023 - Present",
    description:
      "Built cross-platform mobile applications using React Native. Implemented features for community engagement and information sharing. Optimized app performance for low-end devices.",
    tags: ["React Native", "JavaScript", "Mobile UI/UX", "API Integration"],
  },
  {
    title: "Volunteer Developer",
    company: "Various Organizations",
    period: "Ongoing",
    description:
      "Contributed technical expertise to various organizations on a volunteer basis. Developed solutions for non-profits and community projects. Mentored junior developers.",
    tags: ["Web Development", "Mobile Development", "Mentoring", "Open Source"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 px-8 bg-gray-950 text-white">
      <div className="flex justify-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1 rounded-full text-sm text-purple-400 bg-purple-950/30 border border-purple-800 inline-block mb-4"
        >
          Experience
        </motion.span>
      </div>
      <h2 className="text-3xl text-center font-bold mb-2">Work Experience</h2>
      <p className="text-center text-gray-400 mb-8">
        My professional journey across different roles and organizations.
      </p>
      <div className="space-y-12 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Experience Card */}
            <div className="flex-1 border border-gray-800 rounded-lg p-6 bg-gray-900 shadow-sm hover:border-purple-500 transition-all duration-300">
              <div className="font-bold text-xl mb-2 text-white">
                {exp.title}
              </div>
              <div className="text-gray-300 text-sm mb-3">
                {exp.company} &bull; {exp.period}
              </div>
              <div className="mb-4 text-gray-400 text-base">
                {exp.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-xs py-1 px-3 rounded-full text-gray-200 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Organization Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <Building className="w-10 h-10 text-purple-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
