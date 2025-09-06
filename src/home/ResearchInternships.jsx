import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const internships = [

  {
  id: 1,
  title: "Research Project - Geomagnetic Storm Prediction",
  year: "2025",
  details:
    "Conducted research on predicting geomagnetic storm occurrence and duration using LASCO C2 solar images. Built deep learning pipelines with Convolutional Neural Networks (CNNs) for image-based prediction. Implemented probabilistic labeling methodology with Dst indices for accurate classification of storm-causing CMEs. Experimented with feature extraction (CPA, angular width, brightness, radial speed) and achieved promising results aligning with space weather forecasting research.",
},
{
  id: 2,
  title: "Internship - Banaras Hindu University (BHU)",
  year: "2025",
  details:
    "Worked on space weather research with a focus on Coronal Mass Ejections (CMEs) using LASCO C2 solar imagery. Extracted CME features such as Central Position Angle (CPA), angular width, brightness, and radial speed. Applied image preprocessing techniques and developed scripts for CME detection and classification. Collaborated with research scholars to map CME events with geomagnetic storm indices (Dst) for predictive modeling. Gained hands-on experience in combining astrophysics domain knowledge with machine learning approaches for space weather forecasting.",
},
  {
  id: 3,
  title: "AI/ML Internship - Briztech Infotechs",
  year: "2024",
  details:
    "Worked on developing and optimizing machine learning models for spam detection with seamless web integration. Applied supervised learning algorithms such as Logistic Regression, Random Forest, and SVM. Designed and implemented feature engineering techniques to improve classification accuracy by 15%. Deployed the solution into a web-based interface, enabling real-time spam detection and enhancing system reliability.",
},

{
  id: 4,
  title: "Frontend Internship - Suvidha Foundation",
  year: "2024",
  details:
    "Designed and developed responsive and interactive websites using React.js and Tailwind CSS, focusing on accessibility and modern UI/UX design principles. Enhanced page load speed by optimizing assets and applying lazy loading techniques. Collaborated with backend teams to integrate APIs and ensure seamless data flow. Deployed production-ready applications on cloud platforms, improving engagement and user satisfaction.",
},


];

export default function ResearchInternships() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl  font-bold mb-6 text-blue-400">
            Research & Internships
          </h2>
          <ul className="space-y-3">
            {internships.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer px-4 py-3 rounded-lg font-medium transition duration-300 ${
                  active === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold  bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent mb-4">
                {internships.find((i) => i.id === active)?.title}
              </h3>

               <span className="text-sm text-gray-400">
                {internships.find((i) => i.id === active)?.year}
              </span>

              <p className="text-gray-600 leading-relaxed">
                {internships.find((i) => i.id === active)?.details}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
