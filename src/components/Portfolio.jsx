import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on the search query
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <div id="portfolio" className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold border-b-2 border-gray-600 inline-block pb-2">Portfolio</h2>
          <p className="text-gray-400 mt-4">
            A selection of my recent projects showcasing my skills in frontend and backend development.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {visibleProjects.map(({ id, title, description, image, demo, code, technologies }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 border border-gray-700"
            >
              <img src={image} alt={title} className="w-full h-44 object-cover hover:scale-105 transition-all duration-300" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>

                {/* Technologies Display */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-white px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "See More" Button */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
