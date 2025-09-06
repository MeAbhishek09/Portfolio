// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import cover from "../assets/envelope_cover_in.png";
// import bottom from "../assets/envelope_out_bottom.png";
// import top from "../assets/envelope_out_top.png";
// import letter from "../assets/letter.png";
import StarsBackground from "../Stars/StarsBackground";


import React from "react";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <section id="contact"  className=" bg-gray-900 text-white flex relative h-screen w-full overflow-hidden">
       <StarsBackground />
      {/* Left Side - Custom Mailbox Animation */}
      <div className="w-1/2 flex items-center justify-center relative">
        {/* Mailbox Structure */}
        <div className="relative w-32 h-40">
          {/* Post */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-20 bg-gray-700 rounded"></div>
          {/* Box */}
          <div className="absolute bottom-0 w-32 h-24 bg-blue-600 rounded-t-lg border-4 border-gray-700 shadow-md"></div>
          {/* Flag */}
          <motion.div
            className="absolute top-6 right-2 w-2 h-10 bg-red-500 origin-bottom"
            animate={{ rotate: [0, 45, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated Letters */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-10 bg-white border border-gray-400 shadow-lg rounded-sm"
            initial={{ y: -150 - i * 60, x: i * 30 - 40, rotate: -10, opacity: 0 }}
            animate={{ 
              y: [ -150 - i * 60, 100, 120 ], 
              rotate: [ -10, 5, 0 ], 
              opacity: [0, 1, 0] 
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          >
            {/* Envelope Flap */}
            <div className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[20px] border-transparent border-b-gray-300 absolute -top-3 left-0"></div>
          </motion.div>
        ))}
      </div>

      {/* Right Side - Contact Form */}
      
      <div className="w-1/2 flex items-center justify-center">
      
        <div className="max-w-lg w-full bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;