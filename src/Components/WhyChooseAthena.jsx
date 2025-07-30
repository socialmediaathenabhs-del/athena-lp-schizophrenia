
import React from 'react';
import backgoundImg from '../assets/Depression/chooseAthena_BG.png';
import vector_bottom from '../assets/Depression/vector_bottom.png';
import vector_top from '../assets/Depression/whychoose_vector_1.png';

const WhyChooseAthena = () => {
  return (
    <div
      className="relative overflow-hidden bg-[#f4f9ff] h-[780px] max-w-full bg-cover"
      style={{
        backgroundImage: `url(${backgoundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white max-w-7xl mx-auto sm:pt-26">
        <img src={vector_top} alt="Gradient divider" className="w-full z-100" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-center">
          WHY CHOOSE ATHENA ?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-12 text-center font-normal max-w-xl">
          Where compassion meets clinical excellence.
        </p>

        {/* Features Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-20 mb-6 sm:mb-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-10">
            {[
              ['01', 'Empathy Driven\nCare'],
              ['02', 'Respectful,\nNon-Triggering\nEnvironment'],
              ['03', 'Among the Highest\nRecovery Success\nRates in India'],
            ].map(([number, text], index) => (
              <div key={index} className="flex items-center gap-6 h-[70px] sm:h-[120px]">
                <span
                  className="text-[30px] sm:text-[120px] font-normal leading-none"
                  style={{ fontFamily: '"Source Serif 4", serif' }}
                >
                  {number}
                </span>
                <div className="relative pl-8 h-full flex items-center">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent rounded"></span>
                  <p className="font-semibold text-[20px] sm:text-[30px] leading-snug whitespace-pre-line text-white">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-10">
            {[
              ['04', 'Discreet Support for\nWorking Professionals'],
              ['05', 'Therapy as a\nCornerstone'],
              ['06', 'Single-Room\nAccommodations'],
            ].map(([number, text], index) => (
              <div key={index} className="flex items-center gap-6 h-[70px] sm:h-[120px]">
                <span
                  className="text-[30px] sm:text-[120px] font-normal leading-none"
                  style={{ fontFamily: '"Source Serif 4", serif' }}
                >
                  {number}
                </span>
                <div className="relative pl-8 h-full flex items-center">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent rounded"></span>
                  <p className="font-semibold text-[20px] sm:text-[30px] leading-snug whitespace-pre-line text-white">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img src={vector_bottom} alt="Gradient divider" className="w-full z-100 sm:pb-22 " />
      </div>
    </div>
  );
};

export default WhyChooseAthena;
