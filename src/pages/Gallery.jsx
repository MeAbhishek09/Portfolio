import React, { useState } from "react";
import suvidha1 from "../assets/suvidha1.png";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/gallery.jpg"
import img2 from "../assets/gallery_1_kgp.jpg"
import img3 from "../assets/gallery_2_rvs.jpg"
import img4 from "../assets/gallery_3_nitr.jpg"
import img5 from "../assets/gallery_4_kgp.jpg"

const images = [
  { src: img1, 
    title: "Tech Innovation", 
    span: "col-span-2 row-span-2" },
  {
    src: img2,
    title: "Nature Vision",
    span: "row-span-1",
  },
  {
    src: img3,
    title: "Abstract Art",
    span: "col-span-1 row-span-2",
  },
  {
    src:   img4,
    title: "Cosmic Beauty",
    span: "row-span-1",
  },
  {
    src:  img5,
    title: "Creative Design",
    span: "col-span-2 row-span-1",
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 relative">
      <Header />

      {/* Gallery Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="p-2 text-4xl font-extrabold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Gallery Highlights
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <p className="text-white text-lg font-semibold">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            {/* Background */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                >
                  <X size={28} />
                </button>

              {/* Image Container */}
              <motion.div
                key={selectedIndex}
                className="relative max-w-[65vw] max-h-[90vh] p-6 flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  className="h-auto w-auto rounded-2xl shadow-2xl object-contain max-h-[99vh] "
                />

                {/* Title */}
                <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg">
                  {images[selectedIndex].title}
                </p>

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
                >
                  <ChevronRight size={28} />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
