import React from "react";
import { motion } from "framer-motion";

const LittleAboutMeCard = () => {
  return (
    <motion.div
      className="p-4 bg-green-50 rounded-lg shadow-md border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">A Little About me</h2>
        <button className="text-sm text-green-700 border border-green-700 px-3 py-1 rounded hover:bg-green-100 transition">
          Follow +
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat.
        Love to work with all my hospital staff and senior doctors. Completed
        my graduation in Gynaecologist Medicine from the 
        <span className="text-green-700 cursor-pointer hover:underline"> Read More</span>
      </p>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700">Language Spoken</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["English", "Hindi", "Telugu"].map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4 text-gray-500">
        <a href="#" className="hover:text-green-700"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-green-700"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-green-700"><i className="fab fa-youtube"></i></a>
        <a href="#" className="hover:text-green-700"><i className="fab fa-twitter"></i></a>
      </div>
    </motion.div>
  );
};

export default LittleAboutMeCard;
