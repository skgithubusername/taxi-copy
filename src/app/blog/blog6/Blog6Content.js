"use client";


import { FaPhone } from "react-icons/fa";

export default function Blog4Content() {
    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Ultimate Bike Ride Adventure in Himachal Pradesh!",
              text: "Check out this amazing bike adventure with Xploroo Taxi! 🏍✨",
              url: window.location.href,
            });
          } catch (error) {
            console.error("Error sharing:", error);
          }
        } else {
          alert("Sharing not supported on this browser. You can copy the link manually!");
        }
      };

  return (
    <div className=" bg-teal-900 min-h-screen">
       
   
       
   
         <main className="container mx-auto px-4 py-8">
           {/* Hero Section */}
           <section className=" text-white  p-6 md:p-12 mb-12">
             <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Ultimate Bike Ride Adventure in Himachal Pradesh!</h2>
               <p className="text-lg md:text-xl mb-8">
               Are you a solo traveler dreaming of exploring the breathtaking landscapes of Himachal Pradesh but don&rsquot know how to ride a bike? Worry not! *Xploroo Taxi* is here to make your dream come true! We are the *first-ever company* offering affordable, safe, and hassle-free bike ride rental packages tailored especially for solo travelers like you.  
   
               </p>
             
             </div>
           </section>
   
           
           <section className="mb-12">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Why Choose Xploroo Taxi?</h3>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Card 1 */}
               <div className="text-black border-l-4 border-teal-400 shadow-lg p-6 rounded-lg">
                 <h4 className="text-xl font-bold text-teal-400 mb-4">No Bike Riding Skills? No Problem!</h4>
                 <p className="text-gray-200">
                   
                   Whether you&rsquo;re a non-rider or simply prefer to sit back and enjoy the ride, our experienced drivers will take you through the stunning hills of Himachal Pradesh with complete safety and reliability. 
                 </p>
               </div>
               
               {/* Card 2 */}
               <div className="text-black border-l-4 border-teal-400 shadow-lg p-6 rounded-lg">
                 <h4 className="text-xl font-bold text-teal-400 mb-4">All-Inclusive Packages</h4>
                 <p className="text-gray-200 mb-4">
                   We offer <span className="font-bold">complete packages</span> starting from Chandigarh, including:
                 </p>
                 <ul className="list-disc pl-5 text-gray-200">
                   <li>Comfortable <span className="font-bold">hotel stays</span></li>
                   <li>Scenic <span className="font-bold">bike rides</span></li>
                   <li>Delicious <span className="font-bold">food</span></li>
                   <li>Full <span className="font-bold">sightseeing</span> of iconic destinations</li>
                 </ul>
               </div>
               
               {/* Card 3 */}
               <div className=" border-l-4 border-teal-400 shadow-lg p-6 rounded-lg">
                 <h4 className="text-xl font-bold text-teal-400  mb-4">Affordable & Easy on Pocket</h4>
                 <p className="text-gray-200">
                   Traveling on a budget? Our packages are designed to be <span className="font-bold">light on your wallet</span> without compromising on quality or fun.
                 </p>
               </div>
               
               {/* Card 4 */}
               <div className=" border-l-4 border-teal-400 shadow-lg p-6 rounded-lg">
                 <h4 className="text-xl font-bold text-teal-400 mb-4">Hilly Areas? We&rsquo;ve Got You Covered!</h4>
                 <p className="text-gray-200">
                   Navigating through hilly terrains and traffic can be challenging, but our <span className="font-bold">experienced drivers</span> ensure a smooth and safe journey.
                 </p>
               </div>
               
               {/* Card 5 */}
               <div className=" border-l-4 border-teal-400 shadow-lg p-6 rounded-lg">
                 <h4 className="text-xl font-bold text-teal-400  mb-4">Wide Range of Bikes</h4>
                 <p className="text-gray-200">
                   Choose from a variety of bikes available at <span className="font-bold">affordable prices</span> to suit your style and comfort.
                 </p>
               </div>
             </div>
           </section>
   
           {/* Adventure Section */}
           <section className="bg-black text-teal-400 rounded-lg shadow-xl p-6 md:p-12 mb-12">
             <div className="max-w-4xl mx-auto text-center">
               <h3 className="text-2xl md:text-3xl font-bold mb-6">Explore Himachal Pradesh Like Never Before!</h3>
               <p className="text-lg mb-8">
                
                 This summer, embark on an unforgettable adventure with Xploroo Taxi. From the lush green valleys to the snow-capped peaks, we’ll take you to the most mesmerizing spots in Himachal Pradesh. 
               </p>
               <h3 className="text-2xl md:text-3xl font-bold mb-6">What Are You Waiting For?</h3>
               <p className="text-lg mb-8">
                 Don&rsquo;t miss out on this incredible opportunity to explore the mountains in the most unique and affordable way. <span className="font-bold">Book now</span> by enquiring about our packages and get ready for the ride of a lifetime!
               </p>
              
             </div>
           </section>
           
           {/* Call to Action */}
           <section className="text-center mb-12">
             <h3 className="text-2xl md:text-4xl font-bold text-teal-400  mb-6">
               Xploroo Taxi – Where Adventure Meets Affordability! 🏍✨
             </h3>
             <p className="text-lg text-gray-200 mb-8 text-center">
     Contact us today to plan your perfect summer getaway!
     <div className="flex justify-center items-center mt-4">
       <a
         href="tel:+918091595344"
         className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-bold rounded-full shadow-lg hover:bg-teal-600 hover:shadow-xl transition-all duration-300 ease-in-out"
       >
         <FaPhone size={20} /> Call Now
       </a>
     </div>
   </p>
   
            
   
                {/* Single Share Button */}
           <section className="text-center mb-12">
             <button
               onClick={handleShare}
               className="px-6 py-3 bg-teal-400 text-black font-bold rounded-lg shadow-lg hover:bg-teal-500 transition"
             >
               📤 Share This Blog
             </button>
           </section>
           </section>
         </main>
   
        
       </div>
  );
}
