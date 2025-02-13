import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/tapu-parida-45243124b" },
    { id: 2, icon: <FaGithub />, url: "https://github.com/Tapu-Parida2004" },
    { id: 3, icon: <FaEnvelope />, url: "mailto:tapuparida232@gmail.com" },
  ];

  const navigationLinks = ["Home", "About", "Portfolio", "Experience", "Contact"];

  return (
    <footer className="relative bg-gray-900 text-gray-400 py-12 px-4 overflow-hidden">
      {/* Floating Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-black opacity-30" />
      
      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white animate-fade-in">Stay Connected</h2>
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          {socialLinks.map(({ id, icon, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${id === 1 ? 'LinkedIn' : id === 2 ? 'GitHub' : 'Email'} profile`}
              className="text-gray-400 text-2xl hover:text-cyan-400 duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="w-full border-t border-gray-700 my-6" />
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-base">
          {navigationLinks.map((to, index) => (
            <Link
              key={index}
              to={to.toLowerCase()}
              smooth
              duration={500}
              spy
              exact="true"
              offset={-70}
              className="cursor-pointer px-2 hover:text-cyan-400 duration-300 transform hover:scale-105"
            >
              {to}
            </Link>
          ))}
        </nav>
        
        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Tapu Parida. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
