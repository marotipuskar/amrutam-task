import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AppointmentCard = () => {
  const [mode, setMode] = useState('Video');
  const [date, setDate] = useState('Mon, 10 Oct');
  const [time, setTime] = useState('11:00 AM');

  const modes = [
    { name: 'In-Clinic', duration: '45 Mins' },
    { name: 'Video', duration: '45 Mins' },
    { name: 'Chat', duration: '10 Mins' },
  ];

  const dates = [
    { date: 'Mon, 10 Oct', slots: '10 slots' },
    { date: 'Tue, 11 Oct', slots: '2 slots' },
    { date: 'Wed, 12 Oct', slots: '5 slots' },
  ];

  const times = {
    morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM'],
    // , '11:00 AM'
    evening: ['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'],
  };

  return (
    <div>
        <div className='flex p-2 border justify-between rounded-xl border-black'> 
            <h1>Appointment Free </h1>
            <span>$ 699.00</span>
        </div>
      <h2 className="text-lg font-semibold mt-4 mb-4">Select your mode of session</h2>
      <div className="flex space-x-4 mb-6">
        {modes.map((m) => (
          <motion.button
            key={m.name}
            onClick={() => setMode(m.name)}
            className={`px-4 py-2 rounded-lg ${mode === m.name ? 'bg-green-100 border border-green-500' : 'bg-gray-100'}`}
            whileHover={{ scale: 1.05 }}
          >
            {m.name} <br /> {m.duration}
          </motion.button>
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-4">Pick a time slot</h2>
      <div className="flex space-x-4 mb-6">
        {dates.map((d) => (
          <motion.button
            key={d.date}
            onClick={() => setDate(d.date)}
            className={`px-4 py-2 rounded-lg ${date === d.date ? 'bg-green-100 border border-green-500' : 'bg-gray-100'}`}
            whileHover={{ scale: 1.05 }}
          >
            {d.date} <br /> {d.slots}
          </motion.button>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">Morning</h3>
        <div className="flex  space-x-2">
          {times.morning.map((t) => (
            <motion.button
              key={t}
              onClick={() => setTime(t)}
              className={`px-4 py-2 rounded-lg ${time === t ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
              whileHover={{ scale: 1.05 }}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-md font-semibold mb-2">Evening</h3>
        <div className="flex space-x-2">
          {times.evening.map((t) => (
            <motion.button
              key={t}
              onClick={() => setTime(t)}
              className={`px-4 py-2 rounded-lg ${time === t ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
              whileHover={{ scale: 1.05 }}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </div>
      <motion.button
        className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        Make An Appointment
      </motion.button>
    </div>
  );
};

export default AppointmentCard;
