import { motion } from "framer-motion";
import Plane from "../assets/9iqWITqA.png";
import cloud1 from "../assets/cloud1.webp";
import cloud2 from "../assets/cloud2.webp";
// import cloud3 from "../assets/cloud3.jpg";
// import cloud4 from "../assets/cloud4.png";
export default function LoadingPage() {
  return (
    <div className="absolute w-screen h-screen bg-sky-700 overflow-hidden flex items-center justify-center">
      {/* Background Clouds */}
 <motion.img
        src={cloud1}
        alt="cloud1"
        className="absolute bottom-0 left-0 w-[100%] h-[50%] opacity-80 blur-sm"
        animate={{ x: ["0%", "20%", "0%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cloud 2 */}
      <motion.img
        src={cloud2}
        alt="cloud2"
        className="absolute top-0 left-10 w-[20%] opacity-90 blur-sm"
        animate={{ x: ["0%", "-15%", "0%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "easeInOut" }}
      />



      {/* Skywriting Text + Trail (shared slant wrapper) */}
      <div
        className="absolute top-1/2 left-1/2 flex flex-col items-start"
        style={{
          transform: " translate(-50%, -50%) skewX(-15deg) rotate(-15deg)", // applies to both text + underline
        }}
      >
       {/* Glowing Portfolio Text */}
        <motion.h1
          className="text-8xl md:text-9xl lg:text-[11rem] font-extrabold italic"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(white, #f0f0f0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textShadow: `
              0 0 10px rgba(255,255,255,0.9),
              0 0 20px rgba(255,255,255,0.6),
              0 0 35px rgba(200,200,200,0.4)
            `,
            fontFamily: "cursive",
          }}
        >
          portfolio
        </motion.h1>

{/* Plane Trail */}
        <motion.img
          src={Plane}
          alt="plane trail"
          className="mt-4"
          style={{
            height: "60px",
            width: "0px", // initial width
            objectFit: "contain",
            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.8))",
          }}
          animate={{ width: ["0%", "100%"], opacity: [1, 0.9, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
}


