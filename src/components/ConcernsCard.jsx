import React from 'react';
import { motion } from 'framer-motion';

const ConcernsCard = () => {
  return (
    <div className="p-4 bg-green-50 mt-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">The Concerns I Treat</h2>
      <div className="flex flex-wrap gap-2">
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          Skin Treatment
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          Pregnancy
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          Period Doubts
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          Endometriosis
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          Pelvic Pain
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          Ovarian Cysts
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">
          + 5 More
        </motion.div>
      </div>
    </div>
  );
};

export default ConcernsCard;

// import React from 'react';
// import { motion } from 'framer-motion';

// // const ConcernsCard = () => {
// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-4">The Concerns I Treat</h2>
// //       <div className="flex flex-wrap gap-2">
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
// //           Skin Treatment
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
// //           Pregnancy
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
// //           Period Doubts
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
// //           Endometriosis
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
// //           Pelvic Pain
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
// //           Ovarian Cysts
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">
// //           + 5 More
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// export default ConcernsCard;
