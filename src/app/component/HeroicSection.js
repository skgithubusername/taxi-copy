'use client';
import React, { useState } from 'react';

const HeroicSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
    try {
      const response = await fetch('https://dxnf5codq3.execute-api.ap-south-1.amazonaws.com/prod/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful submission
        alert('Your message has been sent!');
        setFormData({
          name: '',
          contact: '',
          service: '',
          message: '',
        });
      } else {
        // Handle errors
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div className="relative py-16">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/video/001.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-0"></div>

      {/* Content Container */}
      <div className="relative z-10 mt-10 flex justify-end items-center h-full w-10/12 mx-auto">
        <div className="bg-secondary p-8 text-primary shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 ">Get in Touch</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border bg-secondary text-primary border-primary placeholder-[#fa6cb4]"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Contact Field */}
            <div className="mb-4">
              <label className="block text-primary mb-2" htmlFor="contact">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                className="w-full p-2 border bg-secondary text-primary border-primary placeholder-[#fa6cb4]"
                placeholder="Your Contact Information"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            {/* Service Selection */}
            <div className="mb-4">
              <label className="block text-primary mb-2" htmlFor="service">
                Looking for Service
              </label>
              <select
                id="service"
                className="w-full p-2 border bg-secondary text-primary border-primary placeholder-[#fa6cb4]"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select a Service
                </option>
                <option value="rental-service">Rental Service</option>
                <option value="pick-drop">Pick & Drop</option>
                <option value="tourism">Tourism</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-primary mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border bg-secondary text-primary border-primary placeholder-[#fa6cb4]"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-black py-4 hover:bg-[#fa6cb4] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroicSection;
