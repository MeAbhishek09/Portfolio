import React, { useState } from "react";

const certificates = [
  {
    title: "Java Programming (Elite Certificate)",
    organization: "NPTEL",
    year: "2023",
    link: "#",
  },
  {
    title: "AI & ML Seminar",
    organization: "Central University of Jharkhand",
    year: "2024",
    link: "#",
  },
  {
    title: "Cybersecurity in the Age of AI and ML",
    organization: "CSI Collaboration Seminar",
    year: "2024",
    link: "#",
  },
  {
    title: "National Student’s Space Challenge",
    organization: "IIT Kharagpur",
    year: "2023",
    link: "#",
  },
];

export default function Certificates() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="certificates" className="py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          📜 Certificates, Seminars & Conferences
        </h2>

        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Title Bar */}
              <button
                onClick={() => toggleDetail(index)}
                className="w-full text-left flex justify-between items-center px-5 py-3 font-semibold text-gray-700 hover:bg-blue-50 transition-colors"
              >
                <span>{cert.title}</span>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Details (Expand/Collapse) */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 py-3" : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-600 font-medium">
                  {cert.organization}
                </p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-white bg-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-700"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
