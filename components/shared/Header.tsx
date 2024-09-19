"use client"
import Image from 'next/image'
import React from 'react'
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
function Header() {
  const route=useRouter();
  return (
    <nav className='bg-gradient-to-tr from-[#191616] to-[#2F2F2F] flex items-center justify-between px-4 p-2 w-full text-white fixed z-50'>
      <Image src='/logo.svg' width={150} height={200} alt='Kickstart logo' />
      <div className='flex w-66 items-center justify-center gap-4'>
        <button className='w-[115px] h-[35px] flex-shrink-0 py-[9px] px-4 rounded-full bg-gradient-to-r from-[#2A86FF] to-[#195099] text-[12px] font-semibold font' onClick={() => { route.push("/signin");
        
      }}>
            Sign In    
        </button>
        <button className=' w-[127.237px] h-[35px] flex-shrink-0  py-[9px] px-4 rounded-full bg-gradient-to-tr to-[#7A278F] from-[#150A35] text-[12px] font-semibold' onClick={() => {
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

