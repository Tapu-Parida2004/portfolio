import React from "react";
import {
  // FaFacebookF,
  // FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Footer = () => {
  const socialLinks = [
    // {
    //   id: 1,
    //   icon: <FaFacebookF />,
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 2,
    //   icon: <FaTwitter />,
    //   url: "https://twitter.com",
    // },
    {
      id: 1,
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/tapu-parida-45243124b",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/Tapu-Parida2004",
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      url: "mailto:tapuparida232@gmail.com",
    },
  ];
  const navigationLinks = [
    {
      id: 1,
      to: "Home",
    },
    {
      id: 2,
      to: "About",
    },
    {
      id: 3,
      to: "Portfolio",
    },
    {
      id: 4,
      to: "Experience",
    },
    {
      id: 5,
      to: "Contact",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-gray-400 py-12 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')]"></div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Stay Connected
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-6">
          {socialLinks.map(({ id, icon, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-2xl hover:text-cyan-400 duration-300 hover:scale-125 transform"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-base">
          {navigationLinks.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.to.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                className="flex items-center cursor-pointer"
              >
                <span className="px-2">{link.to}</span>
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Tapu Parida. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
