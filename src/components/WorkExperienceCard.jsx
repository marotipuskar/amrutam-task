import React from "react";
import { motion } from "framer-motion";

const WorkExperienceCard = () => {
  const experiences = [
    {
      role: "Senior doctor",
      clinic: "Midtown Medical Clinic",
      duration: "2016–PRESENT",
    },
    {
      role: "Senior doctor",
      clinic: "Midtown Medical Clinic",
      duration: "2010–2015",
    },
  ];

  return (
    <motion.div
      className="p-4 mt-6 bg-green-50 rounded-lg shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold text-gray-800">My Work Experience</h2>
      <p className="text-sm font-medium text-green-700 mt-2">
        I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
      </p>
      <div className="mt-4 space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <div className="flex items-center gap-3">
              <div className="text-green-700 text-2xl">
                <i className="fas fa-hospital-alt"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {exp.clinic}
                </h4>
                <p className="text-xs text-gray-600">{exp.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{exp.duration}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
