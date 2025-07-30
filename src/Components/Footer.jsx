import React from "react";
import { FaInstagram, FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Logo from '../assets/Depression/footer_Logo.png';


const Footer = () => {
  return (
    <footer className="bg-[#14357a] text-white px-16 py-16 sm:px-20 sm:py-20 max-w-8xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 sm:gap-x-14">
        <div className="flex flex-col gap-10">
      <img
      src={Logo}
      alt="Athena OKAS Logo"
      className="w-98 object-contain"
    />

        <div className="max-w-xs text-[13px] leading-relaxed font-normal sm:mt-[10px]">
          Athena OKAS understands that mental health problems need to be treated
          differently in women. We also understand that women need a more open
          setting where they feel safe while discussing their issues. Athena
          OKAS provides such a space and the freedom to women to recover and
          heal at their own pace.
        </div>
        </div>

        <div>
          <h3 className="font-extrabold text-white text-[26px] mb-6">
            Office Information
          </h3>
          <p className="text-[13px] font-normal leading-relaxed mb-4">
            Call Us 24/7 +91 92897 30444
          </p>
          <p className="text-[13px] font-normal leading-relaxed mb-4">
            Work with us info@athenaokas.in
          </p>
          <p className="text-[13px] font-normal leading-relaxed">
            Our Location #446, Sector – 39, Gurugram, Haryana – 122018
          </p>
        </div>

        <div>
          <h3 className="font-extrabold text-white text-[26px] mb-6">
            Treatment Programs
          </h3>
          <ul className="text-[13px] font-normal leading-relaxed space-y-3 max-w-[220px]">
            <li><a href="#">Bipolar Disorder treatment In Delhi NCR</a></li>
            <li><a href="#">Best Mental Health treatment In Delhi NCR</a></li>
            <li><a href="#">Mental Health Treatment In Delhi NCR</a></li>
            <li><a href="#">Treatment for Psychosis</a></li>
            <li><a href="#">Psychosis Treatment In Delhi NCR</a></li>
            <li><a href="#">How to Diagnose Schizophrenia ?</a></li>
            <li><a href="#">Schizophrenia Treatment In Delhi NCR</a></li>
            <li><a href="#">BPAD Treatment</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-white text-[26px] mb-6">
            Treatment Programs at Athena OKAS
          </h3>
          <ul className="text-[13px] font-normal leading-relaxed space-y-3 max-w-[220px]">
            <li><a href="#">Anxiety Treatment</a></li>
            <li><a href="#">Bipolar Disorder Treatment</a></li>
            <li><a href="#">Borderline Personality disorder</a></li>
            <li><a href="#">Depression Treatment</a></li>
            <li><a href="#">Psychosis</a></li>
            <li><a href="#">Schizophrenia Treatment</a></li>
            <li><a href="#">Women Mental Health</a></li>
            <li><a href="#">Psychiatric Emergency Services</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col sm:flex-row sm:justify-start sm:items-center gap-10 sm:gap-30">
        <div className="text-white font-extrabold text-[26px] leading-tight max-w-xs">
          <p>Contact us at</p>
          <p className="mt-1 text-2xl">+91 92897 30444</p>
        </div>

        <div className="text-white font-extrabold text-[26px] leading-tight max-w-lg">
          <p>Our Location</p>
          <p className="mt-1 text-2xl">446, Sector 39, Gurugram, Haryana</p>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-white text-[26px] font-normal mb-2">Follow Us</p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@AthenaOKASForFemale"  target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white text-xl">
               <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-20 text-center text-[14px] text-white font-normal">
        Copyright © 2025 ATHENA OKAS | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
