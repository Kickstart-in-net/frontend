import React from "react";
//Previously imported modules are commented
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import Link from 'next/link';
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col justify-between">
     

      {/* Copyright info */}
      <div className="bg-[#111315] flex items-center pb-2 text-lg  text-white">
        <h1 className="font-bold pl-7">&copy; Copyright 2024 Kickstart Inc.</h1>
        <p className="ml-4">All rights reserved.</p>
        <ul className="pl-7 list-disc flex space-x-7 cursor-pointer underline underline-offset-4">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
