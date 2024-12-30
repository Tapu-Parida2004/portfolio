import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-700 pt-20 md:pt-24"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center h-full text-center md:text-left"
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            I'm a Frontend Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 py-4 max-w-md"
          >
            I specialize in building amazing UI experiences with React, Tailwind, and more. Let's create something incredible together!
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
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
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-indigo-500 hover:shadow-lg hover:scale-105 active:animate-bounce duration-300">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 md:mt-0"
        >
          <img
            src={hero}
            alt="mypicture"
            className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover animate-pulse rounded-full border-4 border-teal-600 shadow-lg hover:scale-105 duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
