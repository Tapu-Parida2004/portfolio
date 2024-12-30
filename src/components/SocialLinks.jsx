import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={20} className="text-blue-500" />,
      href: "https://www.linkedin.com/in/tapu-parida-45243124b",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "Github",
      icon: <FaGithub size={20} className="text-gray-300" />,
      href: "https://github.com/Tapu-Parida2004",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={20} className="text-gray-300" />,
      href: "mailto:tapuparida232@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={20} className="text-gray-300" />,
      href: "/MyResume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, name, icon, href, style, download }) => (
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
            className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[0px] hover:rounded-md hover:duration-300 border-b-[1px] border-gray-600 ${style}`}
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
  );
};

export default SocialLinks;
