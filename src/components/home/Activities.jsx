import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy, Users, ChevronsRight  } from "lucide-react";

export default function Activities() {
  const academics = [
    {
    year: "2025",
    title: "Winner - Special Category",
    place: "National Hackathon 2025",
    icon: <ChevronsRight className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-500" />,
    desc: "Developed an AI-driven solution to turn Facebook leads into booked clinic appointments in one screen, with automated Weekly Growth Brief generation (HTML/PDF) showing KPIs, uplift vs baseline, and recommended actions. Awarded ₹5,000 prize money and ₹10,000 academic support from Izzki Tech Solutions.",
    }
    ,

    {
      
      year: "2025",
      title: "GIAN Course on AI & ML",
      place: "NIT Rourkela 2025",
      icon: <GraduationCap className="w-8 h-8 md:w-14 md:h-14 text-green-500" />,
      desc: "Attended a Global Initiative of Academic Networks (GIAN) course, deepening knowledge in AI and ML concepts, applications, and research methodologies.",
    },
    {
      year: "2024",
      title: "National Student’s Space Challenge",
      place: "IIT Kharagpur 2024",
      icon: <Trophy className="w-6 h-6  md:w-12 md:h-12 text-yellow-500" />,
      desc: "Represented school in a national-level challenge on Space & Astronomy, demonstrating problem-solving, teamwork, and analytical skills.",
    },
    {
      year: "2024",
      title: "NPTEL Java Programming Elite Certificate",
      place: "NPTEL (IITs) 2024",
      icon: <BookOpen className="w-6 h-6 md:w-12 md:h-12 text-green-500" />,
      desc: "Excelled in Java programming with advanced concepts and problem-solving.",
    },
    {
      year: "2018",
      title: "NCC ‘A’ Certificate",
      place: "National Cadet Corps 2018",
      icon: <Users className=" w-6 h-6 md:w-12 md:h-12 text-red-500" />,
      desc: "Learned discipline, leadership, and teamwork through NCC training.",
    },
  ];

  return (
   <section className="bg-gray-100 text-white px-0 sm:px-8 lg:px-12 py-6">
  <div className="px-4 sm:px-6 lg:px-8 mx-auto">
    {/* Heading */}
    <motion.h2
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
    >
      <span className="text-blue-400">🎓 My Academics & Activities</span>
    </motion.h2>

    {/* Timeline */}
    <div className="relative">
      {academics.map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="mb-10 flex items-center gap-1  lg:gap-6 relative"
        >
          {/* Dot */}
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md">
            {item.icon}
          </div>

          {/* Card */}
         {/* Card */} 
         <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 shadow-lg hover:shadow-blue-500/40 transition display: flex lg:flex-row flex-col item center gap-1 lg:gap-6  w-full">
            <div className="lg:w-1/3 w-full"> 
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3> 
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">{item.place}</p> 
              {/* <span className="text-xs sm:text-sm md:text-base text-gray-200">{item.year}</span> */} 
            </div>
            <div className="lg:w-2/3 w-full flex items-center "> 
              <p className=" text-sm sm:text-base md:text-lg text-gray-200">{item.desc}</p>
            </div> 
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
