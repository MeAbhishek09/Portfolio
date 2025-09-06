import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy, Users } from "lucide-react";

export default function Activities() {
  const academics = [
    {
      year: "2019",
      title: "National Student’s Space Challenge",
      place: "IIT Kharagpur",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      desc: "Represented school in a national-level challenge on Space & Astronomy, demonstrating problem-solving, teamwork, and analytical skills.",
    },
    {
    year: "2023",
    title: "GIAN Course on Artificial Intelligence & Machine Learning",
    place: "NIT Rourkela",
    icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    desc: "Attended a Global Initiative of Academic Networks (GIAN) course, deepening knowledge in AI and ML concepts, applications, and research methodologies.",
   },
    {
      year: "2021",
      title: "NPTEL Java Programming Elite Certificate",
      place: "NPTEL (IITs)",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      desc: "Excelled in Java programming with advanced concepts and problem-solving.",
    },
    {
      year: "2020",
      title: "NCC ‘A’ Certificate",
      place: "National Cadet Corps",
      icon: <Users className="w-8 h-8 text-red-500" />,
      desc: "Learned discipline, leadership, and teamwork through NCC training.",
    },
    
  ];

  return (
    <section className="min-h-screen bg-gray-100 text-white px-6 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
            <span className="text-blue-400 sm:text-xl md:text-3xl lg:text-4xl ">🎓 My Academics & Activities</span> 
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-6">
          {academics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="mb-12 ml-6 relative"
            >
              {/* Dot */}
              <span className="absolute -left-9 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full border border-gray-600">
                {item.icon}
              </span>

              {/* Card */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/40 transition">
                <span className="text-sm text-gray-600">{item.year}</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className=" text-gray-600 font-medium">{item.place}</p>
                <p className="mt-2 text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
