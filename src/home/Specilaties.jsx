import { motion } from "framer-motion";
import { Code, Cpu, Globe, Shield, Database } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern websites with clean UI and fast performance.",
    icon: <Globe size={40} />,
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Designing predictive models and neural networks with real-world impact.",
    icon: <Cpu size={40} />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Software Development",
    description:
      "Creating scalable and maintainable software with modern architecture.",
    icon: <Code size={40} />,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Cybersecurity",
    description:
      "Ensuring data privacy and protection through secure system design.",
    icon: <Shield size={40} />,
    color: "from-red-400 to-pink-600",
  },
  {
    title: "Database Management",
    description: "Designing efficient databases for high performance and reliability.",
    icon: <Database size={40}  />,
    color: "from-orange-400 to-orange-600",
  },
  
];

export default function Specilaties() {
  return (
    <section
      id="Specilaties"
      className="relative overflow-hidden px-0 sm:px-8 lg:px-12 bg-gray-100 text-white "
    >
      {/* Subtle glowing background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37, 62, 117, 0.1),transparent_70%)] blur-3xl"></div> */}
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-8">
      <div className="relative z-10 text-center mb-6 sm:mb-8 lg:mb-12">
       <motion.h1
          className=" mt-4 py-2 font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl p-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           My Specilaties
        </motion.h1>
         <p className="mt-4 text-gray-600 text-lg">
          Transforming ideas into intelligent digital experiences 
        </p>
      </div>

      {/* Glassmorphic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10  mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]`}
          >
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-80 blur-[2px]`}
            ></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
