import React from 'react'
import {useState} from 'react';
 




const WhatWeServe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  

  return (
    <div className='mt-7 w-[220vh]'>
      <span className="text-5xl ml-10  font-bold text-transparent bg-clip-text-image mb-4">
        What we Serve
      </span>
      <p className="ml-10 text-xl">Dive in, level up your skills, and get paid—super easy!</p>
      {/* feature div starts here*/ }
      <div className='flex justify-center items-center flex-wrap md:h-[800px] overflow-hidden '>
    <div className={`w-full  md:grid md:grid-cols-5 md:grid-rows-3 gap-2  flex-col justify-center items-center md:items-start  mt-60 md:mt-10 md:pt-20 md:pb-20 
      md:pl-[150px]  md:ps-16  hover:bg-black/50 rounded-3xl transition-all ease-in-out duration-300 min-h-screen ${isHovered ? 'hover-effect' : ''}`}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Upper Row */}
      {/*secured freelancing*/}
      <div className={`col-span-2  md:h-[250px] md:w-[350px]  rounded-3xl relative  overflow-hidden container ${isHovered ? 'transition-transform translate-x-14 duration-300' : 'transition-transform translate-x-8 duration-300'}`}>
      <div className="top-image absolute inset-0 transition-transform duration-700 ease-in-out">
    <img src="/Property 1=Default.png" alt="Top Image" className="w-full h-full object-cover" />
  </div>
  <div className="bottom-image absolute inset-0 opacity-0 transition-opacity duration-700  ease-in-out">
    <img src="/Property 1=Variant2 (2).svg" alt="Bottom Image" className="w-full h-full object-cover" />
  </div>

  <style jsx>{`
    .container:hover .top-image {
      transform: translateX(-100%);
    }
    .container:hover .bottom-image {
      opacity: 1;
    }
  `}</style>
      </div>
      {/*escrow based payment*/}
      <div className={`col-span-3 w-[680px] ml-[15px] rounded-3xl relative h-[250px] overflow-hidden container ${isHovered ? 'transition-transform -translate-x-14 duration-300' : 'transition-transform -translate-x-8 duration-300'}`}>
      <div className="top-image absolute inset-0 transition-transform duration-700  ease-in-out">
    <img src="/Property 1=Default.svg" alt="Top Image" className="w-full h-full object-cover" />
  </div>
  <div className="bottom-image absolute inset-0 opacity-0 transition-opacity duration-700  ease-in-out">
    <img src="/Property 1=Variant2 (1).svg" alt="Bottom Image" className="w-full h-full object-cover" />
  </div>

  <style jsx>{`
    .container:hover .top-image {
      transform: translateY(-100%);
    }
   .container:hover .bottom-image {
      opacity: 1;
    }
  `}</style>
      </div>

      {/* Lower Row */}
      <div className={`col-span-2 xl:-mt-[10px]  h-[300px] w-[460px] rounded-3xl relative  overflow-hidden container ${isHovered ? 'transition-transform translate-x-20 duration-300' : 'transition-transform translate-x-12 duration-300'}`}>
      <div className="top-image absolute inset-0 transition-transform duration-700 ease-in-out">
    <img src="/insurance_top.svg" alt="Top Image" className="w-full h-full object-cover" />
  </div>
  <div className="bottom-image absolute inset-0 opacity-0 transition-opacity duration-700  ease-in-out ">
    <img src="/insurance.png" alt="Bottom Image" className="w-full h-full object-cover" />
  </div>

  <style jsx>{`
    .container:hover .top-image {
      transform: translateY(100%);
    }
    .container:hover .bottom-image {
     
      opacity: 1;
    }
  `}</style>
      </div>
      {/*ai assistance + roadmap */}
     <div  className=' -mt-[10px] mr-[30px]  flex pl-2 col-span-3  w-[700px] '>
      {/*ai assistance */}
     <div className="col-span-1 h-40 w-40 z-20 rounded-3xl relative  overflow-hidden container">
     <div className="top-image absolute inset-0 transition-transform-opacity duration-700 ease-in-out">
    <img src="/ai_assist_top.svg" alt="Top Image" className="w-full h-full object-cover" />
  </div>
  <div className="bottom-image absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out  ">
    <img src="/ai_assist.svg" alt="Bottom Image" className="w-full h-full object-cover" />
  </div>

  <style jsx>{`
    .container:hover .top-image {
      transform: translateY(100%);
      opacity:0;
    }
    .container:hover .bottom-image {
     
      opacity: 1;
    }
  `}</style>
      </div>
      {/*roadmap */}
      <div className={`col-span-2 -ml-[120px] w-[560px] h-[290px] rounded-3xl relative  overflow-hidden container ${isHovered ? 'transition-transform -translate-x-14 duration-300' : 'transition-transform -translate-x-6 duration-300'}`}>
       
      <div className="top-image absolute inset-0 transition-transform duration-700  ease-in-out ">
    <img src="/roadmap_top.svg" alt="Top Image" className="w-full h-full object-cover opacity-100 ease-in-out transition-all" />
  </div>
  <div className="bottom-image absolute inset-0 opacity-0 transition-opacity duration-700  ease-in-out">
    <img src="/Property 1=Variant2.svg" alt="Bottom Image" className="w-full h-full object-cover ease-in-out transition-all" />
  </div>

  <style jsx>{`
    .container:hover .top-image {
      transform: translateX(100%);
      
      
    }
    .container:hover .bottom-image {
      opacity: 1;
    }
  `}</style>
      </div>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default WhatWeServe;
