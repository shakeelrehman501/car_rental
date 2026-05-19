"use client";

import { projectsCardData, projectsCardType } from "@/lib/data/constant";
import Heading from "../myComponents/Heading";


function ProjectCard({
  name,
  image,
  price,
  type
}: projectsCardType) {
  return (
    <div className="min-w-83 bg-white rounded-lg overflow-hidden  shadow-md hover:shadow-2xl transition-all duration-300  hover:-translate-y-2 group ease-in-out">
      {/* Car Image */}
      <div className="relative overflow-hidden h-80 bg-gradient-to-br from-gray-100 to-gray-200">
        {/* {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#FF2E2E]/30 border-t-[#FF2E2E] rounded-full animate-spin"></div>
          </div>
        )} */}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 
          }`}
          loading="lazy"
        />
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h3 className="mb-3 text-gray-800 font-poppins font-bold text-[25px] group-hover:text-primary transition-all duration-300 ease-in-out">{name}</h3>

        <div className="flex items-center justify-between mb-4">
          
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
            
        </div>
        
        <div className="flex items-center justify-between">
        
          <h1 className="text-[22px] text-gray-700  font-poppins font-semibold group-hover:text-primary transition-all duration-300 ease-in-out">PKR 50,000/day</h1>
        
        <button className="px-3 py-2 font-semibold bg-[#FF2E2E] hover:bg-[#e02626] text-white  rounded-md transition-all duration-300 hover:shadow-lg cursor-pointer">
          Rent Now
        </button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100  py-16 lg:py-20 transition-colors w-full"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Heading
          heading="Most Popular"
          gradientHeading="Cars"
          paragraph="A showcase of my recent work and side projects"
        />

        {/* Projects Grid */}
        <div className="w-full max-w-350 min-w-66 mx-auto grid md:grid-cols-2 xl:grid-cols-3  gap-2 lg:gap-4 ">
          {projectsCardData.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
