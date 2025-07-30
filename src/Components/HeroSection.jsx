
import React from 'react';
import './Button.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import bgImg from '../assets/Depression/homeBG.png';

const HeroSection = () => {
  return (
    <div className=" relative w-full h-[105vh] sm:min-h-[126vh] overflow-hidden bg-[#f4f9ff] "
    
    style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
      >
      {/* <img
        src={bgImg}
        alt="Doctor and patient having a consultation in a medical office"
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center brightness-50"
      /> */}

      {/* Top Buttons */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-22 flex space-x-2 sm:space-x-3 z-20">
        <button className=" f-btn flex items-center space-x-1 sm:space-x-2 bg-white text-[#163683] text-[14px] sm:text-[14px] font-bold rounded-full border border-[#163683] px-3 sm:px-4 py-2 sm:py-2 shadow-md hover:brightness-110 transition">
        <a href="https://wa.me/919289730444" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1">
          <i className="fab fa-whatsapp text-[#25D366] text-xl sm:text-2xl "></i>
          <span className=''>Get Cost on Whatsapp</span>
        </a>
        </button>
        <button className="f-btn flex items-center space-x-1 sm:space-x-2 bg-white text-[#163683] text-[14px] sm:text-[14px] font-semibold rounded-full border border-[#163683] px-3 sm:px-4 py-2 sm:py-2 shadow-md hover:brightness-110 transition">
        <a href="tel:+919289730444" className="flex flex-row gap-1">
          <i className="fas fa-phone text-xl text-black sm:text-2xl"></i>
          <span>+91 92897 30444</span>
          </a>
        </button>
      </div>


      {/* Mobile View Only  */}
      <main className="flex sm:hidden max-w-[590px] w-full rounded-3xl p-6 md:p-8 flex flex-col gap-6  pt-[140px] justify-center text-center items-center rounded-[20px_100px_20px_20px]"
        style={{ fontFeatureSettings: "'liga' 0" }}
      >
        <h1 className="text-white text-[26px] leading-tight font-normal">
        Your Mental Health is a Journey not a Destination
        </h1>
        {/* <button className=" w-[180px] px-4 sm:px-8 py-2 text-base sm:text-base font-thin border border-black rounded-full hover:bg-white hover:text-[#3a4f8a] transition">
          Start your journey
        </button> */}

        <div
        className=" w-[350px] bg-[#163683B3] rounded-2xl border-[1px] border-white px-4 sm:px-6 py-10 sm:py-10 w-64  flex flex-col space-y-7 sm:space-y-8 text-white"
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <h2 className="text-center font-semibold text-[20px] leading-tight">
          Schedule Your
          <br />
          Confidential Consultation
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#FFFFFF45] rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 focus:outline-none border-[0.4px] border-white"
        />
        <input
          type="text"
          placeholder="Your Mobile No."
          className="bg-[#FFFFFF45]  rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 focus:outline-none border-[0.4px] border-white"
        />
        <textarea
          placeholder="Describe Your Case"
          rows="6"
          className="bg-[#FFFFFF45] rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 resize-none focus:outline-none border-[0.4px] border-white h-[100px] sm:h-[180px]"
        />
        <button className="f-btn bg-white text-[#01184C] font-semibold text-[16px] sm:text-[20px] rounded-full py-2 sm:py-2 hover:bg-gray-100 transition">
          Start Your Healing Journey
        </button>
      </div>
      </main>

      {/* Left Form */}
      <div className='sm:block hidden'>
      <div
        className="absolute top-[200px] sm:top-[380px] left-16 sm:left-10 -translate-y-1/2 bg-[#163683B3] rounded-2xl border-[1px] border-white px-4 sm:px-6 py-4 sm:py-10 w-64 sm:w-[400px] flex flex-col space-y-3 sm:space-y-8 text-white sm:h-[610px]"
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <h2 className="text-center font-semibold text-xs sm:text-[24px] leading-tight">
          Schedule Your
          <br />
          Confidential Consultation
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#FFFFFF45] rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 focus:outline-none border-[0.4px] border-white"
        />
        <input
          type="text"
          placeholder="Your Mobile No."
          className="bg-[#FFFFFF45]  rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 focus:outline-none border-[0.4px] border-white"
        />
        <textarea
          placeholder="Describe Your Case"
          rows="6"
          className="bg-[#FFFFFF45] rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 resize-none focus:outline-none border-[0.4px] border-white h-[50px] sm:h-[180px]"
        />
        <button className="f-btn bg-white text-[#01184C] font-semibold text-xs sm:text-[20px] rounded-full py-1 sm:py-2 hover:bg-gray-100 transition">
          Start Your Healing Journey
        </button>
      </div>

      {/* Right Text */}
      <div className="absolute top-[500px] sm:top-[590px] right-20 sm:right-[500px] -translate-y-1/2 max-w-xs sm:max-w-lg text-white text-center px-2 sm:px-0">
        
        <h1 className="relative text-2xl sm:text-5xl  font-light leading-tight max-w-[800px] mx-auto text-left">
          Your Mental
          <br />
          Health is a Journey
          <br />
          not a Destination
        </h1>
        <div className="relative  left-[100px] sm:left-[150px]  block w-px h-10 bg-gradient-to-b from-transparent to-white"></div>
        <button className="relative  sm:right-12 mt-4 sm:mt-6 px-4 sm:px-8 py-1 text-xs sm:text-base font-thin border border-white rounded-full hover:bg-white hover:text-[#3a4f8a] transition">
          Start your journey
        </button>
      </div>


      </div>


    </div>
  );
};

export default HeroSection;
