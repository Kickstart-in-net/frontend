"use client"
import WordRotate from "@/components/magicui/word-rotate";
import Features from "@/components/shared/Features";
import Header from "@/components/shared/Header";
import WhatHowWhom from "@/components/shared/WhatHowWhom";
import { rotateWords } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sanitizeEmail } from "@/lib/utils";
import toast from "react-hot-toast";
import { Contact } from "lucide-react";
export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleJoinWaitlist(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "" && emailRegex.test(email)) {
      console.log(sanitizeEmail(email));
      router.push(`/waitlist/${sanitizeEmail(email)}`);
    } else {
      toast.error('Enter a valid email',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
  }

  return (
    <main className="w-full flex flex-col bg-[#111315] items-center pb-6">
      <Header />
      <div className="w-[96%] h-[60vh] md:h-[80vh]">

        <div className="relative mt-16 overflow-hidden h-[105%] w-full rounded-3xl">
          <div className="absolute top-10 left-5 bg-[#0011FF] filter blur-[12rem] h-80 w-80 animate-pulse "></div>
          <div className="absolute top-60 left-[20%] bg-[#53217B] filter blur-[10rem] h-80 w-80 animate-pulse "></div>
          <div className="absolute top-10 left-[55%] bg-[#DE0034] filter blur-[10rem] h-[100%] w-40 animate-pulse "></div>
          <div className="absolute top-10 left-[80%] bg-[#FF8C5B] filter blur-[12rem] h-80 w-80 animate-pulse "></div>

          <div className="absolute z-10 cursor-default font-bold w-full h-full text-2xl md:text-[2.6rem] flex items-center justify-center">
            <div className="w-[90%] flex flex-col md:flex-row justify-center items-center gap-20 md:gap-0">
              <div className="flex text-center md:text-start flex-col md:gap-4 w-full pt-10">
                <p>The all-in-one community</p>
                <div className="flex flex-col md:flex-row w-full place-items-baseline items-center">
                  <p className="">platform for</p>
                  <WordRotate
                    className="text-center ps-4"
                    words={rotateWords}
                  />
                </div>
              </div>
              <Image
                src="/logo_image.svg"
                width={200}
                height={200}
                alt="Kickstart logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[70vh] md:top-[88%] border-8 border-[#111315] w-[90%] md:w-[40%] rounded-full bg-white flex flex-row justify-between ps-10">
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className="w-[50%] justify-start text-black border-transparent focus:border-transparent focus:ring-0 focus:outline-none md:text-[20px] bg-white placeholder-[#7F7F7F]"
        />
        <button
          onClick={handleJoinWaitlist}
          className="md:py-3 py-4 px-6 text-white cursor-pointer rounded-full bg-gradient-to-r to-[#DC3838] from-[#3E4DD2] md:text-[16px] text-[12px] focus:border-transparent focus:ring-0 focus:outline-none font-semibold">
          Join the Waitlist
        </button>
      </div>


      <WhatHowWhom />

      <Features />

    </main>
  );
}
