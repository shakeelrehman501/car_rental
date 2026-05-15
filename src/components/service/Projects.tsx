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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
      {/* Car Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
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
        <div className="absolute top-3 right-3 bg-[#FF2E2E] text-white px-3 py-1 rounded-full text-xs">
          {type}
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h3 className="text-xl mb-3 text-[#0B0B0B]">{name}</h3>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-[#6B7280]">Starting from</p>
            <p className="text-2xl text-[#FF2E2E]">
              ${price}
              <span className="text-sm text-[#6B7280]">/day</span>
            </p>
          </div>
        </div>

        <button className="w-full bg-[#FF2E2E] hover:bg-[#e02626] text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg">
          Rent Now
        </button>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50  py-16 lg:py-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Heading
          heading="Featured"
          gradientHeading="Projects"
          paragraph="A showcase of my recent work and side projects"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
