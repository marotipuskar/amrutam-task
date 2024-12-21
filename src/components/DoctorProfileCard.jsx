import React from "react";
import { motion } from "framer-motion";
import Page from "./Page";

const DoctorProfileCard = () => {
  return (
    <>
    <motion.div
      className="max-w-4xl mx-auto mt-8 m-4 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <img src="./assets/images/Untitled.png" alt="" />
      <div className="bg-green-100 p-6 flex items-center  justify-between">
        {/* Profile Image */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pinimg.com/736x/19/da/ec/19daecb982f0a0c2fb8508fa0f213f12.jpg"
            alt="Doctor"
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
              Dr. Bruce Willis
              <span className="text-blue-500 text-sm">
                <i className="fas fa-check-circle"></i>
              </span>
            </h2>
            <p className="text-sm text-green-700">Gynecologist</p>
            <div className="flex items-center text-yellow-500 mt-1">
              <span className="text-sm font-medium text-gray-700">4.2</span>
              <span className="ml-1 text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="flex items-center gap-10">
          <div className="text-center">
            <p className="text-sm text-gray-500">Followers</p>
            <p className="text-lg font-bold text-gray-800">850</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Following</p>
            <p className="text-lg font-bold text-gray-800">18K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Posts</p>
            <p className="text-lg font-bold text-gray-800">250</p>
          </div>
        </div>

        {/* Call to Action */}
        <button className="bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-800">
          Book an Appointment
        </button>
      </div>
    </motion.div>
    <Page/>
    </>
  );
};

export default DoctorProfileCard;
