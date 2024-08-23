import React from 'react'
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      title: "Secured Freelancing",
    },
    {
      title: "Escrow payment system",
    },
    {
      title: "AI skill detect from projects",
    },
    {
      title: "AI Roadmaps for begineers",
    },
    {
      title: "E-Hackathons",
    },
  ];
  return (
    <div className="w-full flex flex-col mt-4 px-16 bg-gradient-to-b from-[#000000] to-[#323030]">
      <span className="py-20 flex flex-row gap-2 text-4xl">
        <Image src='/Features.svg' alt="Feature Icon" height={40} width={40} />
        Features
      </span>
      <div className='w-[10%] md:w-full'>
        <ul className="timeline timeline-vertical h-fit text-sm md:text-xl">
          <li className='h-[200px]'>
            <hr className="bg-gradient-to-r from-[#5611E7] to-[#BB0EE6]" />

            <div
              className={`w-[30vh] md:w-fit timeline-end md:timeline-start md:px-20 timeline-box rounded-full p-4 border-none bg-[#1D8F9F]`}
            >
              {features[0].title}
            </div>
            <div className="timeline-middle">
              <FaCircle className="text-[#5611E7]" size={30} />
            </div>
            <hr className="bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />
          </li>

          <li>
            <hr className=" bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />

            <div className="timeline-middle">
              <FaCircle className="text-[#5611E7]" size={30} />
            </div>
            <div
              className={`w-[30vh] md:w-fit timeline-end md:px-20 timeline-box rounded-full p-4 bg-[#927731] border-none `}
            >
              {features[1].title}
            </div>
            <hr className=" bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />
          </li>

          <li className='h-[200px]'>
            <hr className="bg-gradient-to-r from-[#5611E7] to-[#BB0EE6]" />

            <div
              className={`w-[30vh] md:w-fit timeline-end md:timeline-start md:px-20 timeline-box rounded-full p-4 border-none bg-[#146145]`}
            >
              {features[2].title}
            </div>
            <div className="timeline-middle">
              <FaCircle className="text-[#5611E7]" size={30} />
            </div>
            <hr className=" bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />
          </li>

          <li>
            <hr className=" bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />

            <div className="timeline-middle">
              <FaCircle className="text-[#5611E7]" size={30} />
            </div>
            <div
              className={`w-[30vh] md:w-fit timeline-end md:px-20 timeline-box rounded-full p-4 bg-[#611643] border-none `}
            >
              {features[3].title}
            </div>
            <hr className=" bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />
          </li>

          <li className='h-[200px]'>
            <hr className="bg-gradient-to-r from-[#5611E7] to-[#BB0EE6]" />

            <div
              className={`w-[30vh] md:w-fit timeline-end md:timeline-start md:px-20 timeline-box rounded-full p-4 border-none bg-[#5C2D12]`}
            >
              {features[4].title}
            </div>
            <div className="timeline-middle">
              <FaCircle className="text-[#5611E7]" size={30} />
            </div>
            <hr className=" bg-gradient-to-r from-[#5611E7] to-[#BB0EE6] " />
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Features