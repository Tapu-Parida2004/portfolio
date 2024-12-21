import React from "react";
import { motion } from "framer-motion";
import img from "../assets/about.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-20 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-4xl md:text-4xl  font-bold border-b-4 border-cyan-500 inline-block "
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Section: Profile Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 duration-300"
          >
            <img
              src={`${img}`}
              alt="404"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Section: Content */}
          <div>
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl font-semibold text-left"
            >
              Who Am I?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-gray-300 leading-7 text-left"
            >
              Hello! I'm a passionate and dedicated{" "}
              <span className="text-cyan-400">Web Developer</span>
              with a knack for creating stunning and functional websites. I
              specialize in front-end and back-end development, focusing on
              delivering clean, user-friendly interfaces and robust codebases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 text-gray-300 leading-7 text-left"
            >
              My goal is to bring innovative ideas to life, solving complex
              problems and delivering exceptional results for clients. With a
              commitment to continuous learning, I stay updated with the latest
              technologies and trends.
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 text-left"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                className="inline-block bg-cyan-600 text-white py-3 px-6 rounded-lg cursor-pointer shadow-lg hover:bg-cyan-500 transform hover:scale-105 duration-300  "
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
