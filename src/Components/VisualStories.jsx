"use client";

import React from "react";
import vector from '../assets/Depression/vector_faq.png';


const videos = [
  {
    id: "6uFAns9HzVk",
    description: "Listen to a mother talk about her son’s journey of schizophrenia recovery at Athena",
  },
  {
    id: "hXlBirmlDnM",
    description: "The Treatment That Finally Made a Difference for My Schizophrenia",
  },
  {
    id: "5zK-kSxEbJ0",
    description: "A paranoid schizophrenia Disorder patient shares her story of recovery",
  },
];

const VisualStories = () => {
  return (
    <div className="bg-white sm:h-[600px] ">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 sm:h-[360px] ">
        <h1 className="text-center text-[#1e3a8a] font-extrabold text-2xl sm:text-[40px] leading-tight">
          Visual Stories of Hope & Healing:
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-16">
          {videos.map((video, index) => (
            <div key={index} className="max-w-xs flex flex-col items-start">
              <div className="w-full aspect-video rounded-xl overflow-hidden z-0">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 sm:text-[14px] text-black text-left w-full">
                {video.description}
              </p>
              {/* <button
                type="button"
                className="mt-6 px-6 py-2 border border-black rounded-full text-xs text-black hover:bg-gray-100 transition"
              >
                Learn More
              </button> */}
              <a
                href="https://www.youtube.com/@AthenaOKASForFemale"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2 border border-black rounded-full text-xs text-black hover:bg-gray-100 transition z-10 hover:bg-gray-100  hover:-translate-y-[5px] transform"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      <img
        src={vector} 
        alt="Gradient divider"
        className="w-full "
      />
    </div>
  );
};

export default VisualStories;
