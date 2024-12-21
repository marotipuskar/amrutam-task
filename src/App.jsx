// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import Header from "./header/Header";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <>
    {/* <Header/> */}
    
    
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-green-100 p-4 text-center"> */}
        {/* <h1 className="text-2xl font-bold text-green-800">
          Find Expert Doctors For An In-Clinic Session Here
        </h1> */}
        
          
      {/* </header> */}

      <SearchFilter/>
      {/* You can toggle between these two components */}
      {/* <DoctorProfile /> */}
      <DoctorList />
    </div>
    </>
  );
}

export default App;
