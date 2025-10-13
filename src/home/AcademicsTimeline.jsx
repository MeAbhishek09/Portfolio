import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

export default function AcademicsTimeline() {
  const activities = [
    {
      year: "2020",
      title: "High School",
      description:
        "Completed 10th grade with distinction from RPVV (Link Road), Karol Bagh, Delhi — excelled in Mathematics and Science.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2022",
      title: "Intermediate (Science)",
      description:
        "Completed 12th (Science stream: Physics, Chemistry, Mathematics) from RPVV (Link Road), Karol Bagh, Delhi, with strong marks in PCM and hands-on project experience in basic electronics and programming.",
      icon: <FaChalkboardTeacher />,
    },
    {
      year: "2023 - Present",
      title: "B.Tech CSE",
      description:
        "Pursuing Bachelor of Technology in Computer Science & Engineering at Central University of Jharkhand. Coursework & projects focus on AI, ML, data structures and web development; actively involved in research/technical clubs.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <section className="w-full  bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-6 sm:px-8 lg:px-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        My Academic Journey
      </h2>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700"></div>

        <div className="space-y-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-center w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Center circle icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 shadow-lg text-xl">
                {item.icon}
              </div>

              {/* Content box */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left ml-auto"
                }`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">{item.year}</p>
                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
