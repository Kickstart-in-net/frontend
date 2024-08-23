import { what_how_who } from "@/constants";
import Image from "next/image";
import React from "react";

const WhatHowWhom = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center md:items-start mt-60 md:mt-24 md:p-8 md:ps-16 gap-5 hover:bg-black/50 rounded-3xl transition-all ease-in-out duration-300 ">
      {what_how_who.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center bg-gradient-to-r from-[#662C92] to-[#280734] gap-5 rounded-[48px] w-[70%] text-white`}
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={180}
                className="rounded-[48px]"
              />
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-center md:text-start text-[16px] md:text-[24px]">{item.heading}</h1>
                <p className="text-[12px] text-center md:text-start px-6 md:px-0 pb-10 md:text-[16px] ">{item.description}</p>
              </div>
            </div>
          );
        } else if (index === 1) {
          return (
              <div key={index} className="w-full flex flex-col md:flex-row justify-center items-center md:justify-end">
                <div
                  className={`flex flex-col md:flex-row items-center justify-end  bg-gradient-to-r from-[#101D4A] to-[#2645B0] gap-5 rounded-[48px] w-[70%] text-white`}
                >
                   <Image
                    src={item.image}
                    alt={item.heading}
                    width={400}
                    height={200}
                    className="rounded-[48px] md:hidden block"
                  />
                  <div className="flex flex-col gap-5 ps-6 md:w-[42%]">
                    <h1 className="font-bold text-center md:text-end text-[16px] md:text-[24px]">{item.heading}</h1>
                    <p className="text-[12px] text-center md:text-end px-6 md:px-0 pb-10 md:text-[16px] ">{item.description}</p>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.heading}
                    width={400}
                    height={200}
                    className="rounded-[48px] hidden md:block"
                  />
                </div>
              </div>
          );
        }
        else {
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-start bg-gradient-to-r from-[#872C2C] to-[#390C0C] gap-5 rounded-[48px] w-[70%] text-white`}
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={200}
                className="rounded-[48px]"
              />
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-center md:text-start text-[16px] md:text-[24px]">{item.heading}</h1>
                <p className="text-[12px] md:text-[16px] text-center md:text-start px-6 md:px-0 pb-10">{item.description}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default WhatHowWhom;
