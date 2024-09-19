// components/ProfileMatches.js
import React from "react";

const ProfileMatches = () => {
  const projects = [
    { name: 'Calorie Guard', imageUrl: "/calorieguard 1.svg" , desc:'Calorie Guard to track down the calories of your intake to provide a healthier life we all want!',skills:'Java/Kotlin, Android Studio, XML',partner:'Aurora',businesslogo:'/business_logo.svg'},
    { name: 'Passcode Locker', imageUrl: "/passcode locker 1.svg" , desc:'Passcode Locker is an app used to keep your private details safe and secure!',skills:'Java/Kotlin, Android Studio, XML, Data Encryption, OAuth2', partner:'EnderMeet',businesslogo:'/Ellipse 11.svg'}
    
  ];
    return (
      <div className="max-w-4xl  py-8 px-4">
        <h2 className="text-white text-xl font-bold mb-6">Works matching your Profile</h2>
  
        {/* Cards */}
        {projects.map((project) =>(
        <div className="flex w-[58rem] h-[14rem] bg-[#242222] rounded-xl  mb-6">
        <div className=" w-[18rem] mt-4 ml-3 h-48 rounded-xl overflow-hidden bg-gradient-to-tr from-[#A08211] to-[#EFBF04]">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-40 object-cover "
          /> 
          <div className="pt-1 text-center text-white font-semibold">
          {project.name}
              </div>
          </div>                   
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div className="w-[38rem]">
              
              <p className="text-white text-2xl font-bold mb-2">
                {project.desc}
              </p>
              <p className="bg-black text-center w-44 h-6 flex items-center justify-center rounded-xl mb-3 text-sm ">Budget: Rs 3000 - 5000</p>
              <p className="text-white text-sm">
                Skills Requirement: <span className="block w-80 text-ellipsis text-white text-lg">{project.skills}</span>
                
              </p>
              <div className="flex -mt-10 mr-7 items-center justify-end">
              <img
                className="w-10 h-10 mr-4 rounded-full"
                src={project.businesslogo}
                alt={project.partner}
              />
              <span className="text-white font-semibold">{project.partner}</span>
            </div>
            </div>
           
          </div>
        </div>
        ))}
      </div>
    );
  };
  
  export default ProfileMatches;
  