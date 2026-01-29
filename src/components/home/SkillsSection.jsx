import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBrain,
  FaUsers,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";
import { FaJava, FaGitAlt } from "react-icons/fa";
import { SiC, SiCplusplus, SiDeepnote } from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";


export default function SkillsSection() {
  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "Hindi", flag: "🇮🇳" },
  ];

  const techSkills = [
    { icon: <FaPython />, name: "Python", color: "text-blue-400" },
    { icon: <FaReact />, name: "React.js", color: "text-cyan-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
    { icon: <FaBrain />, name: "Machine Learning", color: "text-purple-400" },
    { icon: <FaJava />, name: "Java", color: "text-red-500" },
    { icon: <SiC />, name: "C", color: "text-blue-500" },
    { icon: <GiNetworkBars />, name: "OOPs", color: "text-green-500" },
    { icon: <FaGitAlt />, name: "Git", color: "text-orange-500" },
    { icon: <SiDeepnote />, name: "Deep Learning", color: "text-yellow-500" },
    { icon: <FaDatabase />, name: "SQL/NoSQL", color: "text-yellow-400" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-300" },
    { icon: <SiCplusplus />, name: "C++", color: "text-indigo-500" },

  ];

  const softSkills = [
    { icon: <FaUsers />, name: "Teamwork", color: "text-green-400" },
    { icon: <FaUsers />, name: "Leadership", color: "text-red-400" },
    { icon: <FaComments />, name: "Communication", color: "text-yellow-400" },
    { icon: <FaComments />, name: "Adaptability", color: "text-cyan-400" },

    { icon: <FaBrain />, name: "Problem Solving", color: "text-purple-400" },
    { icon: <FaLightbulb />, name: "Creativity", color: "text-orange-400" },
    
    { icon: <FaBrain />, name: "Critical Thinking", color: "text-indigo-400" },
  ];

  return (
    <section
      id="skills"
      className="text-white items-center px-0 sm:px-8 lg:px-12 py-4 bg-gray-100"
    >
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center mx-auto pb-4 sm:pb-6">
        <motion.h1
          className="mb-6 sm:mb-8 lg:mb-12 mt-4 py-2 font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl p-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌟 My Skills
        </motion.h1>

        {/* Languages Badges */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {languages.map((l, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-blue-500/80 text-white text-sm font-medium backdrop-blur-sm shadow-md transition-all duration-300"
            >
              {l.flag} {l.name}
            </motion.span>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Technical Skills */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-sky-500/30 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
              💻 Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {techSkills.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-center flex flex-col items-center"
                >
                  <span className={`text-4xl ${t.color}`}>{t.icon}</span>
                  <p className="mt-2 font-medium">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg hover:shadow-sky-500/30 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
              🤝 Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {softSkills.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-center flex flex-col items-center"
                >
                  <span className={`text-4xl ${s.color}`}>{s.icon}</span>
                  <p className="mt-2 font-medium">{s.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
