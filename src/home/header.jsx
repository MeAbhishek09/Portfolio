import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icons
import logo from "../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // header changes after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-12">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">Abhishek</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`px-2 py-1 rounded-xl transition ${
                active === link.name.toLowerCase()
                  ? "text-red-600 font-semibold"
                  : "text-gray-700 hover:text-white hover:bg-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none p-2 rounded-lg transition ${
            isOpen || active === "contact"
              ? "text-red-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold text-gray-800">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 p-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name.toLowerCase());
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg transition ${
                    active === link.name.toLowerCase()
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;