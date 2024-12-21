import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import LittleAboutMeCard from "./LittleAboutMeCard";
import SpecializeInCard from "./SpecializeInCard";
import WorkExperienceCard from "./WorkExperienceCard";
import FeaturedReviewsCard from "./FeaturedReviewsCard";
import ConcernsCard from "./ConcernsCard";

const DoctorProfile = () => {
  return (
    <>
    <div className="container  mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <motion.img
          src="https://via.placeholder.com/150" // Replace with actual image
          alt="Doctor"
          className="w-32 h-32 rounded-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div >
          <h2 className="text-xl font-bold">Dr. Bruce Willis</h2>
          <p>Gynecologist</p>
          <p className="text-sm text-gray-600">7+ years of experience</p>
        </div>
        <div className="md:flex-row items-center align-middle md:items-center gap-4">
          <div className="flex gap-2 text-green-500 ">
            <h1>Followers </h1>
            <h1>Following </h1>
            <h1>posts </h1>
          </div>
          <div className="flex gap-2">
            <span>850</span>
            <span>15k</span>
            <span>250</span>
          </div>
        </div>
          <div>
            <button className="bg-green-500 mt-4 text-white w-full py-1 px-3 rounded">Book Consultation</button>
          </div>

      </div>
      {/* <div className="mt-4">
        <h3 className="font-bold text-lg">Specializations</h3>
        <ul className="list-disc ml-4 text-sm">
          <li>Women's Health</li>
          <li>Skin Care</li>
          <li>Immunity</li>
        </ul>
      </div> */}

      <div className="mt-4">
        <h3 className="font-bold text-lg">Book an Appointment</h3>
        {/* <motion.div
          className="flex gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Video Call (₹999)
          </button>
          <button className="bg-green-300 text-white py-2 px-4 rounded">
            Chat (₹500)
          </button>
        </motion.div> */}
      </div>
    </div>

    <Page/>
    {/* <LittleAboutMeCard/>
    <SpecializeInCard/>
    <ConcernsCard/>
    <WorkExperienceCard/>
    <FeaturedReviewsCard/> */}
    </>
  );
};

export default DoctorProfile;