'use client';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactModal from './ContactModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        // <footer className="bg-secondary text-white">
        //     <div className="container mx-auto px-6 py-16">
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        //             {/* Company Name */}
        //             <div>
        //                 <div className='mb-6'>
        //                     <h2 className="text-lg font-bold">COMPANY NAME</h2>
        //                     <div className="w-24 h-1 bg-yellow-600 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        //                 </div>
        //                 <p className="mb-4 font-medium text-2xl"> Xploroo Taxi Service Himachal</p>
        //                 <div className="flex space-x-4">
        //                     <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-black hover:text-white hover:border-primary font-semibold transition-colors duration-300 ease-in-out">
        //                         <a href="tel:+918091595344" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
        //                             CALL NOW
        //                         </a>
        //                     </button>
        //                     <a
        //                         href="https://wa.me/918091595344"
        //                         target="_blank"
        //                         rel="noopener noreferrer"
        //                         className="bg-green-500 text-white ps-2.5 pr-0.5 rounded-full border-2 border-green-500 hover:bg-white hover:text-green-500 font-semibold transition-colors duration-300 ease-in-out flex items-center"
        //                     >
        //                         <FaWhatsapp className="mr-2" size={20} /> {/* WhatsApp Icon */}
        //                     </a>
        //                 </div>
        //             </div>

        //             {/* Links */}
        //             <div>
        //                 <div className='mb-6'>
        //                     <h2 className="text-lg font-bold">LINKS</h2>
        //                     <div className="w-24 h-1 bg-yellow-600 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        //                 </div>
        //                 <ul>
        //                     <li className="mb-2">
        //                         <a href="#home" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Home</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="#about" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="#services" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Services</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="#cars" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Cars</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="#activities" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Activities</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="#places" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Places</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="#rentals" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Rentals</a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a onClick={openModal} className="hover:text-gray-300 transition-colors duration-300 ease-in-out cursor-pointer">Contact Us</a>
        //                     </li>
        //                 </ul>
        //             </div>

        //             {/* Contact Us */}
        //             <div>
        //                 <div className='mb-6'>
        //                     <h2 className="text-lg font-bold">CONTACT US</h2>
        //                     <div className="w-24 h-1 bg-yellow-600 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        //                 </div>
        //                 <ul>
        //                     <li className="mb-2">
        //                         <a href="mailto:xploroo5@gmail.com" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
        //                             xploroo5@gmail.com
        //                         </a>
        //                     </li>
        //                     <li className="mb-2">
        //                         <a href="tel:+918091595344" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
        //                             +91 8091595344
        //                         </a>
        //                     </li>
        //                     {/* <li className="mb-2">
        //                         <a href="tel:+918150805883" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
        //                             +91 8150805883
        //                         </a>
        //                     </li> */}
        //                 </ul>
        //             </div>

        //             {/* Google Map */}
        //             <div>
        //                 <div className='mb-6'>
        //                     <h2 className="text-lg font-bold">LOCATION</h2>
        //                     <div className="w-24 h-1 bg-yellow-600 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        //                 </div>
        //                 <div className="bg-white h-40 w-full rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        //                     <iframe
        //                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2557763254387!2d74.01242081482382!3d15.508789489231473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdd84d8a5bf1b%3A0x2d2d2b184a3e4c6!2sHimachal!5e0!3m2!1sen!2sin!4v1693665881639!5m2!1sen!2sin"
        //                         width="100%"
        //                         height="100%"
        //                         style={{ border: 0 }}
        //                         allowFullScreen=""
        //                         loading="lazy"
        //                         referrerPolicy="no-referrer-when-downgrade"
        //                     ></iframe>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        //     <div className="bg-yellow-600 text-center py-4">
        //         <p>ALL Right Reserved 2024 - Design & Developed by<a href='https://www.ervon.tech/' className='transition-colors duration-300 ease-in-out hover:text-secondary' > Ervon Technology</a></p>
        //     </div>

        //     {/* Contact Modal */}
        //     <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        // </footer>
        <footer className="bg-teal-700 text-white">
  <div className="container mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* Company Name */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">COMPANY NAME</h2>
          <div className="w-24 h-1 bg-teal-400 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        </div>
        <p className="mb-4 font-medium text-2xl">Xploroo Taxi Service Himachal</p>
        <div className="flex space-x-4">
          <button className="bg-white text-teal-700 px-4 py-2 rounded border-2 border-white hover:bg-teal-500 hover:text-white font-semibold transition-colors duration-300 ease-in-out">
            <a href="tel:+918091595344" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
              CALL NOW
            </a>
          </button>
          <a
            href="https://wa.me/918091595344"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white ps-2.5 pr-0.5 rounded-full border-2 border-teal-500 hover:bg-white hover:text-teal-500 font-semibold transition-colors duration-300 ease-in-out flex items-center"
          >
            <FaWhatsapp className="mr-2" size={20} /> {/* WhatsApp Icon */}
          </a>
        </div>
      </div>

      {/* Links */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">LINKS</h2>
          <div className="w-24 h-1 bg-teal-400 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        </div>
        <ul>
          <li className="mb-2">
            <a href="#home" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Home</a>
          </li>
          <li className="mb-2">
            <a href="#about" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About</a>
          </li>
          <li className="mb-2">
            <a href="#services" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Services</a>
          </li>
          <li className="mb-2">
            <a href="#cars" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Cars</a>
          </li>
          <li className="mb-2">
            <a href="#activities" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Activities</a>
          </li>
          <li className="mb-2">
            <a href="#places" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Places</a>
          </li>
          <li className="mb-2">
            <a href="#rentals" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Rentals</a>
          </li>
          <li className="mb-2">
            <a onClick={openModal} className="hover:text-gray-300 transition-colors duration-300 ease-in-out cursor-pointer">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">CONTACT US</h2>
          <div className="w-24 h-1 bg-teal-400 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        </div>
        <ul>
          <li className="mb-2">
            <a href="mailto:xploroo5@gmail.com" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
              xploroo5@gmail.com
            </a>
          </li>
          <li className="mb-2">
            <a href="tel:+918091595344" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">
              +91 8091595344
            </a>
          </li>
        </ul>
      </div>

      {/* Google Map */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">LOCATION</h2>
          <div className="w-24 h-1 bg-teal-400 mt-2 transition-width duration-300 ease-in-out hover:w-32"></div>
        </div>
        <div className="bg-white h-40 w-full rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2557763254387!2d74.01242081482382!3d15.508789489231473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdd84d8a5bf1b%3A0x2d2d2b184a3e4c6!2sHimachal!5e0!3m2!1sen!2sin!4v1693665881639!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-teal-900 text-center py-4">
    <p>
      ALL Right Reserved 2024 - Design & Developed by
      <a
        href="https://www.ervon.tech/"
        className="transition-colors duration-300 ease-in-out hover:text-teal-300"
      >
        {" "}
        Ervon Technology
      </a>
    </p>
  </div>

  {/* Contact Modal */}
  <ContactModal isOpen={isModalOpen} onClose={closeModal} />
</footer>

    );
};

export default Footer;
