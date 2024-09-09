"use client";
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
import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleJoinWaitlist(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "" && emailRegex.test(email)) {
      console.log(sanitizeEmail(email));
      router.push('/signup');
    } else {
      toast.error("Enter a valid email", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }

  return (
    <main className="w-full flex flex-col bg-[#111315] items-center pb-6">
      <Header />
      <div className="bg- w-[100%] h-[60vh] md:h-[130vh] bg-cover bg-[url('/03-Sky%202.jpg')] rounded-3xl">
        <div className="absolute z-10 cursor-default font-bold w-full h-full text-2xl md:text-[2.6rem] flex items-center justify-center py-2">
          <div className=" w-[85%] px-8  gap-20 md:gap-0">
            <Image
              src="/logo_image.svg"
              width={150}
              height={150}
              alt="Kickstart logo"
            />

            <div className="flex text-center md:text-start flex-col md:gap-4 w-full pt-10">
              <p>The all-in-one community</p>
              <div className="flex flex-col md:flex-row w-full place-items-baseline items-center">
                <p className="">platform for</p>
                <WordRotate className="text-center ps-4" words={rotateWords} />
              </div>
            </div>
            <div className="absolute h-11 top-[70vh] md:top-[80%] w-[90%] md:w-[37%] rounded-full bg-white flex flex-row justify-between ps-10">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] justify-start text-black border-transparent focus:border-transparent focus:ring-0 focus:outline-none md:text-[20px] bg-white placeholder-[#7F7F7F] font-medium"
              />
              <button
                onClick={handleJoinWaitlist}
                className="md:py-1 py-2 px-6 text-white cursor-pointer rounded-full bg-gradient-to-r to-[#A100FF] from-[#3E4DD2]
           md:text-[20px] text-[15px] focus:border-transparent focus:ring-0 focus:outline-none font-normal overflow-hidden
            hover:to-[#3E4DD2] hover:from-[#3E4DD2] transition-transform-opacity duration-700 ease-in-out "
              >
                sign up for kickstart
              </button>
            </div>
          </div>
        </div>
      </div>

      <WhatHowWhom />

      <Features />

      <About />
    </main>
  );
}
