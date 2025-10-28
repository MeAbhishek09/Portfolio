import React from "react";

const images = [
  {
    src: "https://source.unsplash.com/random/600x600?technology",
    title: "Tech Innovation",
  },
  {
    src: "https://source.unsplash.com/random/600x600?nature",
    title: "Nature Vision",
  },
  {
    src: "https://source.unsplash.com/random/600x600?art",
    title: "Abstract Art",
  },
  {
    src: "https://source.unsplash.com/random/600x600?space",
    title: "Cosmic Beauty",
  },
  {
    src: "https://source.unsplash.com/random/600x600?design",
    title: "Creative Design",
  },
  {
    src: "https://source.unsplash.com/random/600x600?ai",
    title: "AI Creations",
  },
  {
    src: "https://source.unsplash.com/random/600x600?coding",
    title: "Code & Creativity",
  },
  {
    src: "https://source.unsplash.com/random/600x600?future",
    title: "Futuristic Vision",
  },
];

const Gallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-12 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-3">✨ My Creative Gallery</h1>
        <p className="text-lg opacity-90">
          A collection of projects, visuals, and creative explorations
        </p>
      </header>

      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Gallery Highlights</h2>
          <p className="text-gray-500">
            Hover to explore the magic behind each creation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-300 mt-10">
        <p>© 2025 Abhishek | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Gallery;
