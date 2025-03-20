'use client';

import React, { useState } from 'react';



const rentals = [
  { id: 1, name: 'Swift', description: 'A compact and fuel-efficient car, perfect for city drives and short trips.', category: '4-wheeler', image: '/img/rentals/maruti-suzuki-swift.webp' },
  { id: 2, name: 'Baleno', description: 'A stylish hatchback offering comfort and a smooth driving experience.', category: '4-wheeler', image: '/img/rentals/baleno.jpeg' },
  { id: 3, name: 'i20', description: 'A premium hatchback known for its sleek design and advanced features.', category: '4-wheeler', image: '/img/rentals/hyundai-i20.jpg' },
  { id: 4, name: 'Ertiga', description: 'A spacious MPV, ideal for family outings and group travels.', category: '4-wheeler', image: '/img/rentals/ertiga.jpg' },
  { id: 5, name: 'Innova Crysta', description: 'A luxurious SUV with ample space and powerful performance for long journeys.', category: '4-wheeler', image: '/img/rentals/inova-crysta.jpg' },
  { id: 6, name: 'Tempo Traveler', description: 'A comfortable and spacious travel van, ideal for group tours and long-distance journeys.', category: '4-wheeler', image: '/img/blog/tempo.jpg' },

  { id: 7, name: 'Sports Bike', description: 'A powerful and stylish sports bike, designed for high-speed performance.', category: '2-wheeler', image: '/img/rentals/bike1.jpg' },
  { id: 8, name: 'Sports Bike', description: 'A sleek and aerodynamic sports bike, built for thrilling rides.', category: '2-wheeler', image: '/img/rentals/bike2.jpg' },
  { id: 9, name: 'Sports Bike', description: 'A lightweight and high-performance sports bike, perfect for adventure seekers.', category: '2-wheeler', image: '/img/rentals/bike3.jpg' },
  { id: 10, name: 'Sports Bike', description: 'A stylish and fuel-efficient sports bike, offering a smooth ride.', category: '2-wheeler', image: '/img/rentals/bike4.jpg' },
  { id: 11, name: 'Sports Bike', description: 'A sporty and aggressive bike, delivering both power and style.', category: '2-wheeler', image: '/img/rentals/bike5.jpg' },
  { id: 12, name: 'Bullet', description: 'A classic and iconic motorcycle, known for its powerful engine and rugged design.', category: '2-wheeler', image: '/img/rentals/bike6.jpg' },
];

const Rentals = () => {
  const [filter, setFilter] = useState('all');

  const filteredRentals = filter === 'all' 
  ? rentals 
  : rentals.filter(rental => rental.category.trim().toLowerCase() === filter.trim().toLowerCase());

  return (
    <div id="rentals" className="bg-[#E6F8F7] py-10 md:py-20">
  <div className="w-11/12 md:w-10/12 mx-auto">
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#00897B] font-semibold text-center mb-6 md:mb-8">Our Rentals</h2>

    <div className="text-center mb-6 md:mb-9">
      <button
        onClick={() => setFilter('all')}
        className={`mx-1 my-3 lg:my-0 md:mx-2 px-4 py-2 border rounded-md border-[#00897B]  ${
          filter === 'all' ? 'bg-[#00897B] text-black' : 'hover:bg-[#00897B] hover:text-white transition duration-300'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('2-wheeler')}
        className={`mx-1 md:mx-2 px-4 py-2 border rounded-md border-[#00897B] text-black ${
          filter === '2-wheeler' ? 'bg-[#00897B] text-black' : 'hover:bg-[#00897B] hover:text-white transition duration-300'
        }`}
      >
        2 Wheeler
      </button>
      <button
        onClick={() => setFilter('4-wheeler')}
        className={`mx-1 md:mx-2 px-4 py-2 border rounded-md border-[#00897B] text-black ${
          filter === '4-wheeler' ? 'bg-[#00897B] text-black' : 'hover:bg-[#00897B] hover:text-white transition duration-300'
        }`}
      >
        4 Wheeler
      </button>
    </div>
  </div>

  <div className="w-11/12 md:w-10/12 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {filteredRentals.map(rental => (
        <div
          key={rental.id}
          className="relative group bg-white border border-[#00897B] p-3 md:p-4 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-[#B2DFDB]"
        >   
          <div
            className="h-40 sm:h-48 md:h-56 bg-cover bg-center rounded-lg mb-3 md:mb-4 transition-opacity duration-300 ease-in-out"
            style={{ backgroundImage: `url(${rental.image})` }}> 
          </div>
          <h3 className="text-lg md:text-xl text-[#00897B] font-semibold mb-2">{rental.name}</h3>
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ease-in-out">
            <p className="text-white text-sm md:text-lg mx-4 md:mx-6">{rental.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Rentals;
