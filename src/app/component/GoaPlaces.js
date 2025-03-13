'use client';

import React, { useState } from 'react';

const places = [
    // North Himachal
    { id: 1, title: 'Bali', category: 'north-Himachal', description: `It's time to travel Bali.`,  image: '/img/blog/home1.jpg',},
    { id: 2, title: 'Singapore and Malaysia', category: 'north-Himachal', description: 'Best Deals Package . Unforgettable Summer adventure in southeast asia.', image:'/img/blog/home2.jpg' },
    { id: 3, title: 'Kasol Kheerganga', category: 'north-Himachal', description: 'A paradise for the wandering mind ! .', image: '/img/blog/home3.jpg' },
    { id: 4, title: 'Jibhi Tirthan Valley', category: 'north-Himachal', description: 'A Hidden Paradise in the lap of Nature Jibhi Tirthan Valley.', image: '/img/blog/home4.jpg' },
    { id: 5, title: 'Manal Kasol', category: 'north-Himachal', description: 'In the heart of the Himalayas.', image: '/img/blog/home5.jpg' },
    { id: 6, title: 'Winters Spiti', category: 'north-Himachal', description: 'Witness the icy majesty of spiti in winters !', image: '/img/blog/home6.jpg' },
    { id: 7, title: 'Mcleodganj Triund', category: 'north-Himachal', description: 'Himalayan Bliss Begins at Mcleodganj Triund.', image: '/img/blog/home7.jpg' },
  

    // External North Himachal
    { id: 9, title: 'Lakshadweep', category: 'external-north-Himachal', description: 'Lakshadweep is India smallest Union Territory . Consisting of 36 coral islands ,atolls and reefs in the Arabian sea.', image: '/img/blog/home9.jpg' },
    { id: 10, title: 'Kerala', category: 'external-north-Himachal', description: `God's Own Country , where every bend of the backwaters unveils a tale of serenity and every hill holds secrets of ancient wisdom .`, image: '/img/blog/home10.jpg' },
    { id: 11, title: 'ThaiLand', category: 'external-north-Himachal', description: `God's Own Country , where every bend of the backwaters unveils a tale of serenity and every hill holds secrets of ancient wisdom .`, image: '/img/blog/home11.jpg' },
    { id: 12, title: 'Spiti Valley ', category: 'external-north-Himachal', description: 'Spiti Valley.', image: '/img/blog/home12.jpg' },
    { id: 13, title: 'Dubai Dreams', category: 'external-north-Himachal', description: 'Dubai Dreams from Desert Dunes to city lights !', image: '/img/blog/home13.jpg' },

    // South Himachal
    { id: 14, title: 'Andaman And Nicobar', category: 'south-Himachal', description: 'Explore the Andaman And Nicobar.', image: '/img/blog/home14.jpg' },
    // { id: 14, title: 'Balaji Temple', category: 'south-Himachal', description: 'A beautiful temple dedicated to Lord Balaji, known for its serene environment.', image: '/img/blog/home14.jpg' },

];

const HimachalPlaces = () => {
    const [filter, setFilter] = useState('all');

    const filteredPlaces = filter === 'all' ? places : places.filter(place => place.category === filter);

    return (
        <div className="bg-secondary py-10 md:py-20">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl text-primary text-center mb-6 md:mb-8">Places to Visit in Himachal</p>
                <p className="text-md md:text-xl lg:text-2xl font-light text-primary text-center mb-8 md:mb-12">We’re specialized in providing a high-quality taxi service in Himachal for safer, smoother travel.</p>

                <div className="text-center mb-6 md:mb-9 text-primary">
                    <button
                        onClick={() => setFilter('all')}
                        className={`mx-1 my-3 lg:my-0 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'all' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('north-Himachal')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'north-Himachal' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        North Himachal
                    </button>
                    <button
                        onClick={() => setFilter('south-Himachal')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'south-Himachal' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        South Himachal
                    </button>
                    <button
                        onClick={() => setFilter('external-north-Himachal')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'external-north-Himachal' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        External North Himachal
                    </button>
                    <button
                        onClick={() => setFilter('external-south-Himachal')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'external-south-Himachal' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        External South Himachal
                    </button>
                    <button
                        onClick={() => setFilter('waterfall')}
                        className={`mx-1 my-3 md:my-0 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'waterfall' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        Waterfalls
                    </button>
                </div>
            </div>
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredPlaces.map(place => (
                        <div
                            key={place.id}
                            className="relative group bg-black border border-yellow-500 p-3 md:p-4 shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105"
                        >
                            <div
                                className="h-40 sm:h-48 md:h-56 bg-cover bg-center rounded-lg mb-3 md:mb-4 transition-opacity duration-300 ease-in-out"
                                style={{ backgroundImage: `url(${place.image})` }}
                            ></div>
                            <h3 className="text-lg md:text-xl text-yellow-500 mb-2">{place.title}</h3>
                            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ease-in-out">
                                <p className="text-white text-sm md:text-lg mx-4 md:mx-6">{place.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HimachalPlaces;
