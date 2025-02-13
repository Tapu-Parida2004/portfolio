import React from "react";
import { motion } from "framer-motion";
import img from "../assets/about.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-20 py-16 text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-semibold border-b-2 border-gray-700 inline-block"
        >
          About Me
        </motion.h1>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Section: Profile Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-102 duration-300"
          >
            <img
              src={img}
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Section: Content */}
          <div className="text-left">
            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-3xl font-semibold text-gray-200"
            >
              Who Am I?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="mt-4 text-gray-400 leading-7"
            >
              Hello! I'm a passionate and dedicated{" "}
              <span className="text-cyan-400">Web Developer</span> with a knack
              for creating stunning and functional websites. I specialize in
              front-end and back-end development, focusing on delivering clean,
              user-friendly interfaces and robust codebases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="mt-4 text-gray-400 leading-7"
            >
              My goal is to bring innovative ideas to life, solve complex
              problems, and deliver exceptional results. I stay updated with
              the latest technologies and trends to ensure top-notch solutions.
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mt-6"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-102 transition-all duration-300"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
