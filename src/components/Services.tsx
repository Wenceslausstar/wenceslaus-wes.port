"use client";
import { motion } from "framer-motion";
import { services } from "@/components/data/services";

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
