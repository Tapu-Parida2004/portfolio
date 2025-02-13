import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills, education } from "../data";

const Experience = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [filterPercentage, setFilterPercentage] = useState(0);

  const filteredSkills = skills.filter((skill) => skill.percentage >= filterPercentage);
  const visibleSkills = showAllSkills ? filteredSkills : filteredSkills.slice(0, 6);
  const visibleEducation = showAllEducation ? education : education.slice(0, 1);

  return (
    <div id="experience" className="w-full bg-gray-900 text-white py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold border-b-4 border-teal-300 inline-block">
            Experience
          </h2>
          <p className="text-gray-400 mt-4">
            While I am a fresher, my skills and projects demonstrate my dedication and expertise in web development.
          </p>
        </motion.div>

        <div className="mt-12">
          <h3 className="text-2xl font-medium text-teal-300 mb-4">Skills</h3>
          <div className="mb-8 flex flex-col sm:flex-row items-center">
            <label className="text-gray-300 text-lg mr-4 mb-2 sm:mb-0" htmlFor="percentageFilter">
              Filter by Percentage:
            </label>
            <select
              id="percentageFilter"
              value={filterPercentage}
              onChange={(e) => setFilterPercentage(Number(e.target.value))}
              className="bg-gray-800 text-white px-4 py-2 rounded-md w-full sm:w-auto"
            >
              <option value="0">All</option>
              <option value="60">60% and above</option>
              <option value="70">70% and above</option>
              <option value="80">80% and above</option>
              <option value="90">90% and above</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {visibleSkills.map(({ id, name, level, percentage, icon }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={icon}
                    alt={name}
                    className="w-12 h-12 object-cover rounded-md hover:scale-110 duration-300 hover:border-2 border-teal-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p className="text-gray-400 text-sm">{level}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    style={{ width: `${percentage}%` }}
                    className="bg-teal-500 h-2 rounded-full"
                  ></div>
                </div>
                <p className="text-gray-400 text-sm mt-2 text-right">{percentage}%</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-2 rounded-md hover:shadow-lg transition-transform duration-300"
            >
              {showAllSkills ? "Show Less" : "See More"}
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-medium text-teal-300 mb-4">Education</h3>
          {visibleEducation.map(({ id, degree, state, year, grade, description, institution, completion }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md mb-4"
            >
              <h4 className="text-xl font-semibold">{degree}</h4>
              <p className="text-gray-300 mt-2">{institution}, {state}</p>
              <p className="text-gray-400 text-sm">{year}</p>
              {grade && <p className="text-gray-400 text-sm">{grade}</p>}
              {completion && <p className="text-gray-400 text-sm">{completion}</p>}
              <p className="text-gray-300 mt-4">{description}</p>
            </motion.div>
          ))}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllEducation(!showAllEducation)}
              className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-2 rounded-md hover:shadow-lg transition-transform duration-300"
            >
              {showAllEducation ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;