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

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <div
      id="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6"
    >
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Portfolio
          </h2>
          <p className="text-gray-400 mt-4">
            Here are some of my recent projects that demonstrate my skills in
            frontend and backend development.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="text-center mt-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 bg-gray-700 animate-pulse text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {visibleProjects.map(
            ({ id, title, description, image, demo, code }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 hover:border-[0.001px]  border-cyan-400"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover hover:scale-105 duration-300"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 mb-4">{description}</p>
                  <div className="flex justify-between">
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md hover:shadow-lg"
                    >
                      Demo
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-gray-600 to-gray-900 text-white px-4 py-2 rounded-md hover:shadow-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* "See More" button */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-md hover:shadow-lg"
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
