
// import React from 'react';
// import { Bike, CheckCircle, Phone, Mail, Globe, IndianRupee, User, Map, Route } from 'lucide-react';

// const Blog7 = () => {
//     return (
//         <div className="bg-gray-900 text-yellow-500 min-h-screen p-8">
//             <div className="max-w-5xl mx-auto">
//                 <header className="text-center mb-12">
//                     <div className="flex items-center justify-center mb-4">
//                         <Bike className="text-yellow-400 mr-4" size={48} />
//                         <h1 className="text-6xl font-extrabold">Xploroo Ride Packages</h1>
//                     </div>
//                     <p className="text-2xl italic">Unleash the Adventurer in You!</p>
//                 </header>
                
//                 <div className=" text-white p-8 rounded-xl shadow-lg mb-10">
//                     {/* <h2 className="text-4xl font-bold mb-6 text-center">Your Himalayan Adventure Awaits</h2> */}
//                     <p className="text-xl mb-6 text-center">Are you ready to hit the road and explore the breathtaking landscapes of Himachal Pradesh? Xploroo, the first company to offer solo traveler bike tours, brings you exclusive ride packages that promise adventure, freedom, and unforgettable memories. Whether you&rsquo;re a solo traveler or a group of thrill-seekers, our packages are designed to give you the ultimate biking experience</p>
//                     <div className="flex justify-center">
//                         {/* <button className="bg-black text-yellow-400 px-8 py-3 rounded-full font-bold text-xl hover:bg-gray-800 transition duration-300">
//                             Book Your Ride Today
//                         </button> */}
//                     </div>
//                 </div>
                
//                 <div className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg mb-10 border border-yellow-500">
//                     <h2 className="text-3xl font-bold mb-6 flex items-center">
//                         <CheckCircle className="mr-3 text-yellow-400" size={24} /> 
//                         Package Highlights
//                     </h2>
//                     <ul className="space-y-4 text-lg">
//                         <li className="flex items-start">
//                             <IndianRupee className="mt-1 mr-3 text-yellow-400" size={20} />
//                             <div>
//                                 <span className="font-bold">Per Day Cost (Without Meals):</span> ₹3,500/-
//                             </div>
//                         </li>
//                         <li className="flex items-start">
//                             <Route className="mt-1 mr-3 text-yellow-400" size={20} />
//                             <div>
//                                 <span className="font-bold">Customizable Itineraries:</span> Choose from our curated packages or create your own adventure.
//                             </div>
//                         </li>
//                         <li className="flex items-start">
//                             <User className="mt-1 mr-3 text-yellow-400" size={20} />
//                             <div>
//                                 <span className="font-bold">Solo Traveler Friendly:</span> We cater to solo adventurers, ensuring a safe and thrilling journey.
//                             </div>
//                         </li>
//                         <li className="flex items-start">
//                             <Map className="mt-1 mr-3 text-yellow-400" size={20} />
//                             <div>
//                                 <span className="font-bold">Book Now:</span> Limited slots available for peak season rides!
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
                
//                 <div className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg mb-10 border border-yellow-500">
//                     <h2 className="text-3xl font-bold mb-6">Ride Packages</h2>
//                     <div className="mb-8">
//                         <h3 className="text-2xl font-bold mb-4">Package 1: 2 Nights Shimla + 3 Nights Manali</h3>
//                         <p className="text-lg font-semibold">Duration: 5 Days / 4 Nights | Cost: ₹17,500/- (Without Meals)</p>
//                         <ul className="list-disc pl-5">
//                             <li>Day 1: Arrive in Shimla | Local Sightseeing | Overnight Stay</li>
//                             <li>Day 2: Shimla to Kufri | Explore Kufri | Return to Shimla | Overnight Stay</li>
//                             <li>Day 3: Shimla to Manali (Via Kullu Valley) | Overnight Stay in Manali</li>
//                             <li>Day 4: Manali Local Sightseeing | Overnight Stay</li>
//                             <li>Day 5: Solang Valley Adventure | Departure</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="text-2xl font-bold mb-4">Package 2: 2 Nights Shimla + 3 Nights Manali + 1 Night Dharamshala + 1 Night Dalhousie</h3>
//                         <p className="text-lg font-semibold">Duration: 7 Days / 6 Nights | Cost: ₹24,500/- (Without Meals)</p>
//                         <ul className="list-disc pl-5">
//                             <li>Day 1: Arrive in Shimla | Local Sightseeing | Overnight Stay</li>
//                             <li>Day 2: Shimla to Kufri | Explore Kufri | Return to Shimla | Overnight Stay</li>
//                             <li>Day 3: Shimla to Manali (Via Kullu Valley) | Overnight Stay in Manali</li>
//                             <li>Day 4: Manali Local Sightseeing | Overnight Stay</li>
//                             <li>Day 5: Manali to Dharamshala (Via Bir-Billing) | Overnight Stay in Dharamshala</li>
//                             <li>Day 6: Dharamshala to Dalhousie | Visit Khajjiar | Overnight Stay in Dalhousie</li>
//                             <li>Day 7: Dalhousie Local Sightseeing | Departure</li>
//                         </ul>
//                     </div>
//                 </div>
//                        {/* Why Choose Section */}
//                 <div className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg mb-10 border border-yellow-500">
//                     <h2 className="text-3xl font-bold mb-6 flex items-center">
//                         <CheckCircle className="mr-3 text-yellow-400" size={24} /> 
//                         Why Choose Xploroo?
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div className="bg-gray-800 p-6 rounded-lg">
//                             <h3 className="text-xl font-bold mb-2">Solo Traveler Focus</h3>
//                             <p>Tailored bike tours for solo adventurers who want to explore at their own pace.</p>
//                         </div>
//                         <div className="bg-gray-800 p-6 rounded-lg">
//                             <h3 className="text-xl font-bold mb-2">Flexible Itineraries</h3>
//                             <p>Customize your trip as per your preferences, time constraints, and adventure appetite.</p>
//                         </div>
//                         <div className="bg-gray-800 p-6 rounded-lg">
//                             <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
//                             <p>Experienced riders and guides ensure a safe and enjoyable journey through the mountains.</p>
//                         </div>
//                         <div className="bg-gray-800 p-6 rounded-lg">
//                             <h3 className="text-xl font-bold mb-2">Affordable Packages</h3>
//                             <p>Premium experiences at unbeatable prices, with transparent pricing and no hidden costs.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="text-center mt-12 mb-8">
//                     <h2 className="text-4xl font-bold text-yellow-400 mb-6">Ready to Ride?</h2>
//                     <p className="text-xl mb-8">Grab your helmet, rev up your bike, and join us for an epic ride through Himachal Pradesh.</p>
//                     <div className="bg-yellow-500 text-black p-8 rounded-xl shadow-lg inline-block">
//                         <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
//                         <p className="flex items-center justify-center"><Phone className="mr-3" size={20} /> <span><strong>Call Us:</strong> +918091595344</span></p>
//                         <p className="flex items-center justify-center"><Mail className="mr-3" size={20} /> <span><strong>Email Us:</strong> info@xploroo.com</span></p>
//                         <p className="flex items-center justify-center"><Globe className="mr-3" size={20} /> <span><strong>Visit Us:</strong> <a href="https://www.xploroo.in" className="text-black font-bold underline">www.xploroo.in</a></span></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Blog7;



import { generateMetadata } from "../sharedMetadata";
import Blog6Content from "./Blog7Content";

export const metadata = generateMetadata({
  title: 'Xploroo Ride Packages',
  description: 'Unleash the Adventurer in You!',
 
});

export default function Blog6Page() {
  return <Blog6Content />;
}