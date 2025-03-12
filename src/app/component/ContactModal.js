import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
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
        onClose(); // Close the modal after submission
      } else {
        // Handle errors
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-secondary p-8 text-primary shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border bg-secondary text-primary border-primary placeholder-yellow-800"
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
              className="w-full p-2 border bg-secondary text-primary border-primary placeholder-yellow-800"
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
              className="w-full p-2 border bg-secondary text-primary border-primary placeholder-yellow-800"
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
              className="w-full p-2 border bg-secondary text-primary border-primary placeholder-yellow-800"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-black py-4 hover:bg-yellow-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-primary text-2xl hover:text-yellow-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
