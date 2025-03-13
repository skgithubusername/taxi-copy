import React from 'react';

const services = [
    { id: 1, image: '/img/services/one.svg', title: 'Tour Packages', description: 'Customized tour packages to explore Himachal.' },
    { id: 2, image: '/img/services/two.svg', title: 'Airport Transfers', description: 'On-time airport transfers with no hassle.' },
    { id: 3, image: '/img/services/three.svg', title: 'Outstation Trips', description: 'Long distance trips with expert drivers.' },
    { id: 4, image: '/img/services/four.svg', title: 'Pick & Drop', description: 'Safe and comfortable rides for you and your family.' },
    { id: 5, image: '/img/services/five.svg', title: 'Rental Services', description: 'Offering a range of vehicles for comfortable and convenient travel.' },
];

const Service = () => {
    return (
        <div className='bg-secondary py-20' id='service'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <p className='text-3xl md:text-4xl text-primary text-center mb-8'>Our Services</p>
                <p className='text-xl md:text-2xl font-light text-primary text-center mb-12'>We’re specialized in providing high-quality taxi services in Himachal.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <img className="w-full h-40 object-contain mb-4" src={service.image} alt={service.title} />
                            <h3 className='text-xl text-yellow-500 mb-2 text-center'>{service.title}</h3>
                            <p className="text-sm text-white text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service;
