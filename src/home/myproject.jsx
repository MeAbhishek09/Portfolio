import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Cpu,
  Code,
  Globe,
  User,
  FileText,
  Github,
  ExternalLink,
  X,
  Newspaper,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import Attendance1 from "../assets/Attendance1.png";
import Attendance2 from "../assets/Attendance2.png";
import Attendance3 from "../assets/Attendance3.png";
import Attendance4 from "../assets/Attendance4.png";
import Attendance5 from "../assets/Attendance5.png";
import suvidha1 from "../assets/suvidha1.png";
import suvidha2 from "../assets/suvidha2.png";
import suvidha3 from "../assets/suvidha3.png";
import suvidha4 from "../assets/suvidha4.png";
import suvidha5 from "../assets/suvidha5.png";
import spam1 from "../assets/spam1.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.png";


const projects = [
    {
      title: "Attendance Management System",
      brief: "AI-powered attendance system using face recognition with real-time session management.",
      description: [
        "This project is an intelligent attendance management system that automates student attendance using face recognition technology, eliminating manual roll calls and proxy attendance.",
        "The system allows admins to create attendance sessions with department, semester, subject, start time, and duration. Students can join active sessions, and their faces are detected and recognized in real time using a trained face recognition model.",
        "The backend handles secure enrollment, session expiry, and attendance storage, while the frontend provides a clean, responsive interface for admins and students. Goal: build a fast, accurate, and scalable attendance system suitable for classrooms and labs.",
      ],

      icon: <UserCheck size={36} className="text-indigo-500" />,
      tech: ["Python", "FastAPI", "Face Recognition", "OpenCV", "MongoDB", "React","FaceNet","ArcFace",],
      github: "https://github.com/MeAbhishek09/mark_my-_attendence",
      demo: "https://mark-my-attendence-icj8.onrender.com/",
      image: Attendance1,   // replace with your preview image
      images: [
        Attendance1,
        Attendance2,
        Attendance3,
        Attendance4,
        Attendance5,
      ],
    },

    {
      title: "Spam Detector",
      brief: "ML-powered spam classification system integrated with a modern web interface.",
      description: [
        "This project applies natural language processing and machine learning to detect and filter spam messages from legitimate ones in SMS and email communication.",
        "It uses text preprocessing, tokenization, and TF-IDF vectorization to convert raw text into meaningful numerical features, followed by a supervised learning model like Naive Bayes or Logistic Regression for classification.",
        "Goal: build an accurate, real-time spam detection system that enhances communication safety by preventing unwanted or malicious messages from reaching users.",
      ],

      icon: <Code size={36} className="text-green-500" />,
      tech: ["Python", "Scikit-learn", "Flask", "React","Text Tokenization", "TF-IDF Vectorization"," Naive Bayes",],
      github: "https://github.com/MeAbhishek09/Spam_message_detection_app.github.io",
      demo: "/404",
      image: spam1,
      images: [
        spam1,
      ],
    },

      {
    title: "Suvidha Foundation Frontend",
      brief: "Responsive and visually engaging website built for Suvidha Foundation using HTML, CSS, and JavaScript.",
      description: [
        "This project showcases the official website design for Suvidha Foundation, a non-profit organization dedicated to education, sustainability, and social impact initiatives.",
        "Developed using pure HTML, CSS, and JavaScript, the site features responsive layouts, smooth animations, and interactive elements that ensure an engaging user experience across all devices.",
        "Goal: design a clean, accessible, and impactful web presence that effectively highlights Suvidha Foundation’s mission, projects, and opportunities for volunteers and donors.",
      ],
      icon: <Globe size={36} className="text-blue-500" />,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/apurbasbjk30/Suvidha_Foundation.github.io",
      demo: "https://apurbasbjk30.github.io/Suvidha_Foundation.github.io/",
      image: suvidha1,
        images: [
          suvidha1,suvidha2,suvidha3,suvidha4,suvidha5
        ],
    },

  

   {
      title: "Personal Portfolio Website",
      brief: "Interactive and responsive portfolio built using React, Vite, and Tailwind CSS to showcase my skills and projects.",
      description: [
        "This project is my personal portfolio website designed to represent my technical journey, showcasing my projects, achievements, and skills in a clean and modern interface.",
        "Developed using React with Vite for optimized performance and Tailwind CSS for a responsive, mobile-friendly design. The site includes animated sections, dynamic project modals, and smooth navigation for an engaging user experience.",
        "Goal: create a professional and visually appealing digital space that reflects my identity as a developer while providing visitors with an intuitive and seamless browsing experience.",
      ],
      icon: <User size={36} className="text-red-500" />,
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/MeAbhishek09/Portfolio",
      demo: "https://meabhishek09.github.io/Portfolio/",
      image: portfolio1,
      images: [portfolio1,portfolio2,portfolio3,portfolio4],
    },

    {
      title: "Real-Time News App",
      brief: "A responsive web app that fetches and displays the latest headlines using the NewsAPI service.",
      description: [
        "Built a fully responsive news website using HTML, CSS, and vanilla JavaScript without any external frameworks.",
        "Integrated the NewsAPI (`https://newsapi.org/v2/top-headlines`) to fetch and display real-time national and international headlines.",
        "Implemented category-based filtering and dynamic search functionality to browse news efficiently.",
        "Focused on user-friendly design, optimized API fetching, and smooth content loading for better readability."
      ],
      icon: <Newspaper size={36} className='text-blue-500' />,
      tech: ["HTML", "CSS", "JavaScript", "NewsAPI"],
      github: "https://github.com/MeAbhishek09/News-App",
      demo: "/404", // 🔗 replace with live demo link if deployed
      image: news1,
      images: [news1,news2,news3,news4],
    },

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section id="projects" className="px-0 sm:px-6 lg:px-12 bg-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto pb-8 pt-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.h1
            className="py-2 font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h1>
          <p className="text-gray-600 text-lg mt-3">
            Projects that reflect my expertise and passion
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImage(0);
              }}
              className="relative group h-48 lg:h-60 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-0.1"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 lg:p-6  p-2 text-white z-10">
                <div className="flex justify-center mb-1 lg:mb-6">{project.icon}</div>
                <h2 className="text-xl font-semibold text-center">
                  {project.title}
                </h2>
                <p className="text-gray-200 text-sm text-center mt-1">
                  {project.brief}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-indigo-500/90 text-white rounded-full hover:bg-indigo-600 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Single Image with Arrows */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 max-h-screen ">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl w-full lg:w-[65%] max-h-[90vh] relative overflow-hidden ">
             <div className="overflow-auto max-h-[90vh]">
              {/* Close Button */}
              <button
               onClick={() => {
                  setSelectedProject(null);
                  setShowFullDescription(false); // 🔥 reset description
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-20"
              >
                <X size={28} />
              </button>

              {/* Image Viewer */}
              <div className="relative flex items-center justify-center bg-black">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 bg-white/60 hover:bg-white/90 rounded-full p-2"
                >
                  <ChevronLeft size={28} className="text-gray-800" />
                </button>

                <AnimatePresence mode="wait">
                   <motion.img
                    key={selectedProject.images[currentImage]}
                    src={selectedProject.images[currentImage]}
                    alt=""
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg object-contain lg:min-h-[28.5rem]  w-auto mx-auto"
                  />
                </AnimatePresence>

                 {/* ✅ Image Index Dots at Bottom */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "bg-gray-800 scale-125 shadow-md"
                        : "bg-gray-400/60 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 bg-white/60 hover:bg-white/90 rounded-full p-2"
                >
                  <ChevronRight size={28} className="text-gray-800" />
                </button>
              </div>

             

              {/* Description & Tech Stack */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {selectedProject.title}
                </h2>

                {/* Show More / Less Description */}
                <div className="text-gray-600 mb-2 text-justify transition-all duration-300">
                {selectedProject.description.map((para, i) => (
                  <p
                    key={i}
                    className={`${!showFullDescription && i > 0 ? "hidden" : "mb-2"}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
              <button
                onClick={toggleDescription}
                className="text-indigo-600 font-medium text-sm hover:underline mb-4"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>


                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
