"use client";
import { motion } from "framer-motion";

// Add your SVG icon code here (can use lucide-react for production)
const ServiceIcon = {
  web: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-purple-400"
    >
      <path d="m16 18 6-6L16 6M8 6l-6 6 6 6" />
    </svg>
  ),
  mobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-smartphone h-10 w-10 text-purple-400"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  ),
  backend: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-purple-400"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  genai: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-purple-400"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6v6H9z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  openSource: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-purple-400"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="m9.09 14.26 1.83 1.83a2 2 0 0 0 2.82 0l1.83-1.83c.78-.78.78-2.04 0-2.82L14 8.6c-.78-.78-2.04-.78-2.82 0l-1.83 1.83c-.78.78-.78 2.04 0 2.82Z" />
      <path d="M21 12c-1 0-3-1-3-3a3 3 0 0 1 6 0c0 1-2 3-3 3Z" />
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M21 21v-2c0-1.1-.9-2-2-2h-2" />
      <path d="M3 7H5c1.1 0 2 .9 2 2v2" />
    </svg>
  ),
  community: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-purple-400"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </svg>
  ),
};

const moreServices = [
  {
    icon: ServiceIcon.genai,
    title: "GenAI Development",
    description:
      "I integrate and develop generative AI solutions for various applications.",
    tags: [
      "LLMs",
      "AI Integration",
      "Prompt Engineering",
      "AI-powered Applications",
    ],
  },
  {
    icon: ServiceIcon.openSource,
    title: "Open Source",
    description:
      "I actively contribute to and maintain open source projects in the developer community.",
    tags: ["GitHub", "Collaboration", "Documentation", "Community Building"],
  },
  {
    icon: ServiceIcon.community,
    title: "Community Building",
    description:
      "I manage and grow a vibrant Discord community of developers and tech enthusiasts.",
    tags: ["Community Management", "Discord", "Mentoring", "Knowledge Sharing"],
  },
];

const allServices = [
  {
    icon: ServiceIcon.web,
    title: "Web Development",
    description:
      "I build amazing frontend websites using Next.js, React, and modern web technologies.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: ServiceIcon.mobile,
    title: "Mobile Development",
    description:
      "I create cross-platform mobile applications using React Native that work on both iOS and Android.",
    tags: ["React Native", "Expo", "Redux", "Native APIs", "Mobile UI/UX"],
  },
  {
    icon: ServiceIcon.backend,
    title: "Backend Development",
    description:
      "I build robust backend systems using Django, Flask, and various databases.",
    tags: [
      "Django",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Clerk",
    ],
  },
  ...moreServices,
];

export function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-gray-950 text-white">
      <div className="flex justify-center mb-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1 rounded-full text-sm text-purple-400 bg-purple-950/30 border border-purple-800 inline-block"
        >
          Services
        </motion.span>
      </div>

      <h2 className="text-3xl text-center font-bold mb-2">What I Do</h2>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        I offer a wide range of development services to help bring your ideas to
        life. From web and mobile apps to backend systems and AI integration.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {allServices.map((svc, i) => (
          <motion.div
            key={i}
            className="rounded-lg border border-gray-800 bg-gray-900 text-white shadow-sm h-full transition-all hover:shadow-md hover:border-purple-500 hover:scale-105 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4">{svc.icon}</div>
              <div className="text-2xl font-semibold leading-none tracking-tight mb-2">
                {svc.title}
              </div>
              <div className="text-sm text-gray-400">{svc.description}</div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-gray-800 text-gray-200 hover:bg-gray-700"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
