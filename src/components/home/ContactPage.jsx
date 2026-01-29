import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";
import StarsBackground from "../../Stars/StarsBackground";
// import StarsBackground from "./Stars/StarsBackground";
import Email_icon_animation from "../../assets/Email_icon_animation.gif";
// import Email_icon_animation from "../assets/Email_icon_animation.gif";
import { useRef, useState  } from "react";
import emailjs from "emailjs-com";


function ContactPage() {

  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hc4pyh2", // "YOUR_SERVICE_ID",
        "template_73mj9zw", // "YOUR_TEMPLATE_ID",
        formRef.current,
        "Eufu4assxqroCzmWF" // "YOUR_PUBLIC_KEY"
        
      )
      .then(
        () => {
          setStatusMessage("Thank you for your message! I’ll get back to you as soon as possible.");
          setShowPopup(true);
          formRef.current.reset();
        },
        () => {
          setStatusMessage("❌ Failed to send message. Please try again.");
          setShowPopup(true);
        }
      );
  };


  return (
    <section
      id="contact"
      className="relative w-full bg-gray-900 text-white overflow-hidden px-4 sm:px-6 lg:px-12 py-12"
    >
      {/* Background */}
      <StarsBackground />

      <div className="mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-20 x-4 sm:px-6 lg:px-8 ">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative text-center">
        <img
          src={Email_icon_animation}
          alt="Email_icon_animation"
          className="w-40 h-40 lg:w-65 lg:h-65"
        />

        {/* Contact Details Below Image */}
        <div className="mt-4 space-y-4 text-gray-300">
          
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-2xl font-bold text-blue-400">
              Get in Touch!
            </h3>
            <p className="text-gray-300 text-lg">
              Feel free to drop us a line or send your brief.
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <MapPin className="text-blue-400" size={22} />
            <p className="text-gray-300 text-lg">
              Ranchi, Jharkhand, India
            </p>
          </div>

          <div className="flex flex-row items-center gap-5">
            <Mail className="text-blue-400" size={22} />
            <a
              href="mailto:yourname@example.com"
              className="text-blue-400 hover:underline text-lg"
            >
              abhishek1322005@gmail.com
            </a>
          </div>

          <div className="flex flex-row items-center gap-5">
            <Phone className="text-blue-400" size={22} />
            <a
              href="tel:+911234567890"
              className="text-blue-400 hover:underline text-lg"
            >
              +91 99112 69594
            </a>
          </div>
        </div>
      </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
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

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="message"
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

            {/* {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                <div className="relative bg-white border shadow-lg rounded-lg p-6 w-80 text-center">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
                  >
                    ×
                  </button>

                  <p className="text-sm text-gray-800">
                    {statusMessage}
                  </p>
                </div>
              </div>
            )} */}


            {showPopup && (
              <div className="fixed bottom-5 right-5 bg-white border shadow-lg rounded-lg p-4 w-80 z-50 animate-fade-in">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
                >
                  ×
                </button>
                <p className="text-sm text-gray-800">{statusMessage}</p>
              </div>
            )}


          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
