// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className='bg-[#3df2f5] py-20'>
//       <h1 className='text-[#d91e18] text-center text-3xl lg:text-4xl pb-12'>
//         Welcome to Xploroo Taxi
//       </h1>
//       <div className="flex flex-col md:flex-row p-3 md:p-4 w-6/6 md:w-5/6 mx-auto">
//         {/* First Column */}
//         <div className="w-full md:w-1/2 flex justify-center items-center p-4">
//           <img 
//             src="/logo2.png" 
//             alt="About Us" 
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Second Column */}
//         <div className="w-full md:w-1/2 py-4">
//           <div className='w-11/12 mx-auto'>
//             <p className='text-3xl lg:text-4xl text-center md:text-start text-[#d91e18] mb-8'>About Us</p>
//             <p className='text-md lg:text-xl font-light text-[#2c3e50]'>
//               Your trusted travel partner in Shimla and beyond!
//             </p>
//             <p className='text-md my-4 lg:text-xl font-light text-[#2c3e50]'>
//               At Xploroo Taxi, we’re passionate about providing seamless and affordable taxi booking experiences across Himachal Pradesh. Our mission is to make travel easy, convenient, and enjoyable for everyone.
//             </p>

//             <h3 className='text-xl lg:text-2xl text-center md:text-start text-[#d91e18] mb-8'>
//               What sets us apart?
//             </h3>

//             <p className='text-md my-4 lg:text-xl font-light text-[#2c3e50]'>
//               <strong>Local Expertise:</strong> Our team knows Himachal Pradesh like the back of their hand, ensuring you get the best routes and prices.
//             </p>
//             <p className='text-md my-4 lg:text-xl font-light text-[#2c3e50]'>
//               <strong>Wide Coverage:</strong> We offer both local and outstation taxi services, covering all major destinations in Himachal Pradesh.
//             </p>
//             <p className='text-md my-4 lg:text-xl font-light text-[#2c3e50]'>
//               <strong>Competitive Pricing:</strong> We strive to provide the best prices in the market, without compromising on quality or service.
//             </p>
//             <p className='text-md my-4 lg:text-xl font-light text-[#2c3e50]'>
//               Choose Xploroo Taxi for a hassle-free travel experience!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;










import React from 'react';
import { ArrowRight, PhoneCall, MapPin, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-teal-800 text-center text-4xl lg:text-5xl font-bold pb-12">
          Welcome to <span className="text-teal-600">Xploroo Taxi</span>
        </h1>
        
        <div className="flex flex-col md:flex-row w-full lg:w-5/6 mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* First Column - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-teal-800 opacity-10"></div>
            <img 
              src="/logo2.png"
              alt="About Xploroo Taxi" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900 to-transparent p-6">
              <div className="flex items-center justify-center">
                <span className="bg-white text-teal-700 px-4 py-2 rounded-full font-bold text-sm">Since 2020</span>
              </div>
            </div>
          </div>

          {/* Second Column - Content */}
          <div className="w-full md:w-1/2 p-8 lg:p-12">
            <div className="border-l-4 border-teal-500 pl-4 mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-700">About Us</h2>
              <p className="text-teal-600 font-medium mt-1">Your trusted travel partner in Shimla and beyond!</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              At Xploroo Taxi, we&rsquo;re passionate about providing seamless and affordable taxi booking experiences across Himachal Pradesh. Our mission is to make travel easy, convenient, and enjoyable for everyone.
            </p>

            <h3 className="text-2xl font-bold text-teal-700 mt-8 mb-6 flex items-center">
              What sets us apart
              <ArrowRight className="ml-2 text-teal-500" size={20} />
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4 mt-1">
                  <MapPin className="text-teal-700" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Local Expertise</h4>
                  <p className="text-gray-600">Our team knows Himachal Pradesh like the back of their hand, ensuring you get the best routes and prices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4 mt-1">
                  <PhoneCall className="text-teal-700" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Wide Coverage</h4>
                  <p className="text-gray-600">We offer both local and outstation taxi services, covering all major destinations in Himachal Pradesh.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4 mt-1">
                  <Shield className="text-teal-700" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Competitive Pricing</h4>
                  <p className="text-gray-600">We strive to provide the best prices in the market, without compromising on quality or service.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-teal-100">
              <p className="text-teal-800 font-bold text-lg text-center">
                Choose Xploroo Taxi for a hassle-free travel experience!
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;