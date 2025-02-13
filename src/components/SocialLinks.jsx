import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={22} className="text-blue-500" />,
      href: "https://www.linkedin.com/in/tapu-parida-45243124b",
    },
    {
      id: 2,
      name: "Github",
      icon: <FaGithub size={22} className="text-gray-300" />,
      href: "https://github.com/Tapu-Parida2004",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={22} className="text-gray-300" />,
      href: "mailto:tapuparida232@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={22} className="text-gray-300" />,
      href: "RESUME_TAPU.pdf",
      download: true,
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] z-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col">
        <ul>
          {links.map(({ id, name, icon, href, download }) => (
            <motion.li
              key={id}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.6,
                delay: id * 0.1,
                ease: "easeInOut",
              }}
              whileHover={{ x: 10, scale: 1.05 }}
              className="flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-0 hover:rounded-md hover:duration-300 border-b border-gray-600"
            >
              <a
                href={href}
                className="flex justify-between items-center text-white w-full"
                download={download}
                target={download ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                {name}
                {icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Floating Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none transition-all duration-300"
          aria-label="Toggle social links"
        >
          {isOpen ? "✖" : "☰"}
        </motion.button>

        {/* Mobile Social Links Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-16 right-0 bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <ul className="flex flex-col space-y-3">
              {links.map(({ id, name, icon, href, download }) => (
                <li key={id} className="text-white">
                  <a
                    href={href}
                    download={download}
                    target={download ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-gray-400"
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
