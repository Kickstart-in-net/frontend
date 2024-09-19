// homepage/studentloggedin/page.tsx
import DueProjectsSection from '@/components/shared/dueprojects';
import ProfileMatches from '@/components/shared/profilematches';
import ProjectShowcase from '@/components/shared/projectshowcase';
import TopProjects from '@/components/shared/TopProjects';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
function StudentLoggedIn() {
  return (
    <div className="h-full bg-[#111315]  p-4">
      <section className="mb-6 mt-20 ">
        <div className='text-2xl w-66 mb-6'>
        <h2 className="text-[2.5rem] font-semibold mb-4">Welcome back,</h2>
        <h1 className='text-[3.5rem] w-auto h-20  flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#7c34fa] to-[#d1104a96] '>Saumyadeep</h1>
        </div>
        <div className="flex items-center mt-10">
      <div className="relative w-[30rem]  max-w-lg">
        <input
          type="text"
          placeholder="Find Works..."
          className="w-full py-2 px-4 h-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <div className='bg-white'>
        <button className="bg-white h-8 mt-2 absolute inset-y-0 right-4 flex items-center pr-3">
        <img src="Vector.svg"></img>
        </button>
        </div>
      </div>
    </div>
    </section>
    <div className='max-w-[200rem] justify-between flex '>
    
    <ProfileMatches/>
    <DueProjectsSection/>
    </div>
    <TopProjects/>
    <ProjectShowcase/>
     
    </div>
  );
}
export default StudentLoggedIn;