import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";

export default function Personal() {
  return (
    <>
      <Header />

      <main className="pt-28 pb-20 px-6 min-h-screen max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Personal
        </motion.h1>

        {/* Subtitle / Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 italic mb-12"
        >
          “Beyond code and credentials, this is where I become human.”
        </motion.p>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            A Quiet Introduction
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I am someone who finds meaning in both structure and silence.
            While my professional life revolves around building systems,
            solving problems, and working with technology, my personal
            life is guided by curiosity, reflection, and a constant desire
            to grow — not just as an engineer, but as a person.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            What Grounds Me
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy moments of calm — reading, long walks, observing ideas
            take shape, and learning without urgency. I believe progress
            doesn’t always have to be loud; sometimes it happens quietly,
            one thoughtful step at a time.
          </p>
        </motion.section>

        {/* Quote Block */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-l-4 border-gray-300 pl-6 py-4 mb-12 italic text-gray-600"
        >
          “Be patient with yourself.  
          Growth is not a race, it’s a direction.”
        </motion.blockquote>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Looking Forward
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I aspire to live a balanced life — one where ambition and
            humility coexist, where learning never stops, and where
            success is measured not only by outcomes, but by integrity,
            effort, and purpose.
          </p>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
