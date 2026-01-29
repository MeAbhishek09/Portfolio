import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import StarsBackground from "../../Stars/StarsBackground";
// import StarsBackground from "../Stars/StarsBackground";
import { HashLink } from "react-router-hash-link";


function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-4 sm:px-12 lg:px-24 py-8 overflow-hidden relative">
      <StarsBackground />

      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-white font-bold text-2xl md:text-3xl">
          Abhishek
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg font-medium">
          {/* <a href="./" className="hover:text-white transition">Home</a> */}
          <HashLink smooth to="/#hero" className="hover:text-white transition">Home</HashLink>
          <HashLink smooth to="/#about" className="hover:text-white transition">About</HashLink>
          <HashLink smooth to="/#projects" className="hover:text-white transition">Projects</HashLink>
          <HashLink smooth to="/#contact" className="hover:text-white transition">Contact</HashLink>
          {/* <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a> */}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-2xl">
          <a
            href="https://github.com/MeAbhishek09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abhishek-aiml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-linkedin transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/meAbhishek_09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-twitter transition"
            
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="text-center text-gray-400 mt-6 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
