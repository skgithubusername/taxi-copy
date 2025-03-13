'use client';

import React, { useState } from 'react';

const places = [
    // North Himachal
    { id: 1, title: 'Fort Aguada', category: 'north-Himachal', description: 'A well-preserved 17th-century Portuguese fort, offering panoramic views of the Arabian Sea.',  image: '/img/blog/home1.jpg',},
    { id: 2, title: 'Dolphin Sightseeing', category: 'north-Himachal', description: 'A popular activity in Himachal, where tourists can enjoy watching dolphins in their natural habitat.', image:'/img/blog/home2.jpg' },
    { id: 3, title: 'Candolim Beach', category: 'north-Himachal', description: 'A serene beach known for its long sandy stretch, popular for water sports and beach shacks.', image: '/img/blog/home3.jpg' },
    { id: 4, title: 'Baga Beach', category: 'north-Himachal', description: 'A lively beach famous for its nightlife, water sports, and bustling atmosphere.', image: '/img/blog/home4.jpg' },
    { id: 5, title: 'Anjuna Beach (Viewpoint)', category: 'north-Himachal', description: 'A scenic viewpoint offering stunning views of Anjuna Beach, known for its rocky shores and vibrant markets.', image: '/img/blog/home5.jpg' },
    { id: 6, title: 'Vagator Beach', category: 'north-Himachal', description: 'A picturesque beach known for its dramatic red cliffs and a laid-back vibe.', image: '/img/blog/home6.jpg' },
    { id: 7, title: 'Chapora Fort', category: 'north-Himachal', description: 'A historical fort offering panoramic views of the Vagator Beach and Chapora River.', image: '/img/blog/home7.jpg' },
    { id: 8, title: 'Calangute Beach', category: 'north-Himachal', description: 'Known as the “Queen of Beaches,” it is the largest beach in Himachal, popular for water activities and vibrant atmosphere.', image: '/img/blog/home14.jpg' },

    // External North Himachal
    { id: 9, title: 'Morjim Beach', category: 'external-north-Himachal', description: 'A tranquil beach known for its nesting site of the endangered Olive Ridley turtles.', image: '/img/blog/home9.jpg' },
    { id: 10, title: 'Ashwem Beach', category: 'external-north-Himachal', description: 'A peaceful beach with soft sands and palm groves, perfect for relaxation.', image: '/img/blog/home10.jpg' },
    { id: 11, title: 'Mandrem Beach', category: 'external-north-Himachal', description: 'A serene beach with white sands, ideal for a quiet getaway.', image: '/img/blog/home11.jpg' },
    { id: 12, title: 'Arambol Beach', category: 'external-north-Himachal', description: 'A popular beach with a bohemian vibe, known for its live music and drum circles.', image: '/img/blog/home12.jpg' },

    // South Himachal
    { id: 13, title: 'Old Himachal Church', category: 'south-Himachal', description: 'A UNESCO World Heritage site, famous for its stunning baroque architecture.', image: '/img/blog/home13.jpg' },
    { id: 14, title: 'Balaji Temple', category: 'south-Himachal', description: 'A beautiful temple dedicated to Lord Balaji, known for its serene environment.', image: '/img/blog/home14.jpg' },
    { id: 15, title: 'Mangeshi Temple', category: 'south-Himachal', description: 'One of the largest and most visited temples in Himachal, dedicated to Lord Shiva.', image: '/img/blog/home1.jpg' },
    { id: 16, title: 'Spice Plantation', category: 'south-Himachal', description: 'Explore the lush plantations and learn about the spices that are cultivated in Himachal.', image: '/img/blog/home2.jpg' },
    { id: 17, title: 'Dona Paula Beach', category: 'south-Himachal', description: 'A scenic beach known for its water sports and the romantic legend of Dona Paula.', image: '/img/blog/home3.jpg' },
    { id: 18, title: 'Miramar Beach', category: 'south-Himachal', description: 'A popular beach near Panjim, offering a lovely view of the sunset.', image: '/img/blog/home4.jpg' },
    { id: 19, title: 'Panjim Market', category: 'south-Himachal', description: 'A bustling market in the heart of Panjim, known for its fresh produce and local handicrafts.', image: '/img/blog/home5.jpg' },
    { id: 20, title: 'Panjim Church', category: 'south-Himachal', description: 'The Our Lady of the Immaculate Conception Church, a famous landmark with stunning architecture.', image: '/img/blog/home6.jpg'},
    { id: 21, title: 'Boat Cruise (Sunset Cruise)', category: 'south-Himachal', description: 'Enjoy a beautiful sunset while cruising along the Mandovi River.', image: '/img/blog/home14.jpg' },

    // External South Himachal
    { id: 22, title: 'Colva Beach', category: 'external-south-Himachal', description: 'A popular beach known for its white sands and vibrant nightlife.', image: '/img/blog/home4.jpg' },
    { id: 23, title: 'Majorda Beach', category: 'external-south-Himachal', description: 'A tranquil beach, ideal for swimming and relaxing.', image: '/img/blog/home9.jpg' },
    { id: 24, title: 'Utorda Beach', category: 'external-south-Himachal', description: 'A quiet beach with golden sands, perfect for a peaceful retreat.', image: '/img/blog/home10.jpg' },
    { id: 25, title: 'Varca Beach', category: 'external-south-Himachal', description: 'A serene and less crowded beach, ideal for a relaxing day out.', image: '/img/blog/home11.jpg' },

    // Waterfalls
    { id: 26, title: 'Dudhsagar Waterfall', category: 'waterfall', description: 'One of the tallest waterfalls in India, known for its stunning cascade amidst lush greenery.', image: '/img/blog/home12.jpg' },
    { id: 27, title: 'Harvalem Waterfall', category: 'waterfall', description: 'A picturesque waterfall surrounded by dense forests, perfect for a serene getaway.', image: '/img/blog/home13.jpg' },
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
