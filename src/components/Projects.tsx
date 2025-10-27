"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const tagClassName =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-gray-800 text-gray-200 hover:bg-gray-700";

// Tab definitions
const tabDefinitions = [
  { key: "All", label: "All" },
  { key: "Web", label: "Web" },
  { key: "Mobile", label: "Mobile" },
  { key: "Backend", label: "Backend" },
  { key: "AI", label: "AI" },
];

// Example card data, add a 'type' property for each card
const cards = [
  {
    title: "Uamuzi Foundation",
    description:
      "A platform advocating for social justice, focusing on youth, women, and people with disabilities, integrating technology and data for equal rights.",
    type: "Web",
    tags: ["Gatsbyjs", "TypeScript", "Tailwind CSS"],
    image: "https://collinsomondi.vercel.app/images/uamuzi.png",
    // code: "https://github.com/Uamuzi/uamuzi-website",
    demo: "https://uamuzi.org/",
  },
  {
    title: "Handz-on Africa",
    description:
      "A project empowering Africa’s next generation with STEAM education.",
    type: "Web",
    tags: ["Next.js", "Sanity", "React"],
    image: "https://collinsomondi.vercel.app/images/handz-on-africa.png",
    // code: "https://github.com/C-o-m-o-n/hands-on-africa",
    demo: "https://handzonafrica.org/",
  },
  {
    title: "Comon Tech",
    description:
      "A community for developers and tech enthusiasts to share knowledge, resources, and opportunities.",
    type: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    image: "/comon-tech.png",
    // code: "https://github.com/comon-tech/comon-website",
    demo: "https://comon.tech/",
  },

  {
    title: "Imagisha",
    description:
      "An AI-powered platform for image generation and transformation.",
    type: "Web",
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "clerk",
      "Cloudinary AI",
    ],
    image: "https://collinsomondi.vercel.app/images/imagisha.png",
    code: "https://github.com/wenceslausstar/imagisha",
    demo: "https://imagisha.vercel.app/",
  },
  {
    title: "Lolwe AI",
    description: "Empowering Kenya’s Youth Through AI & Robotics.",
    type: "Web",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "NeonDB",
      "prisma",
      "PayStack",
    ],
    image: "https://collinsomondi.vercel.app/images/uamuzi.png",
    code: "https://github.com/wenceslausstar/lolwe-ai",
    demo: "https://lolwe.co.ke/",
  },
  {
    title: "Unlokinno",
    description:
      "A platform connecting academic labs in the Global South with climate tech startups and corporate projects.",
    type: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://collinsomondi.vercel.app/images/unlokinno.png",
    code: "https://gitlab.com/wenceslausstar/unlockinno-landing-page",
    demo: "https://unlokinno.com/",
  },
  {
    title: "Movie App",
    description:
      "A mobile app that shows you the currently trending movies and tv shows. Made using react-native.",
    type: "Mobile",
    tags: ["React Native", "JavaScript", "Tailwind CSS"],
    image:
      "https://github.com/C-o-m-o-n/RNmovieApp/raw/master/assets/homePage.png",
    code: "https://github.com/wenceslausstar/RNmovieApp",
    demo: "https://github.com/C-o-m-o-n/RNmovieApp",
  },
  {
    title: "Bonga",
    description:
      "A web platform supporting climate tech startups and corporate projects in the Global South.",
    type: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://collinsomondi.vercel.app/images/bonga.png",
    code: "https://github.com/wenceslausstar/peoples-gavel",
    demo: "https://peoples-gavel.vercel.app/",
  },
  {
    title: "Uamuzi App",
    description:
      "The mobile application for Uamuzi Foundation, supporting its social justice mission.",
    type: "Mobile",
    tags: ["React Native", "TypeScript", "Tailwind CSS"],
    image:
      "https://nk0srayh5f.ufs.sh/f/Yt2SUtqANz54LpUNQav8RdXYCn7liaMxVgrPmA1Wsk4HQzZO",
    code: "https://github.com/wenceslausstara/uamuzi-app-frontend",
    demo: "https://play.google.com/store/apps/details?id=com.uamuzi.android",
  },
  {
    title: "Hippo Riders",
    description:
      "A tour guide platform for exploring the Western Kenyan region along Lake Victoria.",
    type: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://collinsomondi.vercel.app/images/hippo-riders.png",
    code: "https://github.com/wenceslausstar/hippo-riders",
    demo: "https://hippo-riders.vercel.app/",
  },
  {
    title: "Friends of the people DAO server",
    description:
      "A Django server for managing constituent verification, representative info, and recall signing.",
    type: "Backend",
    tags: ["Django", "PostgreSQL", "REST API", "Docker", "Python"],
    image:
      "https://github.com/Friendsofthepeople/django-recall-server/raw/main/assets/images/Parliament.png",
    code: "https://github.com/wenceslausstar/django-recall-server",
    demo: "https://github.com/Friendsofthepeople/django-recall-server",
  },
  {
    title: "Jumbo Movies",
    description: "A platform for unlimited movies, series, and more.",
    type: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
    image: "https://collinsomondi.vercel.app/images/jumbo-filmz.png",
    code: "https://github.com/wenceslausstar/jumbo-filmz",
    demo: "https://jumbo-filmz.vercel.app/",
  },
];

export function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredCards =
    activeTab === "All"
      ? cards
      : cards.filter((card) => card.type === activeTab);

  return (
    <section className="py-16 md:py-24 mx-auto max-w-7xl">
      <div
        className="text-center mb-12"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4">
          Projects
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out some of my featured projects across web, mobile, backend,
          and AI development.
        </p>
      </div>
      {/* Tabs bar */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
        className="h-10 items-center rounded-md bg-gray-800 p-1 text-gray-400 flex justify-center"
        style={{ outline: "none" }}
      >
        {tabDefinitions.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`tab-content-${tab.key}`}
            data-state={activeTab === tab.key ? "active" : "inactive"}
            id={`tab-trigger-${tab.key}`}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2
              disabled:pointer-events-none disabled:opacity-50
              ${activeTab === tab.key ? "bg-gray-900 text-white shadow-sm" : ""}
            `}
            tabIndex={activeTab === tab.key ? 0 : -1}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards grid filtered by tab */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredCards.map((card, i) => (
          <motion.div
            key={card.title + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="rounded-lg border bg-gray-900 text-white shadow-sm h-full overflow-hidden flex flex-col group"
          >
            {/* Example: Card media */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                width={600}
                height={400}
                style={{ color: "transparent" }}
              />
            </div>
            {/* Card content */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                {card.title}
              </div>
              <div className="text-sm text-gray-400">{card.description}</div>
              {/* Tags row */}
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((tag) => (
                  <div key={tag} className={tagClassName}>
                    {tag}
                  </div>
                ))}
              </div>
              {/* Buttons row */}
              <div className="flex gap-2 mt-4">
                {card.demo && (
                  <a
                    href={card.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
