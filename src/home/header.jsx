import React, { useState, useEffect } from "react";
import logo from "../assets/Abhishek.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Specilaties", href: "#specilaties" },
    { name: "Contact", href: "#contact" },
  ];



const dropdownLinks = [
  { name: "Gallery", href: "/gallery" },
  { name: "Research", href: "/#research" },
  { name: "Seminars", href: "/#seminars" },
];



  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Intersection Observer to update active link
  // useEffect(() => {
  //   const sections = [...links, ...dropdownLinks].map(link =>
  //     document.querySelector(link.href)
  //   );

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const id = entry.target.id;
  //           setActive(id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 }
  //   );

  //   sections.forEach((section) => section && observer.observe(section));

  //   return () => {
  //     sections.forEach((section) => section && observer.unobserve(section));
  //   };
  // }, [links, dropdownLinks]);


   // Intersection Observer to update active link
  useEffect(() => {
    const sections = links.map(link => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section must be visible
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [links]);


  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300  ${
        scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-6 flex items-center justify-between h-14">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-2xl font-bold text-gray-800">Abhishek</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`relative px-2 py-1 transition ${
                active === link.name.toLowerCase()
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
              {/* underline animation */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  active === link.name.toLowerCase() ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}

          {/* Dropdown Menu */}
          {/* <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
                active === "gallery" ||
                active === "publications" ||
                active === "seminars"
                  ? "text-blue-600 font-semibold "
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              More <ChevronDown size={16} />
            </button>

            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 w-40 border rounded-xl shadow-lg py-2 bg-gray-100"
              >
                {dropdownLinks.map((link) => {
                  const isHashLink = link.href.includes("#");
                  const LinkComponent = isHashLink ? HashLink : Link;

                  return (
                    <LinkComponent
                      key={link.name}
                      to={link.href}
                      smooth // adds smooth scrolling for HashLinks
                      onClick={() => {
                        setActive(link.name.toLowerCase());
                        setShowDropdown(false);
                      }}
                      className={`relative block px-4 py-2 transition rounded-md ${
                        active === link.name.toLowerCase()
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                          active === link.name.toLowerCase() ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </LinkComponent>
                  );
                })}
              </motion.div>
            )}

          </div> */}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none p-2 rounded-xl transition text-gray-700 hover:text-white hover:bg-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
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

              <nav className="flex flex-col space-y-2 p-4 text-base font-medium">
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
                        ? "text-blue-600 font-semibold bg-gray-100"
                        : "text-gray-700 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                {/* <details className="px-3 py-2 text-gray-700">
                  <summary className="cursor-pointer font-medium hover:bg-blue-600 hover:text-white">More</summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/gallery" className="block hover:bg-blue-600 hover:text-white p-1">
                      Gallery
                    </a>
                    <a href="#certificates" className="block hover:bg-blue-600 hover:text-white p-1">
                      Certificates
                    </a>
                    <a href="#research" className="block hover:bg-blue-600 hover:text-white p-1">
                      Research
                    </a>
                  </div>
                </details> */}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
