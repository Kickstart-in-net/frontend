import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-[rgb(17,19,21)] p-6 text-white font-bold'>
      <div className='flex flex-row justify-center items-center gap-5 pb-10'>
        <Link href="https://www.linkedin.com/company/kickstart-in-net/"><FaLinkedin size={35} /></Link>
        <Link href="https://www.instagram.com/kickstart_in_net/"><FaInstagramSquare size={35} /></Link>
        <Link href="https://x.com/Kickstart_in_"><BsTwitterX size={30} /></Link>
      </div>
      © Kickstart &middot; Privacy Policy &middot; Terms of Service
    </footer>
  )
}

export default Footer