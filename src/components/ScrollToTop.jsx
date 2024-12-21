import React, { useState, useEffect } from "react";
import {FaArrowUp} from 'react-icons/fa'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-20 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-blue-500 text-white animate-bounce  rounded-full shadow-lg hover:bg-blue-600 focus:outline-none font-extrabold"
        >
          <FaArrowUp size={20}/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
