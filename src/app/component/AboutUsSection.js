import React from 'react';

const AboutUs = () => {
  return (
    <div className='bg-secondary py-20'>
      <h1 className=' text-red-600 text-center  text-lg lg:text-2xl pb-12'>
      Dhanish taxi service in goa
      </h1>
    <div className="flex flex-col md:flex-row p-3 md:p-4 w-6/6 md:w-5/6 mx-auto">
      {/* First Column */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        {/* You can place an image or any other content here */}
        <img 
          src="/img/About-Us.png" 
          alt="About Us" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Second Column */}
      <div className="w-full md:w-1/2 py-4">
      <div className='w-11/12 mx-auto'>
      <p className='text-3xl lg:text-4xl text-center md:text-start text-primary mb-8'>About Us</p>
        <p className='text-md lg:text-xl font-light text-primary'>
        Dhanish taxi service goa being a comprehensive taxi and cab service provider in Goa, Railway station transfer, Bus stop Transfers, Dudhsagar Waterfall Trip, Airport pikup Drop. airport services, Goa’s beaches, hills, backwaters, and marine drives are best explored by road. Dhanish taxi service goa offer various Travel and Tour Package, Honeymoon Packages for tourist coming to Goa for Vacations. For this category of tourists we provide Taxi and Cab Service in Goa. Car and Bike Rent also available.
        </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
