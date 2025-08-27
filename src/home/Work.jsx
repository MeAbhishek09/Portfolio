import React from "react";
import { motion } from "framer-motion";

function Work() {
  const projects = [
    {
      title: "CME Prediction",
      description:
        "Deep learning model that predicts geomagnetic storm occurrence using NASA LASCO C2 imagery.",
    },
    {
      title: "Spam Detector",
      description:
        "ML-powered spam classification system integrated with a modern web interface.",
    },
    {
      title: "Portfolio Website",
      description:
        "Full-stack personal portfolio with interactive UI built in React and Node.js.",
    },
    {
      title: "Portfolio Website",
      description:
        "Full-stack personal portfolio with interactive UI built in React and Node.js.",
    },
    {
      title: "Portfolio Website",
      description:
        "Full-stack personal portfolio with interactive UI built in React and Node.js.",
    },
    {
      title: "Portfolio Website",
      description:
        "Full-stack personal portfolio with interactive UI built in React and Node.js.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-red-600 text-white flex flex-col items-center py-16">
      <motion.h1
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Work
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full px-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
