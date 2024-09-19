// homepage/studentloggedin/layout.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaUser, FaSignOutAlt, FaGithub,FaBell, FaEnvelope, FaPlus, FaBriefcase, FaUserCircle } from "react-icons/fa";
import Footer from "@/components/shared/Footer";

 function HomeLayout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Function to handle clicking outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOptionClick = (option: string) => {
    // Example of redirecting based on the option clicked
    if (option === "profile") {
      window.location.href = "/profile"; // Change this to your profile URL
    } else if (option === "signout") {
      window.location.href = "/signout"; // Change this to your signout URL
    } else if (option === "github") {
      window.open("https://github.com/your-profile", "_blank"); // Change this to your GitHub URL
    }
    setDropdownOpen(false); // Close dropdown after selection
  };
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  // Function to handle clicking outside the notifications and profile dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) &&
        (profileRef.current && !profileRef.current.contains(event.target as Node))
      ) {
        setNotificationsOpen(false);
        setProfileOpen(false);
      }
    }
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationsRef, profileRef]);

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };


  return (
    <div className="h-full text-white bg-[#111315]">
      <header className="p-4 bg-gradient-to-tr from-[#191616] to-[#2F2F2F]">
        <nav className="flex h-8 items-center justify-between">
          {/* Dropdown Menu */}
          <div className="flex h-8 items-center ">
          <div ref={dropdownRef} className="relative ">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-2.5 mr-3 w-10 h-10 rounded-xl border-2  border-white text-white"
            >
              <FaBars />
            </button>

            {/* Dropdown Options */}
            {dropdownOpen && (
              <div className="absolute mt-7 bg-gradient-to-tr from-[#191616] to-[#2F2F2F] rounded-2xl shadow-lg py-2 w-48 z-50">
                <button
                  className=" w-full text-left px-4 py-2 text-white hover:bg-gray-600 flex items-center"
                  onClick={() => handleOptionClick("profile")}
                >
                  <FaUser className="mr-2" /> Profile
                </button>
                <button
                  className=" w-full text-left px-4 py-2 text-white hover:bg-gray-600 flex items-center"
                  onClick={() => handleOptionClick("signout")}
                >
                  <FaSignOutAlt className="mr-2" /> Sign Out
                </button>
                <button
                  className=" w-full text-left px-4 py-2 text-white hover:bg-gray-600 flex items-center"
                  onClick={() => handleOptionClick("github")}
                >
                  <FaGithub className="mr-2" /> Link GitHub
                </button>
              </div>
            )}
          </div>

          {/* Logo */}
          <Image src="/logo.svg" width={150} height={350} alt="Kickstart logo" />
          </div>
          <div className="flex mr-4">
          {/* Notifications Dropdown */}
          <div ref={notificationsRef} className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="px-2.5 mx-1 w-10 h-10  rounded-xl border-2 border-white text-white"
            >
              <FaBell />
            </button>
            {notificationsOpen && (
              <div className=" fixed mt-7 -ml-[22rem] bg-gradient-to-tr from-[#191616] to-[#2F2F2F] rounded-2xl shadow-lg py-2 w-96 z-50">
                <h1 className="px-4 w-9 h-14 text-xl text-pretty py-2 font-bold text-white">Notifications</h1>
                <div className="max-h-60 overflow-y-auto">
                  <p className="px-4 py-2 text-white hover:bg-gray-600">User1 sent you a message</p>
                  <p className="px-4 py-2 text-white hover:bg-gray-600">User2 commented on your post</p>
                  {/* Add more notifications here */}
                </div>
              </div>
            )}
          </div>

          

          
            {/* Message Box Button */}
            <button
              onClick={() => handleRedirect("/messages")}
              className="px-2.5 mx-1 w-10 h-10  rounded-xl border-2 border-white text-white"
            >
              <FaEnvelope />
            </button>

            {/* Add New Project Button */}
            <button
              onClick={() => handleRedirect("/add-project")}
              className="px-2.5 mx-1 w-10 h-10  rounded-xl border-2 border-white text-white"
            >
              <FaPlus />
            </button>

            {/* Workspace Button */}
            <button
              onClick={() => handleRedirect("/workspace")}
              className="px-2.5 mx-1 w-10 h-10  rounded-xl border-2 border-white text-white"
            >
              <FaBriefcase />
            </button>
            <div className="w-0.5 bg-white h-10 mt-0.5 mx-3"></div>
            {/* Profile Picture Button */}
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className=" w-10 h-10 bg-gray-700 rounded-full border-2 border-white text-white flex items-center justify-center"
              >
                <img src="/profile-pic_SB 2.svg"></img>
              </button>
              {profileOpen && (
                <div className="absolute mt-7 -ml-20 bg-gradient-to-tr from-[#191616] to-[#2F2F2F] rounded-2xl shadow-lg py-2 w-30 ">
                  <button
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => handleRedirect("/profile")}
                  >
                    Profile
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => handleRedirect("/signout")}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          

          </div>
        </nav>
      </header>

      <main lang="en">
        <div className="w-full h-full px-10">{children}</div>
      
      </main>
     
       <Footer />
      
      
     
    </div>
  );
}
export default HomeLayout;