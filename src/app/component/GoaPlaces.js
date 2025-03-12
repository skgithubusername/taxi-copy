'use client';

import React, { useState } from 'react';

const places = [
    // North Goa
    { id: 1, title: 'Fort Aguada', category: 'north-goa', description: 'A well-preserved 17th-century Portuguese fort, offering panoramic views of the Arabian Sea.', image: '/img/north-goa/fort-aguada.jpg' },
    { id: 2, title: 'Dolphin Sightseeing', category: 'north-goa', description: 'A popular activity in Goa, where tourists can enjoy watching dolphins in their natural habitat.', image: '/img/north-goa/dolphin-sightseeing.jpg' },
    { id: 3, title: 'Candolim Beach', category: 'north-goa', description: 'A serene beach known for its long sandy stretch, popular for water sports and beach shacks.', image: '/img/north-goa/candolim-beach.jpeg' },
    { id: 4, title: 'Baga Beach', category: 'north-goa', description: 'A lively beach famous for its nightlife, water sports, and bustling atmosphere.', image: '/img/north-goa/baga-beach.jpg' },
    { id: 5, title: 'Anjuna Beach (Viewpoint)', category: 'north-goa', description: 'A scenic viewpoint offering stunning views of Anjuna Beach, known for its rocky shores and vibrant markets.', image: '/img/north-goa/anjuna-beach.jpg' },
    { id: 6, title: 'Vagator Beach', category: 'north-goa', description: 'A picturesque beach known for its dramatic red cliffs and a laid-back vibe.', image: '/img/north-goa/vagator-beach.jpg' },
    { id: 7, title: 'Chapora Fort', category: 'north-goa', description: 'A historical fort offering panoramic views of the Vagator Beach and Chapora River.', image: '/img/north-goa/chapora-fort.jpeg' },
    { id: 8, title: 'Calangute Beach', category: 'north-goa', description: 'Known as the “Queen of Beaches,” it is the largest beach in Goa, popular for water activities and vibrant atmosphere.', image: '/img/north-goa/calangute-beach.jpeg' },

    // External North Goa
    { id: 9, title: 'Morjim Beach', category: 'external-north-goa', description: 'A tranquil beach known for its nesting site of the endangered Olive Ridley turtles.', image: '/img/external-north-goa/morjim-beach.jpeg' },
    { id: 10, title: 'Ashwem Beach', category: 'external-north-goa', description: 'A peaceful beach with soft sands and palm groves, perfect for relaxation.', image: '/img/external-north-goa/ashwem-beach.jpeg' },
    { id: 11, title: 'Mandrem Beach', category: 'external-north-goa', description: 'A serene beach with white sands, ideal for a quiet getaway.', image: '/img/external-north-goa/mandrem-beach.jpeg' },
    { id: 12, title: 'Arambol Beach', category: 'external-north-goa', description: 'A popular beach with a bohemian vibe, known for its live music and drum circles.', image: '/img/external-north-goa/arambol-beach.jpeg' },

    // South Goa
    { id: 13, title: 'Old Goa Church', category: 'south-goa', description: 'A UNESCO World Heritage site, famous for its stunning baroque architecture.', image: '/img/south-goa/old-goa-church.jpg' },
    { id: 14, title: 'Balaji Temple', category: 'south-goa', description: 'A beautiful temple dedicated to Lord Balaji, known for its serene environment.', image: '/img/south-goa/balaji-temple.jpeg' },
    { id: 15, title: 'Mangeshi Temple', category: 'south-goa', description: 'One of the largest and most visited temples in Goa, dedicated to Lord Shiva.', image: '/img/south-goa/mangeshi-temple.jpeg' },
    { id: 16, title: 'Spice Plantation', category: 'south-goa', description: 'Explore the lush plantations and learn about the spices that are cultivated in Goa.', image: '/img/south-goa/spice-plantation.jpeg' },
    { id: 17, title: 'Dona Paula Beach', category: 'south-goa', description: 'A scenic beach known for its water sports and the romantic legend of Dona Paula.', image: '/img/south-goa/dona-paula-beach.jpeg' },
    { id: 18, title: 'Miramar Beach', category: 'south-goa', description: 'A popular beach near Panjim, offering a lovely view of the sunset.', image: '/img/south-goa/miramar-beach.jpeg' },
    { id: 19, title: 'Panjim Market', category: 'south-goa', description: 'A bustling market in the heart of Panjim, known for its fresh produce and local handicrafts.', image: '/img/south-goa/panjim-market.jpeg' },
    { id: 20, title: 'Panjim Church', category: 'south-goa', description: 'The Our Lady of the Immaculate Conception Church, a famous landmark with stunning architecture.', image: '/img/south-goa/panjim-church.jpeg' },
    { id: 21, title: 'Boat Cruise (Sunset Cruise)', category: 'south-goa', description: 'Enjoy a beautiful sunset while cruising along the Mandovi River.', image: '/img/south-goa/sunset-cruise.jpeg' },

    // External South Goa
    { id: 22, title: 'Colva Beach', category: 'external-south-goa', description: 'A popular beach known for its white sands and vibrant nightlife.', image: '/img/external-south-goa/colva-beach.jpeg' },
    { id: 23, title: 'Majorda Beach', category: 'external-south-goa', description: 'A tranquil beach, ideal for swimming and relaxing.', image: '/img/external-south-goa/majorda-beach.jpeg' },
    { id: 24, title: 'Utorda Beach', category: 'external-south-goa', description: 'A quiet beach with golden sands, perfect for a peaceful retreat.', image: '/img/external-south-goa/utorda-beach.jpeg' },
    { id: 25, title: 'Varca Beach', category: 'external-south-goa', description: 'A serene and less crowded beach, ideal for a relaxing day out.', image: '/img/external-south-goa/varca-beach.jpeg' },

    // Waterfalls
    { id: 26, title: 'Dudhsagar Waterfall', category: 'waterfall', description: 'One of the tallest waterfalls in India, known for its stunning cascade amidst lush greenery.', image: '/img/waterfall/dudhsagar-waterfall.jpg' },
    { id: 27, title: 'Harvalem Waterfall', category: 'waterfall', description: 'A picturesque waterfall surrounded by dense forests, perfect for a serene getaway.', image: '/img/waterfall/harvalem-waterfall.jpeg' },
];

const GoaPlaces = () => {
    const [filter, setFilter] = useState('all');

    const filteredPlaces = filter === 'all' ? places : places.filter(place => place.category === filter);

    return (
        <div className="bg-secondary py-10 md:py-20">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl text-primary text-center mb-6 md:mb-8">Places to Visit in Goa</p>
                <p className="text-md md:text-xl lg:text-2xl font-light text-primary text-center mb-8 md:mb-12">We’re specialized in providing a high-quality taxi service in Goa for safer, smoother travel.</p>

                <div className="text-center mb-6 md:mb-9 text-primary">
                    <button
                        onClick={() => setFilter('all')}
                        className={`mx-1 my-3 lg:my-0 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'all' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('north-goa')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'north-goa' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        North Goa
                    </button>
                    <button
                        onClick={() => setFilter('south-goa')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'south-goa' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        South Goa
                    </button>
                    <button
                        onClick={() => setFilter('external-north-goa')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'external-north-goa' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        External North Goa
                    </button>
                    <button
                        onClick={() => setFilter('external-south-goa')}
                        className={`mx-1 md:mx-2 px-3 md:px-4 py-2 border rounded-md border-primary ${filter === 'external-south-goa' ? 'bg-primary text-black' : 'bg-transparent hover:bg-primary hover:text-black'}`}
                    >
                        External South Goa
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

export default GoaPlaces;
