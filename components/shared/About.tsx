import React from "react";
import Image from "next/image";

const About = () => {
  return (
    //     <div className="bg-gray-900 text-white py-12">
    //     <div className="max-w-4xl mx-auto px-4 text-center">
    //         <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
    //         Smart Contracts
    //         </h2>
    //         <p className="text-lg mt-2 text-blue-400">For Secure and Reliable Freelancing</p>
    //         <div className="bg-gray-800 rounded-xl p-6 mt-8 shadow-lg flex flex-col md:flex-row items-center">
    //         {/* <!-- Icon --> */}
    //         <div className="text-purple-500">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-24 h-24">
    //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 3.75v3.188a6.002 6.002 0 013.5 0V3.75m6.75 0A2.25 2.25 0 0017.75 1.5H6.25a2.25 2.25 0 00-2.25 2.25v15A2.25 2.25 0 006.25 21h11.5a2.25 2.25 0 002.25-2.25v-15zM7.5 8.25h9M7.5 12h9m-4.5 3.75h4.5"/>
    //             </svg>
    //         </div>
    //         {/* <!-- Content --> */}
    //         <div className="mt-6 md:mt-0 md:ml-6 text-left">
    //             <p className="text-xl leading-relaxed">
    //             At Kickstart, we ensure that every project is backed by a smart contract, where the terms and conditions between freelancers and clients are securely stored, verified, and enforced. This technology guarantees that both parties are protected, ensuring that work is completed as agreed upon with minimal errors. By automating the contract process, we create a transparent and secure environment where you can focus on what truly matters—delivering quality work and achieving success together.
    //             </p>
    //         </div>
    //         </div>
    //     </div>
    // </div>

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full flex flex-col">
          <div className="#">
            <span className="font-roboto text-5xl  mt-10 font-bold text-transparent bg-clip-text-image mb-4">
              Smart Contracts
            </span>
          </div>

          <h1 className="font-roboto text-2xl text-white font-extralight">
            For Secure and Reliable Freelancing
          </h1>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center bg-zinc-950 rounded-3xl ml-4 mr-4 my-4">
        {/* Text Section */}
        <div className="lg:text-3xl sm:text-sm  text-white w-2/3 mb-8 mx-8 px-6">
          At Kickstart, we ensure that every project is backed by a smart
          contract, where the terms and conditions between freelancers and
          clients are securely stored, verified, and enforced. This technology
          guarantees that both parties are protected, ensuring that work is
          completed as agreed upon with minimal errors. By automating the
          contract process, we create a transparent and secure environment where
          you can focus on what truly matters delivering quality work and
          achieving success together.
        </div>
        {/* Image Section */}
        <div className="w-1/3 ">
          <Image
            className="object-cover rounded-lg glow"
            alt="hero"
            src="/smart_contract_img.svg"
            width={545}
            height={545}
          />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-2 md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full flex flex-col">
          <div className="#">
            <span className="font-roboto text-5xl  mt-10 font-bold text-transparent bg-clip-text-image mb-4">
              Join the Future of Freelancing
            </span>
          </div>

          <h1 className="font-roboto text-2xl text-white font-extralight">
            Together, We Build Success
          </h1>
        </div>
      </div>
      <div className="textWithBlurredBg ">
        {/* Regular img tag for direct control */}
        <img className="px-5" src="/world_map.svg" alt="Diwali" />
        <p className="tracking-wide leading-normal">
          We're committed to empowering freelancers and clients with the tools
          they need to succeed. Our platform blends advanced technology with
          user-friendly features to create a secure, efficient, and rewarding
          experience. Whether you're here to showcase your skills, find top
          talent, or collaborate on groundbreaking projects, Kickstart is your
          trusted partner in making it happen. Join our community today and take
          the first step toward a future filled with opportunities, growth, and
          success.
        </p>
      </div>
    </section>
  );
};

export default About;
