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
    <div>
      <span className="text-4xl  mt-10 font-bold text-transparent bg-clip-text-image mb-4">
        What we Serve
      </span>
      <p className=" text-xl">Dive in, level up your skills, and get paid—super easy!</p>
    <div className="w-full flex flex-col justify-center items-center md:items-start  mt-60 md:mt-10 md:p-8 md:ps-16 gap-5 hover:bg-black/50 rounded-3xl transition-all ease-in-out duration-300">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} ${
              service.borderColor ? `border ${service.borderColor}` : ''
            } p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg`}
          >
            <div className="flex items-center justify-center h-24 w-24 mb-4">
              <Image src={service.icon} alt={service.title} width={96} height={96} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WhatWeServe;
