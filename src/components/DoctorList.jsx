import React from "react";
import { motion } from "framer-motion";

const doctors = [
  {
    id: 1,
    name: "Dr. Prerm Narang",
    specialization: "Male-Female Infertility",
    experience: "7 years",
    languages: ["English", "Hindi", "Marathi"],
    videoFee: 800,
    chatFee: 0,
    rating: 4.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
  },
  {
    id: 2,
    name: "Dr. A P J abdul kalam",
    specialization: "Male-Female Infertility",
    experience: "7 years",
    languages: ["English", "Marathi"],
    videoFee: 400,
    chatFee: 70,
    rating: 4,
    img: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    name: "Dr. Rushali Salpe",
    specialization: "Male-Female Infertility",
    experience: "10 years",
    languages: ["English", "Hindi", "German"],
    videoFee: 200,
    chatFee: 100,
    rating: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9dxASN6ga6laEDm9blJmNlei5e6-kB8BPz7xUn61UL3GX02Eh9kt_L5f-1LFNjn-7tY&usqp=CAU"
  },
];

const DoctorList = () => {
  return (
    <>

      <div className="container mx-auto p-4 ">
        <div className="flex flex-wrap gap-12 justify-center">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className=" shadow-lg hover:shadow-black rounded-lg  p-4 w-64 bg-yellow-500 bg-opacity-15"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={doctor.img} // Replace with actual image
                alt="Doctor"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-lg font-bold mt-2 text-center">{doctor.name}</h3>
              <p className="text-sm text-center">{doctor.specialization}</p>
              <p className="text-center text-sm">{doctor.experience} of Experience</p>
              <div className="text-sm text-center">
                Speaks: {doctor.languages.join(", ")}
              </div>
              <div className="flex">
                <motion.div
                  className="flex gap-4 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button className=" text-black py-2 hover:text-white hover:bg-green-500  px-2 border-2 border-black hover:border-white rounded-xl">
                    Video call (₹999)
                  </button>
                  <button className="hover:bg-green-500 hover:text-white text-black py-2 px-2 border-2 border-black  hover:border-white rounded-xl">
                    Chat  Free
                  </button>
                </motion.div>

              </div>
              <div className="mt-4 justify-between items-center">
                {/* <span className="text-green-600 font-bold">₹{doctor.videoFee}</span> */}
                <button className="hover:bg-green-500 mt-4 border hover:text-white border-green-700 text-green w-full py-1 px-3 rounded">
                  View Profile 
                </button>
                <button className="bg-green-500 mt-4 text-white w-full py-1 px-3 rounded">
                  Book Consultation
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorList;