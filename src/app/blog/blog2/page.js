// import React from 'react';
// import { 
//   CheckCircle, 
  
//   Users, 
//   User, 
//   DollarSign, 
//   Calendar, 
//   MapPin, 
//   Phone 
// } from 'lucide-react';




// export const metadata = {
//   title: 'Affordable Taxi Options in Himachal Pradesh for Budget Travelers    ',
//   description: 'Discover budget-friendly taxi services in Himachal Pradesh! Find low-cost rides, shared cabs, and the best ways to explore the mountains affordably.   ',
 
 
// };
// export default function HimachalTaxiService() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
//           <div className="text-center px-4">
//             <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Himachal Pradesh on a Shoestring</h1>
//             <p className="text-xl text-white my-8">Low-Cost Taxi Options for Budget Tourists</p>
//             <p className="text-lg mb-8">
//             Himachal Pradesh, with its majestic mountains, serene valleys, and rich cultural heritage, is a dream destination for every traveler. But exploring this paradise doesn&apos;t  have to be expensive. If you&apos;re planning a budget-friendly trip to Himachal Pradesh, transportation is a key factor. That&apos;s where we come in – offering affordable taxi services that let you explore Himachal without burning a hole in your pocket.
//           </p>
//           </div>
//         </div>
//       </div>


//       {/* Why Choose Us */}
//       <div className="bg-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Why Choose Our Low-Cost Taxi Services?</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="bg-black border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-yellow-400/30 transition duration-300">
//               <div className="flex items-center mb-4">
//                 <DollarSign className="h-8 w-8 text-yellow-400 mr-3" />
//                 <h3 className="text-xl font-semibold text-yellow-400">Competitive Prices and Transparent Fares</h3>
//               </div>
//               <p>We know every penny matters when you&apos;re traveling on a budget. Our taxi rates are among the most competitive in Himachal Pradesh, with no hidden charges. The price we quote is the price you pay.</p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-black border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-yellow-400/30 transition duration-300">
//               <div className="flex items-center mb-4">
//                 <Calendar className="h-8 w-8 text-yellow-400 mr-3" />
//                 <h3 className="text-xl font-semibold text-yellow-400">Customizable Packages</h3>
//               </div>
//               <p>Whether you&apos;re visiting for a weekend, a week, or longer, we offer flexible taxi packages tailored to your needs. Choose from half-day, full-day, or multi-day hires at wallet-friendly rates.</p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-black border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-yellow-400/30 transition duration-300">
//               <div className="flex items-center mb-4">
//                 <Users className="h-8 w-8 text-yellow-400 mr-3" />
//                 <h3 className="text-xl font-semibold text-yellow-400">Shared Taxi Options</h3>
//               </div>
//               <p>Traveling solo or with a small group? Our shared taxi services allow you to split the cost with fellow travelers, making your journey even more economical.</p>
//             </div>

//             {/* Card 4 */}
//             <div className="bg-black border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-yellow-400/30 transition duration-300">
//               <div className="flex items-center mb-4">
//                 <User className="h-8 w-8 text-yellow-400 mr-3" />
//                 <h3 className="text-xl font-semibold text-yellow-400">Local and Knowledgeable Drivers</h3>
//               </div>
//               <p>Our experienced drivers not only ensure a safe journey but also act as your local guides. They&apos;ll share insider tips on hidden trails, budget-friendly eateries, and offbeat attractions in Himachal Pradesh.</p>
//             </div>

//             {/* Card 5 */}
//             <div className="bg-black border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-yellow-400/30 transition duration-300">
//               <div className="flex items-center mb-4">
//                 <MapPin className="h-8 w-8 text-yellow-400 mr-3" />
//                 <h3 className="text-xl font-semibold text-yellow-400">Convenient Pick-Up and Drop-Off</h3>
//               </div>
//               <p>No need to hunt for taxi stands. We offer doorstep pickups and drop-offs, ensuring a hassle-free and comfortable travel experience.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tour Packages */}
//       <div className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Explore Himachal Pradesh Affordably with Our Taxi Packages</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Package 1 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400/30 transition duration-300 border border-yellow-400">
//               <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/img/blog/blog10.jpg')" }}></div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-yellow-400">North Himachal Tour Package (Economy Package)</h3>
//                 <p className="mb-4">Visit popular destinations like Manali, Rohtang Pass, and Solang Valley at the best rates.</p>
//                 <div className="flex justify-end">
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md transition duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Package 2 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400/30 transition duration-300 border border-yellow-400">
//               <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/img/blog/blog9.jpg')" }}></div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-yellow-400">South Himachal Cultural Tour</h3>
//                 <p className="mb-4">Discover the serene beauty of Dharamshala, McLeodganj, and Palampur, along with ancient temples and monasteries, without overspending.</p>
//                 <div className="flex justify-end">
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md transition duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Package 3 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400/30 transition duration-300 border border-yellow-400">
//               <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/img/blog/blog1.jpg')" }}></div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-yellow-400">Airport and Railway Transfers</h3>
//                 <p className="mb-4">Affordable and reliable pick-up and drop-off services from key transportation hubs like Chandigarh and Delhi.</p>
//                 <div className="flex justify-end">
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md transition duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Package 4 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400/30 transition duration-300 border border-yellow-400">
//               <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/img/blog/blog7.jpg')" }}></div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-yellow-400">Hourly Rentals</h3>
//                 <p className="mb-4">Perfect for short trips or local sightseeing, pay only for the time you use.</p>
//                 <div className="flex justify-end">
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md transition duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Money-Saving Tips */}
//       <div className="bg-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Tips to Save Money on Your Himachal Pradesh Vacation</h2>
//           <div className="max-w-3xl mx-auto">
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
//                 <p>Opt for shared taxis or group bookings to reduce costs.</p>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
//                 <p>Plan your itinerary in advance to secure the best transportation deals.</p>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
//                 <p>Travel during the off-season (monsoon or winter) for lower rates on accommodation and transport.</p>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
//                 <p>Ask our drivers for recommendations on budget-friendly eateries and free attractions.</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="bg-yellow-400 text-black py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to explore Himachal Pradesh?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">With our affordable taxi services, you can experience the magic of Himachal Pradesh without compromising on comfort or convenience. Book your ride today and embark on a memorable journey through the mountains!</p>
//           <button className="bg-black hover:bg-gray-800 text-yellow-400 font-bold py-3 px-8 rounded-full text-lg transition duration-300 flex items-center mx-auto">
//             <Phone className="mr-2 h-5 w-5" />
//             Call Now to Book
//           </button>
//           <p className="mt-6 font-bold">Ready to explore? Call us now to hire a budget-friendly cab and start your affordable adventure in Himachal Pradesh!</p>
//         </div>
//       </div>
//     </div>
//   );
// }






import { generateMetadata } from "../sharedMetadata";
import Blog2Content from "./Blog2Content";

export const metadata = generateMetadata({
  title: 'Affordable Taxi Options in Himachal Pradesh for Budget Travelers    ',
  description: 'Discover budget-friendly taxi services in Himachal Pradesh! Find low-cost rides, shared cabs, and the best ways to explore the mountains affordably.   ',
 
 
});

export default function Blog2Page() {
  return <Blog2Content />;
}
