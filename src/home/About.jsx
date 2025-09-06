import { motion } from "framer-motion";
import logo from "../assets/Robot_Says_Hi.gif";

function About() {
  return (
    <section id="about" className=" relative min-h-screen w-full bg-gray-100 flex items-center justify-center px-6 py-16 overflow-x-hidden">
      <div className="max-w-4xl w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center md:items-start gap-10 overflow-hidden">
        
        {/* Image Section */}
        <motion.img
          src={logo}
          alt="Profile"
          className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0"
        />

        {/* Text Section */}
        <motion.div
          className="flex-1 min-w-0" // ✅ ensures text doesn't force overflow
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white mb-4 leading-relaxed">
            Hi, I’m Abhishek, a passionate Developer and AI enthusiast. I love
            crafting creative and efficient solutions using code. My experience
            spans web development, deep learning, and AI projects. I enjoy
            turning complex problems into simple, elegant solutions.
          </p>
          <p className="text-white leading-relaxed">
            I am always eager to learn new technologies and collaborate on
            interesting projects. When I’m not coding, I love exploring new
            ideas and staying up to date with the latest trends in technology.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              View Projects
            </a>
            {/* <a
              href="#projects"
              className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              View Projects
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
