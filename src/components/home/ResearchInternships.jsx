import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const internships = [
  {
    id: 1,
    title: "Research Project - Geomagnetic Storm Prediction",
    year: "2025",
    details: [
  "Conducted research on predicting geomagnetic storm occurrence and duration using LASCO C2 coronagraph images from the SOHO mission. Built an image preprocessing pipeline for cleaning, normalization, and alignment, followed by deep learning model development using Convolutional Neural Networks (CNNs) for detecting and classifying Coronal Mass Ejections (CMEs). Implemented a probabilistic labeling approach based on Dst indices to improve classification accuracy and interpretability.",
  
  "Extracted CME features such as Central Position Angle (CPA), angular width, brightness, and radial speed to study their relationship with geomagnetic storm intensity. Achieved results consistent with current space weather forecasting research, showcasing the potential of machine learning methods for early prediction of solar-induced geomagnetic disturbances.",
],


    },
  {
    id: 2,
    title: "Internship - Banaras Hindu University (BHU)",
    year: "2025",
     details: [
      "Worked on predicting geomagnetic storms using LASCO C2 solar imagery from the SOHO mission.",
      "Developed preprocessing and CNN-based models to detect and classify Coronal Mass Ejections (CMEs).",
      "Extracted CME features like CPA, angular width, brightness, and radial speed for storm correlation.",
      "Applied probabilistic labeling based on Dst indices for interpretable storm prediction.",
      "Combined astrophysics insights with machine learning for improved space weather forecasting.",
    ],

    },
  {
    id: 3,
    title: "Paper Presentation - National Seminar (CSI + CUJ)",
    year: "2024",
    details: [
    "Presented a research paper titled 'A Systematic Review of ML Algorithms in DoS and DDoS Attack Detection' at a National Seminar organized by the Central University of Jharkhand in collaboration with the Computer Society of India (CSI).",
    "The paper explored various machine learning algorithms and their effectiveness in identifying and mitigating Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) attacks across network infrastructures.",
    "Discussed comparative performance metrics, real-time detection capabilities, and implementation challenges in cybersecurity applications of AI-based methods.",
    "Interacted with researchers, faculty, and industry experts to exchange insights and received constructive feedback to refine the study for future publication and practical deployment in security frameworks.",
    ],

    },
  {
    id: 4,
    title: "AI/ML Internship - Briztech Infotechs",
    year: "2024",
    details: [
    "Developed and trained deep learning models for potato leaf disease classification using Convolutional Neural Networks (CNNs). Collected and preprocessed agricultural image datasets to enhance model accuracy through data augmentation, normalization, and noise reduction. Focused on identifying major potato leaf diseases such as early blight and late blight with high precision.",
    
    "Implemented and optimized the model using TensorFlow and Keras for efficient GPU execution. Deployed the trained model into an interactive web application using Flask, HTML, CSS, and JavaScript, enabling farmers and researchers to upload leaf images and receive instant disease diagnosis for early intervention.",
    ],


    },
    {
      id: 5,
      title: "Frontend Internship - Suvidha Foundation",
      year: "2024",
      details: [
        "Designed and developed responsive and interactive web pages using HTML, CSS, and JavaScript, with a focus on clean layouts and modern UI/UX practices for better user engagement.",
        "Improved website performance by optimizing images, minimizing CSS and JavaScript files, and implementing lazy loading for faster page rendering.",
        "Collaborated with backend teams to integrate RESTful APIs, ensuring smooth data communication between the client and server.",
        "Deployed fully functional websites on cloud platforms, enhancing accessibility, usability, and overall user satisfaction.",
      ],

    },
];

export default function ResearchInternships() {
  const [active, setActive] = useState(1);

  return (
    <section id="Research" className="w-full px-0 sm:px-8 lg:px-12 py-12 bg-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/3 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-400 ">
            Research & Internships
          </h2>
          <ul className="space-y-3 ">
            {internships.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer px-4 py-3 rounded-lg font-medium transition duration-300 ${
                  active === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200 hover:shadow-md shadow-sm "
                } text-base sm:text-lg md:text-xl`}
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
              className="p-8 sm:p-10 bg-white rounded-2xl shadow-xl border border-gray-200"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                {internships.find((i) => i.id === active)?.title}
              </h3>

              <span className="text-sm sm:text-base text-gray-400 mb-2 block">
                {internships.find((i) => i.id === active)?.year}
              </span>

              <div className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed space-y-1">
                {internships
                  .find((i) => i.id === active)
                  ?.details.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
