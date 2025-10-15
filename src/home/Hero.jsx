import { motion } from "framer-motion";
import heroImg from "../assets/Abhishek.jpg";
import StarsBackground from "../Stars/StarsBackground";

export default function Hero() {
  return (
    <section id="hero"
      className="relative h-screen w-full overflow-x-hidden"
    >
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
      <StarsBackground />
      {/* Background blobs (clipped by overflow-hidden) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[60vmin] h-[60vmin] rounded-full bg-sky-400/30 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[80vmin] h-[80vmin] rounded-full bg-purple-400/25 blur-3xl"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center">
        <div className="text-center text-white">
          <motion.img
            src={heroImg}
            alt="Hero"
            className="w-48 h-48 rounded-full shadow-2xl border-4 border-white mb-6 object-cover mx-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />

          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Abhishek
            </span>
          </motion.h1>

          <motion.p
            className="text-sky-200 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed p-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Crafting intelligent systems and beautiful web experiences with{" "}
            <span className="text-yellow-300 font-semibold">AI</span>,{" "}
            <span className="text-orange-300 font-semibold">Deep Learning</span>, and{" "}
            <span className="text-pink-300 font-semibold">Web Development</span>.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1tPB1DWs2sDhB57pHF1Rsm8C23OBGFO3Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-white font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
