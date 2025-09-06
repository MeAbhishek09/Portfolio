// import { motion } from "framer-motion";

// export default function MovingText() {
//   return (
//     <div className="  relative overflow-hidden whitespace-nowrap bg-transparent my-10  m-0 p-0">
//       <motion.div
//         className="text-3xl font-bold text-indigo-600"
//         animate={{ x: ["100%", "-100%"] }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
// FDJKNJFBJFD
//       </motion.div>
//     </div>
//   );
// }












// import { motion } from "framer-motion";
// import myGif from "../assets/running_robo.gif";   

// export default function MovingText() {
//   return (
//     <div className="relative overflow-hidden whitespace-nowrap w-full bg-transparent  h-40">
//       <motion.div
//         className="inline-block h-40"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           duration: 1, // speed (increase = slower)
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {/* <span className="mx-10">Hello, Welcome to My Portfolio ! Let's Start </span> */}
//         <img src= {myGif} alt="gif1" className="h-full w-auto" />
//         <img src= {myGif} alt="gif2" className="h-full w-auto" />  
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import myGif1 from "../assets/boy.gif";
import myGif2 from "../assets/running_robo.gif";

export default function MovingText() {
  return (
    <div className="relative overflow-hidden w-full bg-transparent h-40">
      <motion.div
        className="flex h-40"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 8, // slower = bigger number
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <img src={myGif1} alt="gif1" className="h-full w-auto mr-15" />
        <img src={myGif2} alt="gif2" className="h-full w-auto" />
      </motion.div>
    </div>
  );
}
