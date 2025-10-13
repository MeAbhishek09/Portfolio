import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Globe, FileText, Github, ExternalLink,X } from "lucide-react";

const projects = [
 
  {
    title: "CME Prediction",
    description: "Deep learning model predicting geomagnetic storms using NASA LASCO C2 imagery.",
    icon: <Cpu size={36} className="text-indigo-500" />,
    tech: ["Python", "TensorFlow", "Deep Learning"],
    github: "#",
    demo: "#",
    gradient: "from-indigo-400 to-indigo-600",
    cardColor: "bg-gradient-to-r from-green-400 to-green-600", 
  },
  {
    title: "Spam Detector",
    description: "ML-powered spam classification system integrated with a modern web interface.",
    icon: <Code size={36} className="text-green-500" />,
    tech: ["Python", "Scikit-learn", "Flask", "React"],
    github: "https://github.com/MeAbhishek09/Spam_message_detection_app.github.io",
    demo: "#",
    gradient: "from-green-400 to-green-600",
    cardColor: "bg-gradient-to-r from-indigo-500 to-indigo-700", 
  },
  {
    title: "Portfolio Website",
    description: "Full-stack personal portfolio with interactive UI built in React and Node.js.",
    icon: <Globe size={36} className="text-blue-500" />,
    tech: ["React", "Node.js", "TailwindCSS"],
    github: "https://github.com/MeAbhishek09/Portfolio",
    demo: "#",
    gradient: "from-blue-400 to-blue-600",
    cardColor: "bg-gradient-to-r from-pink-400 to-pink-600",
  },
  {
    title: "News App",
    description: "Dynamic news app fetching real-time articles via public API with filters and search.",
    icon: <FileText size={36} className="text-pink-500" />,
    tech: ["React", "Axios", "API"],
    github: "https://github.com/MeAbhishek09/news-app",
    demo: "#",
    gradient: "from-pink-400 to-pink-600",
    cardColor: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
   {
  title: "Tic-Tac-Toe Game",
  description: "A classic 3x3 Tic-Tac-Toe game implemented in React with interactive UI and win detection.",
  icon: <X size={36} className="text-red-500" />, // Use <Circle /> for O if you prefer
  tech: ["React", "JavaScript", "CSS"],
  github: "https://github.com/MeAbhishek09/tic-tac-toe.github.io",   // GitHub repo link
  demo: "#",     // Live demo link
  gradient: "from-red-400 to-red-600",       // gradient for top border or highlight
  cardColor: "bg-gradient-to-r from-yellow-400 to-yellow-600", // card background
  completed: true, // optional, if game is fully functional
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" px-6 sm:px-8 lg:px-12 bg-gray-100 text-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
        <motion.h1
            className="mb-12 py-2 font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl p-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h1>
          {/* <p className="text-gray-600 text-lg">
            Selected projects showcasing AI, ML, and full-stack skills
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${project.cardColor} bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between`}
            >
              {/* Gradient Top Border */}
              <div
                className={`h-1 w-full rounded-t-xl mb-4 bg-gradient-to-r ${project.gradient}`}
              ></div>

              {/* Icon */}
              <div className="flex justify-center mb-4">{project.icon}</div>

              {/* Title & Description */}
              <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
              <p className="text-gray-700 text-center mb-4">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub & Demo Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
