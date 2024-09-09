import { what_how_who } from "@/constants";
import Image from "next/image";
import React from "react";
import { useState } from "react";


const WhatHowWhom = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleHover = () => {
      setIsExpanded(true);
  };
  


  return (
    <div 
      className={`w-[220vh] horizonbounce flex-col mt-60 md:mt-24 md:p-8 md:ps-16 hover:bg-black/50 rounded-3xl transition-all ease-in-out duration-300 ${isExpanded ? '' : 'md:pl-[5%] flex justify-center items-center'} `} 
      onMouseOver={handleHover}
    >
      
      {what_how_who.map((item, index) => {
         
        if (index === 0) {
          return (
            <div
              key={index}
              className={` flex mb-5 items-center bg-gradient-to-r  gap-5 rounded-[48px] transition-all duration-1000 ${isExpanded ? ` w-[60%] from-[#5f2988] to-[#250531]  text-white mlTransition md:ml-[2%]` : 'md:w-[50%] md:ml-[30%] '}`}
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={180}
                className="rounded-[48px]"
              />
               
              <div className={` flex  flex-col gap-5 ${isExpanded ? 'transition-all  duration-1000  horizonbounce-l' : ' hidden '}`}>
                <h1 className={`font-bold text-center md:text-start text-[16px] md:text-[24px] `}>{item.heading}</h1>
                <p className={`text-[12px] text-center md:text-start px-6 md:px-0 pb-10 md:text-[16px]`}>{item.description}</p>
              </div>
           
            </div>
          );
        } else if (index === 1) {
          return (
              <div key={index} className={`flex mb-5   items-center bg-gradient-to-r  gap-5 rounded-[48px] transition-all duration-1000 ${isExpanded ? ' w-[60%] bg-gradient-to-r from-[#101D4A] to-[#2645B0]  flex flex-col  md:flex-row justify-center items-center md:justify-end mlTransition-r md:ml-[36%] ' : 'md:w-[50%] md:ml-[30%]'}`}>
                
                  <div  className={` transition-all horizonbounce-l duration-1000 ${isExpanded ? 'flex flex-col gap-5 ps-6 md:w-[42%] opacity-100' : 'hidden'} `}>
                    <h1 className="font-bold text-center md:text-end text-[16px] md:text-[24px]">{item.heading}</h1>
                    <p className="text-[12px] text-center md:text-end px-6 md:px-0 pb-10 md:text-[16px] ">{item.description}</p>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.heading}
                    width={400}
                    height={200}
                    className="rounded-[48px] md:block"
                  />
                
              </div>
          );
        }
        else {
          return (
            <div
              key={index}
              className={` flex flex-col  md:flex-row items-center justify-start bg-gradient-to-r gap-5 rounded-[48px] text-white transition-all duration-1000 ${isExpanded ? ' w-[60%] from-[#872C2C] to-[#390C0C] mlTransition ml-[2%]' : ' w-[50%] ml-[30%]'}`}
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={200}
                className="rounded-[48px]"
              />
              <div className={`transition-all horizonbounce-l duration-1000 ${isExpanded ? 'flex flex-col gap-5 opacity-100' : 'hidden'} `}>
                <h1 className="font-bold text-center md:text-start text-[16px] md:text-[24px]">{item.heading}</h1>
                <p className="text-[12px] md:text-[16px] text-center md:text-start px-6 md:px-0 pb-10">{item.description}</p>
              </div>
            </div>
          );
        }
      }
      
      )}
      <style jsx>
              {`
              .horizonbounce:hover .horizonbounce-l {
          animation: bounce-horizontal 0.5s ease-in-out 1;
        }
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
          .mlTransition{
          animation:mlTrans 2s ease-in-out 1;
           }
          @keyframes mlTrans {
                  0% {
                    margin-left: 30%;
                  }
                  50% {
                    margin-left: 0%;
                  }
                 
                  100% {
                    margin-left: 2%;
                  }
                }
          .mlTransition-r{
          animation:mlTransr 2s ease-in-out 1;
           }
          @keyframes mlTransr {
                  0% {
                    margin-right: 24%;
                  }
                  50% {
                    margin-left: 40%;
                  }
                 
                  100% {
                    margin-left: 36%;
                  }
                }
        
        
        
  `}
              </style>
    </div>
  );
}


export default WhatHowWhom;
