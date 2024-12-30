import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const links = [
    { id: 1, name: "Home", icon: <FaHome size={24} />, to: "home" },
    { id: 2, name: "About", icon: <FaUserAlt size={20} />, to: "about" },
    {
      id: 3,
      name: "Portfolio",
      icon: <FaBriefcase size={20} />,
      to: "portfolio",
    },
    {
      id: 4,
      name: "Experience",
      icon: <FaGraduationCap size={24} />,
      to: "experience",
    },
    { id: 5, name: "Contact", icon: <FaEnvelope size={20} />, to: "contact" },
  ];

  // Change opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full h-20 bg-gradient-to-r from-gray-700 to-gray-800 text-white z-50 shadow-lg">
      <div className="flex justify-between items-center h-full px-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolling ? 0.7 : 1 }} // Reduce opacity when scrolling
          transition={{ duration: 1 }}
          className="font-signature text-4xl animate-pulse cursor-pointer transform hover:scale-110 duration-300"
        >
          Tapu
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, name, icon, to }) => (
            <motion.li
              key={id}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: id * 0.1, duration: 0.5 }}
              className="flex items-center space-x-2 font-medium text-gray-300 hover:text-white hover:scale-110 duration-300 cursor-pointer"
            >
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70} // Adjusts for the fixed Navbar height
                className="flex items-center"
              >
                {icon}
                <span className="px-2">{name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:hidden text-gray-300 duration-300 hover:scale-105 hover:rotate-180 hover:text-white"
        >
          {!menuOpen && <FaBars size={30} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800"
      >
        {/* Close Button */}
        <motion.button
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-5 right-5 z-50 text-white duration-300 transform hover:rotate-180 hover:scale-110 hover:shadow-[0_10px_30px_rgba(0,200,255,0.8),0_5px_10px_rgba(0,150,255,0.6)] hover:border-2 border-cyan-600 focus:shadow-[0_0_20px_rgba(255,255,255,0.9)]"
        >
          <FaTimes size={30} />
        </motion.button>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center justify-center space-y-6 h-full text-gray-300">
          {links.map(({ id, name, icon, to }) => (
            <motion.li
              key={id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: id * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4 text-2xl cursor-pointer capitalize hover:scale-110 hover:text-white duration-300"
            >
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="flex items-center"
              >
                {icon}
                <span className="px-2">{name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
