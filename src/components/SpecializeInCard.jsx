import React from "react";
import { motion } from "framer-motion";

const SpecializeInCard = () => {
  const specialties = [
    { name: "Women's Health", icon: "👩‍⚕️" },
    { name: "Skin Care", icon: "💆‍♀️" },
    { name: "Immunity", icon: "🛡️" },
    { name: "Hair Care", icon: "💇‍♀️" },
  ];

  return (
    <motion.div
      className="p-4 bg-green-50 rounded-lg shadow-md border border-gray-200 mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold text-gray-800">I Specialize In</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {specialties.map((specialty, index) => (
          <motion.div
            key={index}
            className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl">{specialty.icon}</div>
            <p className="text-sm font-medium text-gray-600 mt-2 text-center">
              {specialty.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SpecializeInCard;
