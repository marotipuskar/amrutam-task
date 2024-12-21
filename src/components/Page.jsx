import React from 'react';
import { motion } from 'framer-motion';
import ConcernsCard from './ConcernsCard';
import AppointmentCard from './AppointmentCard';
import LittleAboutMeCard from './LittleAboutMeCard';
import SpecializeInCard from './SpecializeInCard';
import WorkExperienceCard from './WorkExperienceCard';
import FeaturedReviewsCard from './FeaturedReviewsCard';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
        <motion.div
          className="p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LittleAboutMeCard />
          <SpecializeInCard/>
          <ConcernsCard/>
          <WorkExperienceCard/>
          <FeaturedReviewsCard/>
        </motion.div>
        {/* <motion.div
          className="p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpecializeInCard />
        </motion.div>
        <motion.div
          className="p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ConcernsCard />
        </motion.div>
        <motion.div
          className="p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WorkExperienceCard />
        </motion.div>
        <motion.div
          className="p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FeaturedReviewsCard />
        </motion.div> */}
        <motion.div
          className="p-4 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AppointmentCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
