import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMousePointer,
} from "react-icons/fa";
import StarsBackground from "../Stars/StarsBackground";
import profile from "../assets/abhishek1.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row min-h-screen px-6 sm:px-10 md:px-16 py-12 md:py-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 overflow-hidden text-white"
    >
      {/* Stars */}
      <StarsBackground />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 opacity-90 -z-10" />

      {/* ================= LEFT SIDE ================= */}
      <div
        className="flex-1 z-10 flex flex-col justify-center text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:text-left space-y-4 lg:space-y-6  " 
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Abhishek
            </span>
          </h1>

          <h2 className="text-lg sm:text-2xl font-semibold text-indigo-100">
            AI/ML Engineer & Web Developer
          </h2>

          <p className="text-indigo-100 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            Passionate about building intelligent systems that merge deep learning
            with cutting-edge web technologies to deliver impactful, data-driven
            solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2">
            <motion.a
              href="https://drive.google.com/file/d/1tPB1DWs2sDhB57pHF1Rsm8C23OBGFO3Y/view"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center bg-white text-blue-700 font-semibold rounded-full px-6 py-3 shadow-md"
            >
              View Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center border-2 border-white text-white font-semibold rounded-full px-6 py-3 shadow-md"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 pt-5">
          <a href="https://github.com/abhishek" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-white hover:scale-110 transition" />
          </a>
          <a
            href="https://linkedin.com/in/abhishek-aiml"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-linkedin hover:scale-110 transition" />
          </a>
          <a href="mailto:abhishek@example.com">
            <FaEnvelope className="text-2xl hover:text-red-400 hover:scale-110 transition" />
          </a>
        </div>
        </motion.div>
      </div>

      {/* ================= RIGHT SIDE (IMAGE) ================= */}
      <div className="flex-1 z-10 flex items-center justify-center md:items-end">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center md:items-end relative overflow-visible w-full"
        >
          {/* Blob */}
          <motion.div
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-80 blur-3xl"
          />

          {/* Image Frame */}
          <motion.div
            className="
              relative z-10
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-[24rem] md:h-[24rem]
              lg:w-[28rem] lg:h-[28rem]
              md:-translate-y-20 lg:-translate-y-28
              rounded-full
              md:rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
              border-4 border-white
              md:border-0
              overflow-hidden
              md:overflow-visible
              shadow-2xl
            "
          >
            <img
              src={profile}
              alt="Abhishek"
              className="
                w-full h-full object-contain
                scale-[1.25] sm:scale-[1.35]
                md:scale-[1.55] lg:scale-[1.6]
                -translate-x-2 sm:-translate-x-3 md:-translate-x-6
              "
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
