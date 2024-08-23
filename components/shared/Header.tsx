"use client"
import Image from 'next/image'
import React from 'react'
import { useToast } from '../ui/use-toast';
import toast from 'react-hot-toast';
function Header() {
  return (
    <nav className='bg-gradient-to-tr from-[#2F2F2F] to-[#191616] flex items-center justify-between px-4 p-2 w-full text-white fixed z-50'>
      <Image src='/logo.svg' width={150} height={200} alt='Kickstart logo' />
      <div className='flex items-center justify-center gap-3'>
        <button className='w-fit py-[9px] px-4 rounded-full bg-gradient-to-r from-[#2A86FF] to-[#195099] text-[12px] font-semibold' onClick={() => {
        toast.success('Coming Soon...',
          {
            icon: '🚀',
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },}
        )
      }}>
          Sign In
        </button>
        <button className='md:block hidden w-fit py-[9px] px-4 rounded-full bg-gradient-to-tr to-[#7A278F] from-[#150A35] text-[12px] font-semibold' onClick={() => {
        toast.success('Coming Soon...',
          {
            icon: '🚀',
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },}
        )
      }}>
          Contact Us
        </button>

      </div>
    </nav>  
  )
}

export default Header

