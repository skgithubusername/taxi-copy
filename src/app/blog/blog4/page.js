// "use client";

// import { generateMetadata } from "../sharedMetadata"; // Import the function

// export const metadata = generateMetadata({
//   title: "Hidden Gems of Himachal Pradesh: Unique Sites with Easy Taxi Access",
//   description:
//     "Discover Himachal Pradesh’s hidden treasures beyond the popular destinations! Explore offbeat sites with taxi access for a unique and unforgettable travel experience.",
// });


// export default function Blog4() {
  
//     const handleShare = async () => {
//         if (navigator.share) {
//           try {
//             await navigator.share({
//               title: "Ultimate Bike Ride Adventure in Himachal Pradesh!",
//               text: "Check out this amazing bike adventure with Xploroo Taxi! 🏍✨",
//               url: window.location.href,
//             });
//           } catch (error) {
//             console.error("Error sharing:", error);
//           }
//         } else {
//           alert("Sharing not supported on this browser. You can copy the link manually!");
//         }
//       };

//   return (
//     <div className="bg-black text-yellow-400 min-h-screen p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">
//         Exploring Himachal Pradesh&rsquo;s Secrets: Unconventional Sites with Taxi Access
//       </h1>
//       <p className="text-center mb-6">
//       Himachal Pradesh is more than just its popular hill stations and snow-capped peaks. While destinations like Shimla, Manali, and Dharamshala attract most tourists, the state is home to countless hidden gems that offer a peaceful escape into nature, history, and culture. If you&rsquo;re an adventurer at heart and want to explore beyond the usual tourist trails, get ready for a surprise – because with our easy taxi booking, these magical spots are just a ride away from your doorstep.  
//       </p>
      
//       <div className="grid md:grid-cols-2 my-12 gap-6">
//         <div className="border-2 border-yellow-500  text-gray-300 p-4 rounded-lg shadow-lg">
//           <h2 className="text-2xl text-yellow-500 font-bold flex items-center">
//             ⛰ Barot Valley: A Tranquil Escape into the Wild
//           </h2>
//           <p className="mt-2">
//           Tucked away in the Mandi district, Barot Valley is one of Himachal Pradesh&rsquo;s best-kept secrets. Nestled along the Uhl River, this serene valley is perfect for those seeking peace and solitude amidst nature. Surrounded by dense forests and lush greenery, Barot offers opportunities for trout fishing, trekking, and birdwatching.  
//           </p>
//           <p className="mt-2">
//           Reaching Barot Valley can be challenging due to its remote location, but with our taxi service, you don&rsquo;t have to worry about navigating the winding roads. Our drivers will take you straight to this hidden paradise, where you can spend a peaceful day exploring its beauty.  
//           </p>
//         </div>

//         <div className=" border-2  border-yellow-500  text-gray-300 p-4 rounded-lg shadow-lg">
//           <h2 className="text-2xl text-yellow-500 font-bold flex items-center">
//             🏛 Malana Village: A Little-Known Jewel Steeped in Mystery
//           </h2>
//           <p className="mt-2">
//           While Himachal Pradesh is known for its scenic villages, Malana stands out as a unique and enigmatic destination. Located in the Parvati Valley, this ancient village is famous for its distinct culture, traditions, and breathtaking views 
//           of the Himalayas.  
//           </p>
//           <p className="mt-2">
//           For those who want to explore the lesser-known gems of Himachal, Malana is a must-visit. Our taxi service will take you to the base of the village, from where you can embark on a short trek to discover its charm. Wander through the narrow lanes, interact with the locals, and soak in the mystical aura of this secluded village.  
//           </p>
//         </div>
//       </div>
      
//      <div className="  my-12 flex justify-center items-center flex-col px-12">
//      <h2 className="text-3xl font-bold mt-8">Other Hidden Secrets You Can Uncover:</h2>
//       <ul className="list-disc list-inside mt-4 space-y-2">
//         <li><strong>Churdhar Peak: A Trekker&rsquo;s Paradise</strong>Located in the Sirmaur district, Churdhar is the highest peak in the outer Himalayas. It offers stunning panoramic views of the surrounding valleys and is a popular spot for trekking enthusiasts.   </li>
//         <li><strong>Jalori Pass:A Scenic Gateway to Serenity</strong> Situated at an altitude of 10,800 feet, Jalori Pass is a lesser-known destination that offers breathtaking views and serene surroundings. It&rsquo;s perfect for those who love nature and adventure.  </li>
//         <li><strong>Bir-Billing:The Paragliding Haven</strong>Known as the paragliding capital of India, Bir-Billing is a hidden gem that offers thrilling adventures and peaceful monasteries. It&rsquo;s an ideal spot for both adventure seekers and spiritual travelers.  </li>
//       </ul>
//      </div>
//      <div className=" my-12 flex justify-center items-center flex-col px-12">
      
//       <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Taxi Service?</h2>
//       <p className=" text-center text-gray-300">
//       Exploring Himachal Pradesh&rsquo;s hidden treasures has never been easier. With our reliable taxi service, you can enjoy a comfortable ride to some of the state&rsquo;s most offbeat and beautiful destinations.  
//       </p>
//       <ul className="list-disc list-inside mt-4 space-y-2">
//         <li><strong>Local Expertise:</strong> Our professional drivers know every corner of Himachal Pradesh, ensuring a smooth and hassle-free journey.  </li>
//         <li><strong>Comfort & Convenience:</strong> Skip the stress of renting a car and navigating unfamiliar roads. Our air-conditioned, comfortable taxis let you relax and enjoy the ride.   </li>
//         <li><strong>Flexible Travel:</strong> Whether you need a half-day tour or a multi-day trip, we offer customizable packages to suit your schedule and preferences.  </li>
//         <li><strong>Affordable Rates:</strong> We provide high-quality service at budget-friendly rates, so you can explore Himachal without breaking the bank.  </li>
//       </ul>
//      </div>
      
//       <h2 className="text-3xl text-center font-bold mt-8">Conclusion</h2>
//       <p className="mt-4 text-center ">
//         Himachal Pradesh&rsquo;s lesser-known attractions are waiting to be discovered, and there&rsquo;s no better way to explore them than with our trusted taxi service. From the tranquil Barot Valley to the mysterious Malana Village, we’re here to take you on a journey of a lifetime.
//       </p>
      
//       <div className="text-center mt-8">
//         <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500">
//           🚗 Book Your Taxi Today and Uncover the Hidden Beauty of Himachal Pradesh!
//         </button>
//       </div>

//            {/* Single Share Button */}
//            <section className="text-center mb-12">
//           <button
//             onClick={handleShare}
//             className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
//           >
//             📤 Share This Blog
//           </button>
//         </section>
//     </div>
//   );
// }
















import { generateMetadata } from "../sharedMetadata";
import Blog4Content from "./Blog4Content";

export const metadata = generateMetadata({
  title: "Hidden Gems of Himachal Pradesh: Unique Sites with Easy Taxi Access",
  description:
    "Discover Himachal Pradesh’s hidden treasures beyond the popular destinations! Explore offbeat sites with taxi access for a unique and unforgettable travel experience.",
});

export default function Blog4Page() {
  return <Blog4Content />;
}
