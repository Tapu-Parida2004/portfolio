import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-4 md:p-5 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none font-semibold transform transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-gray-500"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
