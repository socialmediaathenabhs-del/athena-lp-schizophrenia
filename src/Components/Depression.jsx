
import React from "react";
import vector from '../assets/Depression/vector_depression.png';
import vector_bottom from '../assets/Depression/vector_bottom_depression.png';
import left_leaf from '../assets/Depression/left_leaf.png';
import right_leaf from '../assets/Depression/right_leaf.png';
import leftImg from '../assets/Depression/Schizophrenia_img1.png';





const Depression = () => {
  return (
<div className="sm:overflow-visible overflow-hidden ">
    <div>
        <img
        src={vector} 
        alt="Gradient divider"
        className="hidden sm:block w-full relative top-10"
      />
    </div>
    
    <div
      className="relative min-h-[550px] sm:h-[500px] flex items-center justify-center p-6 bg-white bg-opacity-0  "
    //   style={{
    //     background: `url(${vector}) no-repeat center center / contain`,
    //   }}
    >
        {/* Decorative Gradient Vector*/}
      


      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 rounded-[48px] p-0 md:p-12 z-10">
        <img
          src={leftImg}
          alt="Woman looking down worried on couch with plants in background"
          className="rounded-[48px_48px_48px_48px] sm:rounded-[240px_48px_48px_48px]  object-cover sm:w-[40%] h-[250px] sm:h-[500px]"
          width="700"
          height="700"
        />
        <div className="text-white bg-[#153B8B] rounded-[48px_48px_48px_48px] sm:rounded-[48px_48px_240px_48px] p-10 max-w-6xl w-[100%] sm:w-[70%] sm:h-[500px] flex flex-col justify-center relative pl-16 z-10">
          <span className="absolute left-6 top-10 bottom-10 w-[1.5px] bg-[linear-gradient(to_bottom,transparent_0%,transparent_12%,rgba(255,255,255,0)_12%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_88%,transparent_88%,transparent_100%)] rounded"></span>
          <h1 className="uppercase font-extrabold text-3xl sm:text-5xl mb-6 leading-tight ">
          Schizophrenia
          </h1>
          <p className="text-[18px] leading-relaxed font-thin tracking-wide sm:w-[550px] ">
          Schizophrenia represents a chronic and severe mental illness schizophrenia that can lead to disorganized thinking, paranoia and schizophrenia, and a distorted perception of reality very often. One of the toughest issues of schizophrenia disorder is its aspect that creates confusion between reality and illusion. The disease often starts in late teens or early adulthood, and the actual causes of schizophrenia are still not in complete understanding. However, in some cases, genetic as well as environmental causes can be a factor of schizophrenia causes.
          </p>
        </div>
      </div>


      <img
        src={left_leaf}
        alt="Decorative top left"
        className="hidden sm:block absolute -top-60 left-10 sm:h-[700px] sm:w-[300px]  pointer-events-none select-none z-1"
      />
      <img
        src={right_leaf}
        alt="Decorative bottom right"
        className=" absolute  -bottom-50 right-0 sm:left-[1000px]  sm:h-[500px] sm:w-[300px] pointer-events-none select-none z-1"
      />
      




      <img
        src={vector_bottom} 
        alt="Gradient divider"
        className="w-full absolute top-[180px] sm:top-80 -left-20 z-100"
      />
      
    </div>

    </div>
  );
};

export default Depression;