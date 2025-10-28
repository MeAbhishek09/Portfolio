import { motion } from "framer-motion";
import logo_hi from "../assets/Robot_Says_Hi.gif";

function About() {
  return (
    <section
      id="about"
      className="relative h-auto lg:min-h-screen w-full bg-gray-100 px-0 sm:px-8 lg:px-12 py-6 overflow-x-hidden flex items-center justify-center"
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
            className="flex-1 min-w-0 md:w-3/4 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              Hi, I’m <span className="font-semibold text-yellow-300">Abhishek</span> — a <span className="text-yellow-300">Frontend</span> and <span className="text-yellow-300">AI/ML Developer</span> from Delhi, India. I’m passionate about crafting intuitive user interfaces, building intelligent systems, and turning innovative ideas into impactful digital solutions.
            </p>

            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              My journey in tech started with a curiosity to understand how things work — from writing my first lines of code to developing end-to-end machine learning projects. Over time, I’ve gained experience working with modern web frameworks, deep learning architectures, and optimization techniques that bring creativity and performance together.
            </p>

            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              I love collaborating on challenging projects, exploring new technologies, and continuously improving my skills. Whether it’s designing smooth frontend experiences, training AI models for predictive insights, or building efficient backend systems, I aim to create solutions that are both meaningful and future-ready.
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
