// 'use client';

// import React, { useState, useEffect } from 'react';

// const activities = [
//   {
//     title: 'Scuba Dive',
//     description: 'Scuba diving is an exciting way to explore the underwater world.',
//     image: '/img/blog/home1.jpg',
//   },
//   {
//     title: 'Beach Parties',
//     description: 'A beach party in Himachal is a fun mix of music, dancing, and ocean vibes.',
//     image: '/img/blog/home2.jpg',
//   },
//   {
//     title: 'Flyboarding',
//     description: 'Flyboarding is an exciting water sport that lets you soar above the waves using powerful jets.',
//     image: '/img/blog/home3.jpg',
//   },
//   {
//     title: 'Kayaking',
//     description: 'Kayaking in Himachal is a peaceful way to explore the serene rivers and scenic coastlines.',
//     image: '/img/blog/home4.jpg',
//   },
//   {
//     title: 'Parasailing',
//     description: 'Gives you breathtaking aerial views of the coastline as you glide above the sea.',
//     image: '/img/blog/home5.jpg',
//   },
//   {
//     title: 'Nightlife',
//     description: 'Experience the buzzing nightlife of Himachal with bars, clubs, and more.',
//     image: '/img/blog/home6.jpg',
//   },
// ];

// const Activities = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll('.animate-on-scroll');
//       elements.forEach((element) => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//           element.classList.add('fadeInUp');
//         } else {
//           element.classList.remove('fadeInUp');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className='bg-secondary py-20'>
//       <div className='w-11/12 md:w-10/12 mx-auto'>
//         <h2 className='text-3xl md:text-4xl text-primary text-center mb-8'>Package</h2>
//         <p className='text-xl md:text-2xl font-light text-primary text-center mb-12'>
//           Enjoy a range of activities in Himachal with  Xploroo taxiTaxi Service, including beach trips, sightseeing, and more.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {activities.map((activity, index) => (
//             <div
//               key={index}
//               className="relative bg-black border border-yellow-500 p-4 shadow-lg text-center rounded-lg transform transition-transform duration-300 hover:scale-105 animate-on-scroll"
//             >
//               <div
//                 className="h-48 bg-cover bg-center rounded-lg transition-opacity duration-300 ease-in-out"
//                 style={{ backgroundImage: `url(${activity.image})` }}
//               ></div>
//               <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-75 rounded-lg p-4 transition-opacity duration-300 ease-in-out">
//                 <h3 className='text-xl text-yellow-500 mb-2'>{activity.title}</h3>
//                 <p className='text-sm text-white'>{activity.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Activities;

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const blogLinks = [
  { id: 1, title: "Blog 1", url: "/blog/blog1" },
  { id: 2, title: "Blog 2", url: "/blog/blog2" },
  { id: 3, title: "Blog 3", url: "/blog/blog3" },
  { id: 4, title: "Blog 4", url: "/blog/blog4" },
  { id: 5, title: "Blog 5", url: "/blog/blog5" },
];

const BlogLinks = () => {
  return (
    <div className=" mx-auto p-6  bg-secondary">
     <div className=" flex justify-center items-center my-12">
     <h2 className="text-2xl font-bold  text-yellow-400 flex items-center mb-4">
        <FileText className="mr-2" /> Latest Blogs
      </h2>
     </div>
      
      <div className="flex lg:justify-center lg:items-center flex-wrap gap-3">
        {blogLinks.map((blog) => (
          <Link
            key={blog.id}
            href={blog.url}
            className="flex items-center justify-between bg-gray-800 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition duration-300 p-3 min-w-min flex-1 basis-20 md:max-w-xs"
          >
            <span className="text-white font-medium truncate mr-2">{blog.title}</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogLinks;