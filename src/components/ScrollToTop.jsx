import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

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
    <div className="fixed bottom-5 right-5 z-20">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none font-semibold transform transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-gray-500"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
