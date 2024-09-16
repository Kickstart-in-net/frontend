"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

export default function SelectProfile() {
  const router = useRouter();

  // Handle routing based on profile selection
  const handleProfileSelect = (profile: string) => {
    if (profile === "freelancer") {
      router.push("/signup/freelancerinfo"); // Route to the Freelancer page
    } else if (profile === "client") {
      router.push("/signup/clientinfo"); // Route to the Client page
    }
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-screen text-white px-4">
      <h2 className="text-3xl font-semibold mb-14">Select Your Profile:</h2>

      {/* Freelancer Option */}
      <div
        onClick={() => handleProfileSelect("freelancer")}
        className="cursor-pointer p-6 mb-6 w-full max-w-md border rounded-lg hover:bg-rose-950 transition duration-300"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Providing freelance services </h3>
          <img className="rotate-45" src="/Arrow.svg" alt="arrow" />
        </div>
        <p className="text-sm text-gray-400">I'd like to sell my services.</p>
      </div>

      {/* Client Option */}
      <div
        onClick={() => handleProfileSelect("client")}
        className="cursor-pointer p-6 w-full max-w-md border rounded-lg hover:bg-rose-950 transition duration-300"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold inline-block">Buying freelance services
          </h3>
          <img className="rotate-45" src="/Arrow.svg" alt="arrow" />
        </div>
        <p className="text-sm text-gray-400">
          I'm looking for the best services to work with.
        </p>
      </div>
    </div>
  );
}
