import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 flex items-center py-10 px-6 md:py-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full">
        
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="relative mt-8 md:mt-0"
        >
          <img
            src={hero}
            alt="Profile"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-teal-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-2 -right-2 bg-teal-500 w-5 h-5 md:w-6 md:h-6 rounded-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Frontend Developer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 py-4 max-w-sm sm:max-w-md md:max-w-lg leading-relaxed text-sm sm:text-base"
          >
            Crafting elegant UI experiences with <span className="text-teal-400">React</span>, <span className="text-indigo-400">Tailwind</span>, and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-70}
            >
              <button className="group text-white flex items-center px-5 sm:px-6 py-3 my-2 rounded-md bg-gradient-to-r from-teal-500 to-indigo-500 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                View Portfolio
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  <MdOutlineKeyboardArrowRight size={22} />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
