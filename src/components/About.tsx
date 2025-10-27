"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-950/30">
      <div className="container">
        <div
          className="text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white mb-4 border-purple-800 text-purple-400">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get to Know Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating beautiful,
            functional applications and contributing to the tech community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" style={{ opacity: 1, transform: "none" }}>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-purple-800">
              <img
                alt="Profile"
                decoding="async"
                data-nimg="fill"
                className="object-cover"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
                src="/wes-photo.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full"></div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
            <p className="text-gray-400 mb-6">
              I'm a versatile developer with expertise in web, mobile, and
              backend development. My passion lies in creating seamless user
              experiences and robust applications that solve real-world
              problems.
            </p>
            <p className="text-gray-400 mb-6">
              When I'm not coding, I'm mentoring young and learner who are
              passionate in coding and robotics{" "}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg border border-gray-800 bg-gray-900 text-white shadow-sm">
                <div className="p-4">
                  <h4 className="font-bold text-purple-400 mb-1">4+</h4>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 text-white shadow-sm">
                <div className="p-4">
                  <h4 className="font-bold text-purple-400 mb-1">20+</h4>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 text-white shadow-sm">
                <div className="p-4">
                  <h4 className="font-bold text-purple-400 mb-1">10+</h4>
                  <p className="text-sm text-gray-400">
                    Open Source Contributions
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 text-white shadow-sm">
                <div className="p-4">
                  <h4 className="font-bold text-purple-400 mb-1">170+</h4>
                  <p className="text-sm text-gray-400">
                    Young developers mentored
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
