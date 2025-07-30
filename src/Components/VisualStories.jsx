"use client";

import React from "react";
import vector from '../assets/Depression/vector_faq.png';


const videos = [
  {
    id: "jideGO38OsU?si=bgO8bIWEUoKK3nlU",
    description: "A severe Depressive episode patient shares her story of recovery",
  },
  {
    id: "GM0miuOrZr0?si=OEDflPHwGuMVssOR",
    description: "An OCD & Depression patient shares her story of recovery",
  },
  {
    id: "kzyFqInTf-4?si=hH6NJgG_OAKOWjh0",
    description: "Top 10 Tools Every Product Designer Should Master",
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
                className="mt-6 px-6 py-2 border border-black rounded-full text-xs text-black hover:bg-gray-100 transition z-10"
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
