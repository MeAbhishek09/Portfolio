// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive, fast, and modern websites tailored to your needs.",
    icon: <Globe size={40} />,
  },
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent systems with predictive models and deep learning.",
    icon: <Cpu size={40} />,
  },
  {
    title: "Software Development",
    description: "Custom software solutions with clean, maintainable, and scalable code.",
    icon: <Code size={40} />,
  },
  {
    title: "Cybersecurity",
    description: "Protecting your systems with strong security measures and risk analysis.",
    icon: <Shield size={40} />,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-400">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-4 text-blue-400">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
