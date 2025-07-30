import React from 'react';
import DrAshishKumarMittal from '../assets/Depression/DrAshishKumarMittal.png';
import DrRahulRai from '../assets/Depression/DrRahulRai.png';
import DrNamitGautam from '../assets/Depression/DrNamitGautam.png';
import DrNamrataKumari from '../assets/Depression/DrNamrataKumari.png';

import left_leaf from '../assets/Depression/vintage-leaf-partners.png';
import right_leaf from '../assets/Depression/leaf_partners_2.png';


const teamMembers = [
  {
    name: 'Dr. Ashish Kumar Mittal',
    image: DrAshishKumarMittal,
    alt: 'Portrait photo of Dr. Ashish Kumar Mittal wearing a black suit and tie, smiling',
    designation: ['(AIIMS - Delhi)', 'Medical Director'],
  },
  {
    name: 'Dr. Rahul Rai',
    image: DrRahulRai,
    alt: 'Portrait photo of Dr. Rahul Rai wearing a suit and tie, arms crossed',
    designation: ['Clinical Director ||', 'Consultant Psychiatrist'],
  },
  {
    name: 'Dr. Namit Gautam',
    image: DrNamitGautam,
    alt: 'Portrait photo of Dr. Namit Gautam wearing a black suit and tie',
    designation: ['Consultant Psychiatrist || ABVIMS', '& DR RML HOSPITAL - New Delhi'],
  },
  {
    name: 'Dr. Namrata Kumari',
    image: DrNamrataKumari,
    alt: 'Portrait photo of Dr. Namrata Kumari wearing a white top, smiling',
    designation: ['Consultant Psychiatrist ||', 'AIIMS - Rishikesh'],
  },
];

const YourHealingPartners = () => {
  return (
    <>
    <section
      className="max-w-full mx-auto px-6 pt-16 sm:pb-20 text-center relative bg-white z-10   overflow-hidden"
    //   style={{
    //     backgroundImage:
    //       "url('https://placehold.co/1200x400?text=Background+Image+Placeholder&font=inter')",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //   }}
    >
      <h1 className="text-[30px] sm:text-[66px] font-extrabold text-[#163683] leading-tight">
        Your Healing Partners
      </h1>
      <p className="mt-2 max-w-full mx-auto sm:text-[24px] font-normal text-black leading-snug">
        A Multidisciplinary Team Of Doctors, Therapists, And Wellness Coaches United By
        <br />
        A Single Mission: To Provide Evidence-Based Care With Unwavering Empathy.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-70 h-70 rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover"
                width="160"
                height="160"
              />
            </div>
            <h2 className="mt-1 text-[#01184C] font-semibold text-[22px] border-b border-[#142E7C] pb-1 w-fit">
              {member.name}
            </h2>
            <p className="mt-1 text-[16px] text-[#142E7C] font-normal leading-tight text-center">
              {member.designation.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>

      <img
     src={left_leaf}
     alt="Decorative top left"
     className="absolute -top-20 left-0 w-[400px] h-[500px] pointer-events-none select-none z-1"
   />
   <img
     src={right_leaf}
     alt="Decorative bottom right"
     className="absolute -bottom-20  -right-10 sm:top-[20px] sm:left-[680px] sm:w-[900px] sm:h-[900px] pointer-events-none select-none z-1 "
   />
    </section>
     

   </>
  );
};

export default YourHealingPartners;
