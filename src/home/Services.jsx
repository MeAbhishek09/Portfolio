// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, fast, and modern websites tailored to your needs.",
    icon: <Globe size={40} />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems with predictive models and deep learning.",
    icon: <Cpu size={40} />,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions with clean, maintainable, and scalable code.",
    icon: <Code size={40} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting your systems with strong security measures and risk analysis.",
    icon: <Shield size={40} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="text-white items-center px-6 py-6 bg-gray-100">
        <div  className="px-4 sm:px-6 lg:px-8 text-white  items-center mx-auto">
          {/* Heading */}
          <h1 className="text-center font-bold mb-12">
            <span className="text-blue-400 text-3xl md:text-3xl lg:text-4xl">
              My Services
            </span>
          </h1>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  w-full sm:text-2xl md:text-3xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 cursor-pointer flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4 text-blue-400">{service.icon}</div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-200">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}

