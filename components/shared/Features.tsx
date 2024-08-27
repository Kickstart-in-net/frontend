import React from 'react'
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';



const services = [
  {
    title: "Secured Freelancing",
    description: "",
    bgColor: "bg-[#3b82f6]", // Tailwind's blue-500
    icon: "/path-to-lock-icon.png", // Replace with actual path to your lock icon
  },
  {
    title: "2-Step Escrow Based Payment System",
    description: "",
    bgColor: "bg-[#34d399]", // Tailwind's green-400
    icon: "/path-to-wallet-icon.png", // Replace with actual path to your wallet icon
  },
  {
    title: "Insurance Policy on Scams",
    description: "",
    bgColor: "bg-[#a3e635]", // Tailwind's lime-400
    icon: "/path-to-shield-icon.png", // Replace with actual path to your shield icon
  },
  {
    title: "Ai Assistant",
    description: "",
    bgColor: "bg-[#000000]", // Black background with border
    borderColor: "border-[#ec4899]", // Tailwind's pink-500
    icon: "/path-to-ai-icon.png", // Replace with actual path to your AI icon
  },
  {
    title: "Advanced Project Roadmaps",
    description: "",
    bgColor: "bg-[#f97316]", // Tailwind's orange-500
    icon: "/path-to-roadmap-icon.png", // Replace with actual path to your roadmap icon
  },
];

const WhatWeServe = () => {
  return (
    <div className='w-[97%]'>
      <span className="text-4xl  mt-10 font-bold text-transparent bg-clip-text-image mb-4">
        What we Serve
      </span>
      <p className=" text-xl">Dive in, level up your skills, and get paid—super easy!</p>
    <div className="w-full grid grid-cols-5 grid-rows-2 gap-4   flex-col justify-center items-center md:items-start  mt-60 md:mt-10 md:pt-20 md:pb-20  md:pl-[150px] md:pr-[150px]  md:ps-16  hover:bg-black/50 rounded-3xl transition-all ease-in-out duration-300 min-h-screen">
      {/* Upper Row */}
      <div className="col-span-2  h-[250px] w-[350px] bg-[#2486BE] rounded-3xl p-4 text-white flex items-center justify-center">
        Secured Freelancing
      </div>
      <div className="col-span-3 w-[630px] h-[260px] ml-[30px] bg-[#39BCA2] rounded-3xl p-4 text-white flex items-center justify-center">
        2-Step Escrow Based Payment System
      </div>

      {/* Lower Row */}
      <div className="col-span-2 -mt-[20px] h-[290px] bg-[#A4CB4A] rounded-3xl p-4 text-black flex items-center justify-center">
        Insurance Policy on Scams
      </div>
     <div  className=' -mt-[15px] mr-[40px] flex pl-9 col-span-3  w-[700px] '>
     <div className="col-span-1 h-40 w-40 z-20 bg-black rounded-3xl p-4 text-white flex items-center justify-center">
        Ai Assistant
      </div>
      <div className="col-span-2 custom-shape -mx-[120px] w-[560px] h-[290px] bg-[#EA764F] rounded-badge p-4 text-black flex items-center justify-center">
       
        Advanced Project Roadmaps
      </div>
      </div>
    </div>
     
    </div>
   
  );
};

export default WhatWeServe;
