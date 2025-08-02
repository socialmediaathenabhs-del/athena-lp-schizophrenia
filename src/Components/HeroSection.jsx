import React, { useState } from 'react';
import './Button.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bgImg from '../assets/Depression/homeBG.png';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name must only contain letters and spaces
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces.';
    }

    // Phone number must be 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    }

    // Message should be meaningful
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbx0SfehVJJHmlZRBJ_LU_tO1oQvLK_5f2UdVhRb4a8kbXmloH_jrT2U63Zv_nWTBd6C/exec?sheet=Depression',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      alert('Your form has been submitted!');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div
      className="relative w-full h-[115vh] sm:min-h-[126vh] overflow-hidden bg-[#f4f9ff]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
    >
      {/* Top Buttons */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-22 flex space-x-2 sm:space-x-3 z-20">
        <button className="f-btn flex items-center space-x-1 sm:space-x-2 bg-white text-[#163683] text-[14px] font-bold rounded-full border border-[#163683] px-3 py-2 shadow-md hover:brightness-110 transition">
          <a href="https://wa.me/919289730444" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1">
            <i className="fab fa-whatsapp text-[#25D366] text-xl"></i>
            <span>Get Cost on Whatsapp</span>
          </a>
        </button>
        <button className="f-btn flex items-center space-x-1 bg-white text-[#163683] text-[14px] font-semibold rounded-full border border-[#163683] px-3 py-2 shadow-md hover:brightness-110 transition">
          <a href="tel:+919289730444" className="flex flex-row gap-1">
            <i className="fas fa-phone text-xl text-black"></i>
            <span>+91 92897 30444</span>
          </a>
        </button>
      </div>

      {/* Mobile View */}
      <main className="flex sm:hidden max-w-[590px] w-full p-6 flex-col gap-6 pt-[140px] justify-center text-center items-center">
        <h1 className="text-white text-[26px] leading-tight font-normal">
          Your Mental Health is a Journey not a Destination
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-[350px] bg-[#163683B3] rounded-2xl border-[1px] border-white px-4 py-10 flex flex-col space-y-4 text-white"
          style={{ backdropFilter: 'blur(5px)' }}
        >
          <h2 className="text-center font-semibold text-[20px] leading-tight">
            Schedule Your <br /> Confidential Consultation
          </h2>

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#FFFFFF45] rounded-md px-4 py-4 text-[16px] font-thin w-full placeholder-white placeholder-opacity-70 focus:outline-none border border-white"
            />
            {errors.name && <p className="text-red-200 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Mobile No."
              className="bg-[#FFFFFF45] rounded-md px-4 py-4 text-[16px] font-thin w-full placeholder-white placeholder-opacity-70 focus:outline-none border border-white"
            />
            {errors.phone && <p className="text-red-200 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe Your Case"
              rows="6"
              className="bg-[#FFFFFF45] rounded-md px-4 py-4 text-[16px] font-thin w-full placeholder-white placeholder-opacity-70 resize-none focus:outline-none border border-white"
            />
            {errors.message && <p className="text-red-200 text-sm mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="f-btn bg-white text-[#01184C] font-semibold text-[16px] rounded-full py-2 hover:bg-gray-100 transition">
            Start Your Healing Journey
          </button>
        </form>
      </main>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <form
          onSubmit={handleSubmit}
          className="absolute top-[380px] left-10 -translate-y-1/2 bg-[#163683B3] rounded-2xl border border-white px-6 py-10 w-[400px] flex flex-col space-y-5 text-white"
          style={{ backdropFilter: 'blur(5px)' }}
        >
          <h2 className="text-center font-semibold text-[24px] leading-tight">
            Schedule Your <br /> Confidential Consultation
          </h2>

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#FFFFFF45] rounded-md px-4 py-4 text-[16px] font-thin w-full placeholder-white placeholder-opacity-70 focus:outline-none border border-white"
            />
            {errors.name && <p className="text-red-200 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Mobile No."
              className="bg-[#FFFFFF45] rounded-md px-4 py-4 text-[16px] font-thin w-full placeholder-white placeholder-opacity-70 focus:outline-none border border-white"
            />
            {errors.phone && <p className="text-red-200 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe Your Case"
              rows="6"
              className="bg-[#FFFFFF45] rounded-md px-4 py-4 text-[16px] font-thin w-full placeholder-white placeholder-opacity-70 resize-none focus:outline-none border border-white h-[180px]"
            />
            {errors.message && <p className="text-red-200 text-sm mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="f-btn bg-white text-[#01184C] font-semibold text-[20px] rounded-full py-2 hover:bg-gray-100 transition">
            Start Your Healing Journey
          </button>
        </form>

        {/* Right-side text content */}
        <div className="absolute top-[590px] right-[500px] -translate-y-1/2 max-w-lg text-white text-left px-2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-light leading-tight">
            Your Mental
            <br />
            Health is a Journey
            <br />
            not a Destination
          </h1>
          <div className="mt-2 w-px h-10 bg-gradient-to-b from-transparent to-white"></div>
          <button className="mt-6 px-8 py-1 text-base font-thin border border-white rounded-full hover:bg-white hover:text-[#3a4f8a] transition">
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

