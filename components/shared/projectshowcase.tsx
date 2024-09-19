// components/ProjectShowcase.js
'use client';
import React,{useState,useRef,useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectShowcase = () => {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Function to handle clicking outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // State to manage selected options
  const [selectedOptions, setSelectedOptions] = useState({
    "App-dev": false,
    "Web-dev": false,
    "Ui Design": false,
    "Machine Learning": false,
    "Web based IDE": false,
  });

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle checkbox change
  const handleCheckboxChange = (option: keyof typeof selectedOptions) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };
  const projects = [
    {
      title: "Search Booster",
      image: "/searchbooster.svg",
      color: "bg-gradient-to-tr from-[#A08211] to-[#EFBF04]",
      tech:"Semantic HTML, Meta tags, HTTPS, SSR... "
    },
    {
      title: "Weather App",
      image: "/weather app 1.svg",
      color: "bg-gradient-to-tr from-[#A08211] to-[#EFBF04]",
      tech:"Android studio "
    },
    {
      title: "Ping Pong Game",
      image: "/ping pong 1.svg",
      color: "bg-gradient-to-tr from-[#A08211] to-[#EFBF04]",
      tech:"Android studio "
    },
    {
      title: "Online Code Editor",
      image: "/onlinecodeeditor.svg",
      color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]",
      tech:"Docker, Javascript, Express Js, PostgreSQL"
    },
    {
      title: "Library Management System",
      image: "/library 1.svg",
      color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]",
      tech:"Figma, BootstrapCSS, Django, PostgreSQL"
    },
    {
      title: "Passcode Locker",
      image: "/passcode locker 1.svg",
      color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]",
      tech:"React native, bcrypt JS"
    },
    {
      title: "Education Site",
      image: "/edu 1.svg",
      color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]",
      tech:"Figma, ReactJS, NodeJS, Mongo",
    },
    {
      title: "Television UI",
      image: "/television.svg",
      color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]",
      tech:"Android studio "
    }
  ];
  
  return (
    <div className="max-w-[53rem]  flex-wrap mx-3 py-8 ">
        <div ref={dropdownRef} className="flex  items-center mb-6">
          <h1 className="text-white text-xl font-bold">Project Showcase</h1>
          <button  onClick={toggleDropdown} className="flex h-7 w-auto items-center ml-4 text-white  py-1 px-2 border-2 border-solid border-white rounded-lg">
            <span className="mr-2">filter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5 5A1 1 0 0115 12v6a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-8a1 1 0 01-.293-.707l-5-5A1 1 0 013 6V4z"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute  left-56 z-10 mt-80 w-48 rounded-md shadow-lg bg-gradient-to-tr from-[#191616] to-[#2F2F2F] ring-black ring-opacity-5">
          <div className="py-2 px-4">
            <h2 className="text-white text-lg font-semibold mb-3">Filter</h2>

            {/* Filter options with checkboxes */}
            {Object.keys(selectedOptions).map((option) => (
              <label
                key={option}
                className="flex items-center text-white space-x-2 mb-2"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-600"
                  checked={selectedOptions[option as keyof typeof selectedOptions]}
                  onChange={() => handleCheckboxChange(option as keyof typeof selectedOptions)}
                />
                <span>{option}</span>
              </label>
            ))}

            {/* Arrow button */}
            <button className="mt-4 w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
              <span className="text-xl">➔</span>
            </button>
          </div>
        </div>
      )}
        </div>
        <h3 className="text-white flex  items-center mt-4 mb-3 text-lg font-bold">App development <button className="bg-[#242222] items-center ml-3 h-8 w-8 flex justify-center rounded-full px-1 py-1 text-white ">
       <img src="/Arrow.png" className='h-4 w-4'/>
    </button> </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        {projects.map((project,index) => (
          (index==1 || index==2 ||index==5||index==7)?(
           <div
           key={index}
           className={`relative w-[17rem] h-48 mr-4 rounded-lg overflow-hidden ${project.color}`}
         >  <div className={`absolute text-xs top-0 left-[70px]  px-4 ml-auto  rounded-xl    font-semibold  overflow-hidden inline-block truncate w-52 ${project.color} `}> 
          {project.tech}</div>
           <img
             src={project.image}
             alt={project.title}
             className="w-full h-40 object-cover"
           />
           <div className="p-1 text-center text-white font-semibold">
             {project.title}
           </div>
         </div>):null
        ))}
      </div>
      <h3 className="text-white flex mt-6 mb-3 text-lg font-bold">Full-Stack WebDevelopment <button className="bg-[#242222] items-center ml-3 h-8 w-8 flex justify-center rounded-full px-1 py-1 text-white ">
       <img src="/Arrow.png" className='h-4 w-4'/>
    </button></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        {projects.map((project,index) => (
          (index==4 || index==6)?(
           <div
           key={index}
           className={ `relative w-[17rem]  h-48 mr-4 rounded-lg overflow-hidden ${project.color}`}
         > 
         <div className={`absolute text-xs top-0 left-[70px]  px-4 ml-auto  rounded-xl    font-semibold  overflow-hidden inline-block truncate w-52 ${project.color} `}> 
          {project.tech}</div>
           <img
             src={project.image}
             alt={project.title}
             className="w-full h-40 object-cover"
           />
           <div className="p-1 text-center text-white font-semibold">
             {project.title}
           </div>
         </div>):null
        ))}
      </div>
      <h3 className="text-white flex mt-6 mb-3 text-lg font-bold">Web based IDE<button className="bg-[#242222] items-center ml-3 h-8 w-8 flex justify-center rounded-full px-1 py-1 text-white ">
       <img src="/Arrow.png" className='h-4 w-4'/>
    </button></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        {projects.map((project,index) => (
          (index==3 )?(
           <div
           key={index}
           className={`relative w-[17rem] h-48 mr-4 rounded-lg overflow-hidden ${project.color}`}
         >  <div className={`absolute text-xs top-0 left-[70px]  px-4 ml-auto  rounded-xl    font-semibold  overflow-hidden inline-block truncate w-52 ${project.color} `}> 
          {project.tech}</div>
           <img
             src={project.image}
             alt={project.title}
             className="w-full h-40 object-cover"
           />
           <div className="p-1 text-center text-white font-semibold">
             {project.title}
           </div>
         </div>):null
        ))}
      </div>
      <h3 className="text-white flex mt-6 mb-3 text-lg font-bold">Search Engine Optimization<button className="bg-[#242222] items-center ml-3 h-8 w-8 flex justify-center rounded-full px-1 py-1 text-white ">
       <img src="/Arrow.png" className='h-4 w-4'/>
    </button></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        {projects.map((project,index) => (
          (index==0)?(
           <div
           key={index}
           className={`relative w-[17rem] h-48 mr-4 rounded-lg overflow-hidden ${project.color}`}
         >  <div className={`absolute text-xs top-0 left-[70px]  px-4 ml-auto  rounded-xl    font-semibold  overflow-hidden inline-block truncate w-52 ${project.color} `}> 
          {project.tech}</div>
           <img
             src={project.image}
             alt={project.title}
             className="w-full h-40 object-cover"
           />
           <div className="p-1 text-center text-white font-semibold">
             {project.title}
           </div>
         </div>):null
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
