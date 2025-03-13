import React from 'react';

const AboutUs = () => {
  return (
    <div className='bg-secondary py-20'>
      <h1 className=' text-red-600 text-center  text-lg lg:text-2xl pb-12'>
      Welcome to Xploroo Taxi

      </h1>
    <div className="flex flex-col md:flex-row p-3 md:p-4 w-6/6 md:w-5/6 mx-auto">
      {/* First Column */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        {/* You can place an image or any other content here */}
        <img 
          src="/img/blog/home14.jpg" 
          alt="About Us" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Second Column */}
      <div className="w-full md:w-1/2 py-4">
      <div className='w-11/12 mx-auto'>
      <p className='text-3xl lg:text-4xl text-center md:text-start text-primary mb-8'>About Us</p>
        <p className='text-md lg:text-xl font-light text-primary'>
        Your trusted travel partner in Shimla and beyond!

        </p>
        <p className='text-md my-4 lg:text-xl font-light text-primary'>
        At Xploroo Taxi, we're passionate about providing seamless and affordable taxi booking experiences across Himachal Pradesh. Our mission is to make travel easy, convenient, and enjoyable for everyone.

        </p>

      <h3 className='text-xl lg:text-2xl text-center md:text-start text-primary mb-8'>What sets us apart?
      </h3>

        <p className='text-md my-4 lg:text-xl font-light text-primary'>
        Local Expertise: Our team knows Himachal Pradesh like the back of their hand, ensuring you get the best routes and prices.

        </p>
        <p className='text-md my-4 lg:text-xl font-light text-primary'>
        Wide Coverage: We offer both local and outstation taxi services, covering all major destinations in Himachal Pradesh.

        </p>
        <p className='text-md my-4 lg:text-xl font-light text-primary'>
        Competitive Pricing: We strive to provide the best prices in the market, without compromising on quality or service.

        </p>
        
        <p className='text-md my-4 lg:text-xl font-light text-primary'>
        Choose Xploroo Taxi for a hassle-free travel experience!
        </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
