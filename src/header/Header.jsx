// import React from 'react'

// function Header() {
//   return (
//     <>
//     <nav className='flex mt-2'>
//         <h1><a href="/">Amruta</a></h1>
//         <div className='flex'>
//             <div className='flex gap-6 align-middle'>

//                     <a href="/0">Home</a>
//                     <a href="/1">Find Doctors</a>
//                     <a href="/2">About Us</a>

//             </div>
//             <div className='flex pr-1 gap-6 text-right'>
//               <button className='rounded border border-green-900  px-3'>Login</button>
//               <button className='rounded bg-green-600 border border-green-900 px-2 py-1'>Sign-Up</button>

//             </div>
//         </div>
//     </nav>

//Responsive Below 
import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you import Link from your routing library

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-300 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Project Name */}
        <div className="text-xl font-bold flex">
          <a href="/" className="flex">
            <span className="text-green-600 text-2xl bold">A</span>
            <pre> </pre>
            <span className="text-green-600 text-2xl bold">M</span>
            <pre> </pre>
            <span className="text-green-600 text-2xl bold">R</span>
            <pre> </pre>
            <span className="text-green-600 text-2xl bold">U</span>
            <pre> </pre>
            <span className="text-green-600 text-2xl bold">T</span>
            <pre> </pre>
            <span className="text-green-600 text-2xl bold">A</span>
            <pre> </pre>
            <span className="text-green-600 text-2xl bold">M</span>
          </a>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className={`hidden md:flex md:space-x-6 lg:block ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/find-doctor" className="hover:text-gray-400">Find Doctors</Link>
          <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="border-1 hover:bg-green-600 border-green-900 text-white py-1 px-4 rounded">
            Login
          </button>
          <button className="bg-green-600 hover:bg-green-700 border-green-900 text-white py-1 px-4 rounded">
            Signup
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block px-4 py-2 mt-2 hover:bg-green-600">Home</Link>
        <Link to="/find-doctor" className="block px-4 py-2 hover:bg-green-600">Find Doctors</Link>
        <Link to="/about-us" className="block px-4 py-2 hover:bg-green-600">About Us</Link>
        <div className="px-4 py-2">
          <button className="block w-full border-1 hover:bg-green-600 border-black text-white py-1 rounded mb-2">
            Login
          </button>
          <button className="block w-full bg-green-600 hover:bg-green-700 border-green-900 text-white py-1 rounded">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;





//     </>
//   )
// }

// export default Header

// BelOW is base for gpt responsive
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="bg-amber-300 text-white p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left Section: Project Name */}
//         <div className="text-xl font-bold flex">
//           <a href="/" className="flex">
//           <span className="text-green-600">A</span>
//           <pre> </pre><span className="text-green-600">M</span>
//           <pre> </pre><span className="text-green-600">R</span>
//           <pre> </pre><span className="text-green-600">U</span>
//           <pre> </pre><span className="text-green-600">T</span>
//           <pre> </pre><span className="text-green-600">A</span>
//           <pre> </pre><span className="text-green-600">M</span></a>
//         </div>

//         {/* Middle Section: Navigation Links */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-gray-400">Home</Link>
//           <Link to="/find-doctor" className="hover:text-gray-400">Find Doctors</Link>
//           <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
//         </div>

//         {/* Right Section: Buttons */}
//         <div className="flex space-x-4">
//           <button className=" border border-green-900 text-white py-1 px-4 rounded">
//             Login
//           </button>
//           <button className="bg-green-600 hover:bg-green-700 border-green-900 text-white py-1 px-4 rounded">
//             Signup
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
//Above base for responsive -gpt





// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './index.css';

// // function Header() {
// //   return (
// //     <>
// //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
// //   <div class="container-fluid">
// //     <a class="navbar-brand" href="#">Navbar</a>
// //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// //       <span class="navbar-toggler-icon"></span>
// //     </button>
// //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
// //       <div class="navbar-nav">
// //         <a className="nav-link text-red-900" aria-current="page" href="#">Home</a>
// //         <a class="nav-link" href="#">Features</a>
// //         <a class="nav-link" href="#">Pricing</a>
// //         <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
// //       </div>
// //     </div>
// //   </div>
// // </nav>
      
// //     </>
// //   )
// // }

// export default Header
