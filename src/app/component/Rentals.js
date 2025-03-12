'use client';

import React, { useState } from 'react';

const rentals = [
  { id: 1, name: 'Swift', description: 'A compact and fuel-efficient car, perfect for city drives and short trips.', category: '4-wheeler', image: '/img/rentals/maruti-suzuki-swift.webp' },
  { id: 2, name: 'Baleno', description: 'A stylish hatchback offering comfort and a smooth driving experience.', category: '4-wheeler', image: '/img/rentals/baleno.jpeg' },
  { id: 3, name: 'i20', description: 'A premium hatchback known for its sleek design and advanced features.', category: '4-wheeler', image: '/img/rentals/hyundai-i20.jpg' },
  { id: 4, name: 'Ertiga', description: 'A spacious MPV, ideal for family outings and group travels.', category: '4-wheeler', image: '/img/rentals/ertiga.jpg' },
  { id: 5, name: 'Innova Crysta', description: 'A luxurious SUV with ample space and powerful performance for long journeys.', category: '4-wheeler', image: '/img/rentals/inova-crysta.jpg' },
  { id: 6, name: 'Activa', description: 'A reliable scooter, perfect for quick and easy commutes around the city.', category: '2-wheeler', image: '/img/rentals/home-activa.jpg' },
  { id: 7, name: 'Fascino', description: 'A stylish and lightweight scooter, offering both elegance and efficiency.', category: '2-wheeler', image: '/img/rentals/yamaha-fascino.jpg' },
];

const Rentals = () => {
  const [filter, setFilter] = useState('all');

  const filteredRentals = filter === 'all' ? rentals : rentals.filter(rental => rental.category === filter);

  return (
    <div id="rentals" className="bg-secondary py-10 md:py-20">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary text-center mb-6 md:mb-8">Our Rentals</h2>

        <div className="text-center mb-6 md:mb-9 text-primary">
          <button
            onClick={() => setFilter('all')}
            className={`mx-1 my-3 lg:my-0 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'all' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('2-wheeler')}
            className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === '2-wheeler' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
          >
            2 Wheeler
          </button>
          <button
            onClick={() => setFilter('4-wheeler')}
            className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === '4-wheeler' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
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
              className="relative group bg-black border border-yellow-500 p-3 md:p-4 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105"
            >   
              <div
                  className="h-40 sm:h-48 md:h-56 bg-cover bg-center rounded-lg mb-3 md:mb-4 transition-opacity duration-300 ease-in-out"
                  style={{ backgroundImage: `url(${rental.image})` }}> 
              </div>
              <h3 className="text-lg md:text-xl text-yellow-500 mb-2">{rental.name}</h3>
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
