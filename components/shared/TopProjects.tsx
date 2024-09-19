import React from "react";
// components/TopProjects.js
const TopProjects = () => {
    const projects = [
      {
        title: "Search Booster",
        image: "/searchbooster.svg",
        color: "bg-gradient-to-tr from-[#A08211] to-[#EFBF04]"
      },
      {
        title: "Weather App",
        image: "/weather app 1.svg",
        color: "bg-gradient-to-tr from-[#A08211] to-[#EFBF04]"
      },
      {
        title: "Ping Pong Game",
        image: "/ping pong 1.svg",
        color: "bg-gradient-to-tr from-[#A08211] to-[#EFBF04]"
      },
      {
        title: "Online Code Editor",
        image: "/onlinecodeeditor.svg",
        color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]"
      },
      {
        title: "Library Management System",
        image: "/library 1.svg",
        color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]"
      },
      {
        title: "Passcode Locker",
        image: "/passcode locker 1.svg",
        color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]"
      },
      {
        title: "Education Site",
        image: "/edu 1.svg",
        color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]"
      },
      {
        title: "Television UI",
        image: "/television.svg",
        color: "bg-gradient-to-tr from-[#7A278F] to-[#150A35]"
      }
    ];
  
    return (
      <div className="max-w-[53rem]  flex-wrap mx-3 py-8 ">
        <div className="flex  items-center mb-6">
          <h1 className="text-white text-xl font-bold">Top Projects</h1>
          <button className="flex h-7 w-auto items-center ml-4 text-white  py-1 px-2 border-2 border-solid border-white rounded-lg">
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
        </div>
  
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`w-[17rem] h-48 mr-4 rounded-lg overflow-hidden ${project.color}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-1 text-center text-white font-semibold">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TopProjects;
  