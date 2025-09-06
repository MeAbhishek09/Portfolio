import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import StarsBackground from "../Stars/StarsBackground";


function Footer() {
  return (
    
    <footer className="w-full bg-gray-900  text-gray-300 py-8 px-6 overflow-hidden relative">
      {/* <div className="absolute inset-0 z-0"> */}
        <StarsBackground />
      {/* </div> */}
       
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        
        {/* Logo / Name */}
        <div className="text-white font-bold text-xl">
          Abhishek
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/MeAbhishek09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhishek-aiml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/meAbhishek_09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
