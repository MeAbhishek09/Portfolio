import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import StarsBackground from "../Stars/StarsBackground";
import Email_icon_animation from "../assets/Email_icon_animation.gif";

function ContactPage() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gray-900 text-white overflow-hidden px-4 sm:px-6 lg:px-12 py-12 md:py-20"
    >
      {/* Background */}
      <StarsBackground />

      <div className="mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-12">
        {/* Left Side - Mailbox Animation */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative px-0 sm:px-6 lg:px-12">
         <img src={Email_icon_animation} alt="Email_icon_animation" className="w-40 h-40 lg:w-65 lg:h-65" />


          {/* <div className="relative w-32 h-40">
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-20 bg-gray-700 rounded"></div>

            
            <div className="absolute bottom-0 w-32 h-24 bg-blue-600 rounded-t-lg border-4 border-gray-700 shadow-md"></div>

            
            <motion.div
              className="absolute top-6 right-2 w-2 h-10 bg-red-500 origin-bottom"
              animate={{ rotate: [0, 45, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </div>

         
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-10 bg-white border border-gray-400 shadow-lg rounded-sm"
              initial={{ y: -150 - i * 60, x: i * 30 - 40, rotate: -10, opacity: 0 }}
              animate={{
                y: [-150 - i * 60, 100, 120],
                rotate: [-10, 5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: i * 1.2,
                ease: "easeInOut",
              }}
            >
              
              <div className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[20px] border-transparent border-b-gray-300 absolute -top-3 left-0"></div>
            </motion.div>
          ))} */}
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-0 sm:px-6 lg:px-12">
          <motion.div
            className="w-full   rounded-2xl shadow-2xl p-8 border border-gray-700/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Me
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Have a project in mind or just want to say hi?
            </p>

            <form className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/70 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #3b82f6" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition duration-300"
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
