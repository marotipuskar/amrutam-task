import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const SearchFilter = () => {
    const [selectedFilters, setSelectedFilters] = useState([
        'Hair care',
        'Female',
        'Rs.0-Rs.500',
        'Hindi'
    ]);

    const removeFilter = (filter) => {
        setSelectedFilters(selectedFilters.filter(item => item !== filter));
    };

    return (
        <div className="p-4 ">
            <div className='bg-green-100 my-2'>
                {/* <div className='bg-green-600'>
                    <pre className='bg-green-100'>



                    </pre>
                </div> */}
                <h1 className="text-2xl md:text-3xl font-semibold text-center  text-green-800 mb-4">
                    Find Expert Doctors For An In-Clinic Session Here
                </h1>

                {/* <div className="flex lg:justify-center bg-green-100  my-10  flex-wrap justify-center md:justify-start gap-2 mb-4">
                    <div className="relative flex-1 flex-col max-w-xs md:max-w-sm">
                    <span class="material-symbols-outlined">location_on</span>
                        <select className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-500">
                            <option>Select Location</option>
                            
                        </select>
                    </div>
                    <input
                        type="text"
                        placeholder="eg. Doctor, specialisation, clinic name"
                        className="flex-1 mb-20 max-w-xs md:max-w-sm p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-500"
                    />
                </div> */}
{/* // 👇👇below is base for search filter  */}
{/* <div className="flex lg:justify-center bg-green-100 my-10 flex-wrap justify-center md:justify-start gap-2 mb-4">
    
    <div className="relative flex-1 flex-col max-w-xs md:max-w-sm">
    <span className="absolute top-2.5 left-2 material-symbols-outlined text-gray-500">location_on</span> 
    <select className="w-full p-2 pl-12 rounded border border-gray-300 focus:ring-2 focus:ring-green-500">
        <option>Select Location</option>
    </select>
</div>

    
    <div className="relative flex max-w-xs md:max-w-sm border bg-white cursor-pointer	">
        <input
            type="text"
            placeholder="eg. Doctor, specialisation"
            className="w-full p-2 pl-2 pr-10 rounded border border-gray-300 focus:ring-2 focus:ring-green-500"
        />
        <img src="https://img.icons8.com/?size=100&id=60&format=png&color=000000" className='w-10 h-8  ' alt="" />
        
    </div>
</div> */}
{/* ☝️☝️👆☝️//above is base for search  */}

<div className="flex lg:justify-center bg-green-100 my-10 flex-wrap justify-center md:justify-start gap-2 mb-4">
    {/* Location Input */}
    <div className="relative flex-1 flex-col max-w-[200px]">
        <span className="absolute top-2.5 left-2 material-symbols-outlined text-green-700">location_on</span>
        <select className="w-full p-2 pl-10 rounded border border-gray-300 focus:ring-2 focus:ring-green-500">
            <option>Select Location</option>
        </select>
    </div>

    {/* Search Input with Forward Arrow */}
    <div className="relative flex flex-1 max-w-[400px] border bg-white cursor-pointer">
        <input
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
            className="w-full p-2 pl-2 pr-12 rounded border border-gray-300 focus:ring-2 focus:ring-green-500"
        />
        <img src="https://img.icons8.com/?size=100&id=60&format=png&color=000000" className='w-10 h-8  ' alt="" />
        {/* <span className="absolute top-2.5 right-3 material-symbols-outlined text-black">arrow_forward</span> */}
    </div>
</div>


        {/* <span className="absolute top-2.5 right-2 material-symbols-outlined text-gray-500">arrow_forward_ios</span> */}


    {/* <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-md">
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 mr-2" />
        <select className="outline-none bg-transparent">
          <option>Select Location</option>
          
        </select>
      </div>
      <input
        type="text"
        placeholder="eg. Doctor, specialisation, clinic name"
        className="flex-grow border border-gray-300 rounded-md p-2 outline-none"
      />
      <button className="p-2 bg-green-600 text-white rounded-md">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div> */}
  



                    {/* <button className="p-2 px-4 bg-green-100 rounded border border-green-300 hover:bg-green-200 transition">
                                All filters
                    </button> */}
            </div>

            <div className="flex flex-wrap justify-center border py-2 gap-10">
                <button className="p-2 px-4 rounded border bg-gray-300 border-gray-300 hover:bg-gray-100">Expertise</button>
                <button className="p-2 px-4 rounded border bg-gray-300 border-gray-300 hover:bg-gray-100">Gender</button>
                <button className="p-2 px-4 rounded border bg-gray-300   border-gray-300 hover:bg-gray-100">Fees</button>
                <button className="p-2 px-4 rounded border bg-gray-300 border-gray-300 hover:bg-gray-100">Languages</button>
                <button className="p-2 px-4 bg-green-100 rounded border border-green-300 hover:bg-green-200 transition">
                    All filters
                </button>
            </div>

            <div className="mt-8 lg:justify-end flex flex-wrap justify-center gap-2">
                {selectedFilters.map((filter, index) => (
                    <div key={index} className="flex items-center bg-gray-300 text-green-700 rounded-full px-3 py-1">
                        {filter}
                        <button onClick={() => removeFilter(filter)} className="ml-2 text-gray-500 hover:text-red-600">&times;</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchFilter;
