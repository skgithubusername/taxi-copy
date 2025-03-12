'use client';

import React, { useState, useEffect } from 'react';

const activities = [
  {
    title: 'Scuba Dive',
    description: 'Scuba diving is an exciting way to explore the underwater world.',
    image: '/img/activities/scuba-dive.png',
  },
  {
    title: 'Beach Parties',
    description: 'A beach party in Goa is a fun mix of music, dancing, and ocean vibes.',
    image: '/img/activities/beach-party.png',
  },
  {
    title: 'Flyboarding',
    description: 'Flyboarding is an exciting water sport that lets you soar above the waves using powerful jets.',
    image: '/img/activities/flyboarding.avif',
  },
  {
    title: 'Kayaking',
    description: 'Kayaking in Goa is a peaceful way to explore the serene rivers and scenic coastlines.',
    image: '/img/activities/kayaking.png',
  },
  {
    title: 'Parasailing',
    description: 'Gives you breathtaking aerial views of the coastline as you glide above the sea.',
    image: '/img/activities/parasailing.png',
  },
  {
    title: 'Nightlife',
    description: 'Experience the buzzing nightlife of Goa with bars, clubs, and more.',
    image: '/img/activities/night-party.jpeg',
  },
];

const Activities = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add('fadeInUp');
        } else {
          element.classList.remove('fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-secondary py-20'>
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <h2 className='text-3xl md:text-4xl text-primary text-center mb-8'>Activities</h2>
        <p className='text-xl md:text-2xl font-light text-primary text-center mb-12'>
          Enjoy a range of activities in Goa with Dhanish Taxi Service, including beach trips, sightseeing, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative bg-black border border-yellow-500 p-4 shadow-lg text-center rounded-lg transform transition-transform duration-300 hover:scale-105 animate-on-scroll"
            >
              <div
                className="h-48 bg-cover bg-center rounded-lg transition-opacity duration-300 ease-in-out"
                style={{ backgroundImage: `url(${activity.image})` }}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-75 rounded-lg p-4 transition-opacity duration-300 ease-in-out">
                <h3 className='text-xl text-yellow-500 mb-2'>{activity.title}</h3>
                <p className='text-sm text-white'>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
