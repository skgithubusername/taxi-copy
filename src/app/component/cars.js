'use client';

import React, { useState } from 'react';

const cars = [
    { id: 1, image: '/img/taxi/taxi-11.jpeg', alt: 'Swift Dzire', description: 'Swift Dzire is a comfortable sedan for your city rides.' },
    { id: 2, image: '/img/taxi/taxi-2.jpg', alt: 'Ertiga Vxi', description: 'Ertiga Vxi offers spacious seating for your family trips.' },
    { id: 3, image: '/img/taxi/taxi-3.avif', alt: 'Innova', description: 'Innova provides a smooth ride with ample space.' },
    { id: 4, image: '/img/taxi/taxi-4.jpg', alt: 'Innova Crysta', description: 'Innova Crysta is the epitome of luxury and performance.' },
];

const CarSection = () => {
    const [activeCar, setActiveCar] = useState(null);

    const handleClick = (car) => {
        setActiveCar(car);
    };

    const handleClose = () => {
        setActiveCar(null);
    };

    return (
        <div className='bg-secondary py-28'>
            <div className='mx-10'>
                <h2 className='text-3xl md:text-4xl text-primary text-center mb-12'>Our Cars</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {cars.map(car => (
                        <div
                            key={car.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleClick(car)}
                        >
                            <img
                                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75 cursor-pointer"
                                src={car.image}
                                alt={car.alt}
                            />
                            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                <span className="text-white text-lg font-bold cursor-pointer">{car.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {activeCar && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                                onClick={handleClose}
                            >
                                &times;
                            </button>
                            <img
                                className="w-full h-80 object-cover rounded-lg mb-4"
                                src={activeCar.image}
                                alt={activeCar.alt}
                            />
                            <h2 className="text-2xl font-bold mb-2">{activeCar.alt}</h2>
                            <p className="text-gray-700">{activeCar.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarSection;
