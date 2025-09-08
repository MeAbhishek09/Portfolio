import React from "react";
import { motion } from "framer-motion";

function Projects() {
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
    <section id="projects" className="  text-white items-center px-6 py-6 bg-gray-100 ">
      <div className="px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center mx-auto" >
        <motion.h1
          className=" mb-12 font-extrabold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full  sm:text-2xl md:text-3xl ">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
     </section>
  );
}

export default Projects;
