import React, { useRef, useEffect, useState } from 'react';
// import ourFacilty_leaf1 from '../assets/ourFacilty_leaf1.png';
// import ourFacilty_leaf2 from '../assets/ourFacilty_leaf2.png';
import img1 from "../assets/Depression/ourFacility_1.png";
import img2 from "../assets/Depression/ourFacility_2.png";
import img3 from "../assets/Depression/ourFacility_3.png";
import img4 from "../assets/Depression/ourFacility_4.png";
import img5 from "../assets/Depression/ourFacility_5.png";




const facilityImages = [
  img1,img2,img3,img4,img5,
];

const OurFacility = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideWidth = 330; // width of image + spacing

  const setupSlider = () => {
    const track = sliderRef.current;
    const children = track.children;

    const firstClone = children[0].cloneNode(true);
    const lastClone = children[children.length - 1].cloneNode(true);

    track.appendChild(firstClone);
    track.insertBefore(lastClone, children[0]);
    track.style.width = `${(facilityImages.length + 2) * slideWidth}px`;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  };

  useEffect(() => {
    setupSlider();
  }, []);

  const moveToSlide = (index) => {
    const track = sliderRef.current;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < facilityImages.length + 1) {
      moveToSlide(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    const track = sliderRef.current;

    if (currentIndex === facilityImages.length + 1) {
      track.style.transition = "none";
      setCurrentIndex(1);
      track.style.transform = `translateX(-${slideWidth}px)`;
    } else if (currentIndex === 0) {
      track.style.transition = "none";
      setCurrentIndex(facilityImages.length);
      track.style.transform = `translateX(-${slideWidth * facilityImages.length}px)`;
    }
  };

  return (
    <div className="bg-white relative sm:min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Decorative images */}
      {/* <img
        src={ourFacilty_leaf1}
        alt="Decorative leaf"
        className="absolute bottom-27 sm:bottom-0 left-0 w-80 sm:w-200 pointer-events-none select-none"
      />
      <img
        src={ourFacilty_leaf2}
        alt="Decorative leaf"
        className="hidden sm:block relative sm:absolute -bottom-30 right-0 w-90 pointer-events-none select-none z-1"
      /> */}

      <h2 className="text-center text-[#1e3a8a] font-extrabold text-3xl sm:text-[40px] leading-tight mb-8">Our Facility</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-2 max-w-5xl w-full z-10">
        <img src={facilityImages[0]} alt="Facility 1" className="w-full h-full object-cover" />
        <img src={facilityImages[1]} alt="Facility 2" className="w-full h-full object-cover" />
        <img src={facilityImages[2]} alt="Facility 3" className="w-full h-full object-cover row-span-2" />
        <img src={facilityImages[3]} alt="Facility 4" className="w-full h-full object-cover" />
        <img src={facilityImages[4]} alt="Facility 5" className="w-full h-full object-cover" />
      </div>

      {/* Mobile Slider */}
      <div
        className="md:hidden relative w-full max-w-md overflow-visible rounded-lg px-[10px]"
        style={{ width: "340px", height: "240px" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
        >
          {facilityImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Facility ${idx + 1}`}
              className="flex-shrink-0 object-cover"
              style={{
                width: "320px",
                height: "240px",
                marginRight: "10px", // Only margin-right for spacing
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-2 shadow-md"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-2 shadow-md"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default OurFacility;

