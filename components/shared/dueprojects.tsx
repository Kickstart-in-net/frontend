import React from 'react';

const projects = [
  {
    title: "MathWorks.in",
    dueDate: "28th Sept, 2024",
    image: "/calorieguard 1 (2).svg", // example image
  },
  {
    title: "Web Wizardry",
    dueDate: "07th Nov, 2024",
    image: "/web 1.svg", // example image
  },
];

const DueProjectsSection = () => {
  return (
    <div className=" border-solid border-white border-2 h-fit px-2 rounded-lg w-72 -mt-60 text-white">
      <h2 className="text-xl font-bold mb-4">Due projects:</h2>
      {projects.map((project, index) => (
        <div key={index} className=" p-2 rounded-lg mb-4 ">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-2">Due date: {project.dueDate}</p>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[16rem] object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default DueProjectsSection;
