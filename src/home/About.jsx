import { motion } from "framer-motion";
import logo_hi from "../assets/Robot_Says_Hi.gif";

function About() {
  return (
    <section
      id="about"
      className="relative h-auto lg:min-h-screen w-full bg-gray-100 px-6 sm:px-8 lg:px-12 py-6 overflow-x-hidden flex items-center justify-center"
    >
      <div className="px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-center ">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-20 flex flex-col md:flex-row items-center md:items-start overflow-hidden gap-2 lg:gap-12 sm:gap-8">
          {/* Image Section */}
          <motion.img
            src={logo_hi}
            alt="Profile"
            className="w-40 h-40 md:w-1/4 md:h-1/4 flex-shrink-0"
          />

          {/* Text Section */}
          <motion.div
            className="flex-1 min-w-0 w-3/4 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              Hi, I’m <span className="font-semibold text-yellow-300">Abhishek</span>, a passionate Developer and AI enthusiast. I love crafting creative and efficient solutions using code. My experience spans web development, deep learning, and AI projects. I enjoy turning complex problems into simple, elegant solutions and constantly improving my skills to stay at the forefront of technology.
            </p>

            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              I am always eager to learn new technologies and collaborate on innovative projects. I have worked on a variety of applications, from building interactive websites to developing AI models that analyze data and provide insights. My goal is to create solutions that are both practical and impactful.
            </p>

            {/* <p className="text-lg md:text-xl text-white leading-relaxed">
              Outside of coding, I enjoy exploring new ideas, reading about advancements in AI, and experimenting with personal projects. I thrive in environments that challenge me to think critically and creatively, and I’m always looking for opportunities to learn, contribute, and grow as a developer and researcher.
            </p> */}


            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
