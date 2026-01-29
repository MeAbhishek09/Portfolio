import React, { useState, useEffect } from "react";
import logo from "../../assets/Abhishek.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  
const links = [
  { name: "Home", to: "/#hero" },
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Specilaties", to: "/#specilaties" },
  { name: "Contact", to: "/#contact" },
];

// const dropdownLinks = [
//   { name: "Gallery", to: "/gallery" },
//   { name: "Personal", to: "/personal" },
// ];

const dropdownActive = ["gallery", "personal"].includes(active);



  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    useEffect(() => {
    if (location.pathname === "/gallery") setActive("gallery");
    else if (location.pathname === "/personal") setActive("personal");
  }, [location.pathname]);

  //  for dropdown active state
    // useEffect(() => {
    //   if (!isHome) return; // 🚫 do nothing on Gallery / Personal

    //   const sections = links.map((link) =>
    //     document.querySelector(link.to.replace("/#", "#"))
    //   );

    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           setActive(entry.target.id);
    //         }
    //       });
    //     },
    //     { threshold: 0.6 }
    //   );

    //   sections.forEach((section) => {
    //     if (section) observer.observe(section);
    //   });

    //   return () => {
    //     sections.forEach((section) => {
    //       if (section) observer.unobserve(section);
    //     });
    //   };
    // }, [isHome]);

  //  Intersection Observer to update active link
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
              <HashLink
                key={link.name}
                to={link.to}
                smooth
                onClick={() => setActive(link.name.toLowerCase())}
                className={`relative px-2 py-1 transition ${
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
                />
              </HashLink>
            ))}


          {/* Dropdown Menu */}
            {/* <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    dropdownActive
                      ? "text-blue-600 font-semibold bg-gray-100"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  More <ChevronDown size={16} />
                </button>


              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-40 rounded-xl shadow-lg bg-white border z-50"
                  >
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.to}
                        onClick={() => {
                          setActive(link.name.toLowerCase());
                          setShowDropdown(false);
                        }}
                        className="block px-4 py-2 text-gray-700  hover:text-blue-600 transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
                  <HashLink
                    key={link.name}
                    to={link.to}
                    smooth
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
                  </HashLink>
                ))}


                {/* Mobile Dropdown */}
                  {/* <div className="px-3 ">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition ${
                        dropdownActive
                          ? "text-blue-600 font-semibold bg-gray-100"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>More</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          showDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>


                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 overflow-hidden"
                        >
                          {dropdownLinks.map((link) => (
                            <Link
                              key={link.name}
                              to={link.to}
                              onClick={() => {
                                setActive(link.name.toLowerCase());
                                setIsOpen(false);
                                setShowDropdown(false);
                              }}
                              className={`block px-3 py-2 rounded-lg transition ${
                                  active === link.name.toLowerCase()
                                    ? "text-blue-600 font-semibold bg-gray-100"
                                    : "text-gray-700 hover:bg-blue-600 hover:text-white"
                                }`}

                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div> */}

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
