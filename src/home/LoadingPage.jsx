import { motion } from "framer-motion";
import Plane from "../assets/9iqWITqA.png";
import cloud1 from "../assets/cloud1.webp";
import cloud2 from "../assets/cloud2.webp";
// import cloud3 from "../assets/cloud3.jpg";
// import cloud4 from "../assets/cloud4.png";
export default function LoadingPage() {
  return (
    <div className="absolute  w-screen h-screen bg-sky-700 overflow-hidden flex items-center justify-center">
      {/* Background Clouds */}
  {/* <motion.div
    className="absolute top-10 left-0 flex space-x-[-40px] blur-md" // overlapping circles
    animate={{ x: ["0%", "40%", "0%"] }}
    transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
    >
    <div className="h-40 w-40 bg-white rounded-full"></div>
    <div className="h-32 w-32 bg-white rounded-full"></div>
    <div className="h-48 w-48 bg-white rounded-full"></div>
    
  </motion.div>

  <motion.div
    className="absolute top-10  right-10 flex space-x-[-30px] blur-md"
    animate={{ x: ["0%", "40%", "0%"] }}
    transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="h-24 w-40 bg-white rounded-[60%_40%_50%_70%]"></div>
    <div className="h-28 w-32 bg-white rounded-[70%_50%_60%_40%]"></div>
    <div className="h-20 w-28 bg-white rounded-[50%_60%_40%_60%]"></div>
  </motion.div> */}



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
        {/* Slanted Text */}
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


        {/* Slanted Jet Trail Underline */}
<motion.img
  src= {Plane} // replace with your image path
  alt="underline"
  className="mt-4"
  style={{
    height: "60px", // adjust to fit image height
    width: "0px",   // start from 0 width
    objectFit: "contain",
    filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.8))", // glow effect
  }}
  animate={{ width: ["0px", "100%"], opacity: [1, 0.9, 0.7] }}
  transition={{ duration: 3, repeat: Infinity }}
/>

      </div>
    </div>
  );
}
