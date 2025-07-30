import React, { useEffect, useRef } from 'react';

// Import your icons
import patientIcon from '../assets/Depression/patient_icon.png';
import bedIcon from '../assets/Depression/hospitalbed_icon.png';
import staffIcon from '../assets/Depression/staff_icon.png';

const StatsSection = () => {
  const patientsRef = useRef(null);
  const bedsRef = useRef(null);
  const staffRef = useRef(null);

  const animateValue = (ref, start, end, duration, suffix = '') => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      if (ref.current) {
        ref.current.textContent = value.toLocaleString() + suffix;
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    animateValue(patientsRef, 0, 35, 800, ' K+');
    animateValue(bedsRef, 0, 100, 800, '+');
    animateValue(staffRef, 0, 120, 800, '+');
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f4f9ff] pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-center items-center gap-16 sm:gap-30">
        {/* Patients */}
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <img src={patientIcon} alt="Patients" className="w-20 h-20 sm:w-26 sm:h-26 mb-4" />
          <p ref={patientsRef} className="text-[46px] font-extrabold text-[#0a1e4a] leading-none">
            0
          </p>
          <p className="text-[#0a1e4a] text-2xl mt-1">Patient Treated</p>
        </div>

        {/* Beds */}
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <img src={bedIcon} alt="Beds" className="w-20 h-20 sm:w-26 sm:h-26 mb-4" />
          <p ref={bedsRef} className="text-[46px] font-extrabold text-[#0a1e4a] leading-none">
            0
          </p>
          <p className="text-[#0a1e4a] text-2xl mt-1">Beds Available</p>
        </div>

        {/* Staff */}
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <img src={staffIcon} alt="Staff" className="w-20 h-20 sm:w-26 sm:h-26 mb-4" />
          <p ref={staffRef} className="text-[46px] font-extrabold text-[#0a1e4a] leading-none">
            0
          </p>
          <p className="text-[#0a1e4a] text-2xl mt-1">Trained Staff</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
