"use client";
import Image from 'next/image';
import { FaTaxi, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

export default function Blog1Content() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
             title: 'Top 10 Tourist Sites in Himachal Pradesh and How to Get There with a Taxi  ',
  text: 'Explore the top 10 must-visit tourist spots in Himachal Pradesh with our reliable taxi service. Discover how to reach these destinations comfortably and affordably!  ',
 
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported on this browser. You can copy the link manually!");
    }
  };



  const blogs = [
    {
      id: 1,
      title: "Shimla – The Queen of Hills",
      image: "/img/blog/blog1.jpg",
      description: "Shimla, the capital of Himachal Pradesh, is famous for its colonial architecture, Mall Road, and scenic views of the Himalayas. It’s a perfect blend of history and natural beauty.  ",
      subdescription: "How to Reach There via Taxi: Our taxi service will pick you up from your location and take you to Shimla via the most scenic routes. Whether you're coming from Delhi, Chandigarh, or nearby towns, we ensure a comfortable ride.  ",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹3,000-₹4,000" },
        { location: "From Delhi", price: "₹7,000-₹9,000" },
        { location: "From Manali", price: "₹5,000-₹6,500" }
      ]
    },
    {
      id: 2,
      title: "Manali – Adventure and Serenity",
      image: "/img/blog/blog2.jpg",
      description: "Manali is a hub for adventure enthusiasts and nature lovers. From Solang Valley to Rohtang Pass, this destination offers thrilling activities and breathtaking views.",
      subdescription: "How to Reach There via Taxi: Our drivers will take you through the winding roads of the Himalayas, ensuring a safe and enjoyable journey to Manali.  ",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹4,500-₹6,000" },
        { location: "From Delhi", price: "₹8,000-₹10,000" },
        { location: "From Shimla", price: "₹5,000-₹6,500" }
      ]
    },
    {
      id: 3,
      title: "Dharamshala and McLeodganj – The Land of the Dalai Lama",
      image: "/img/blog/blog3.jpg",
      description: "Dharamshala and McLeodganj are known for their Tibetan culture, monasteries, and serene landscapes. The Dalai Lama’s residence and the Bhagsu Waterfall are major attractions.",
      subdescription: "How to Reach There via Taxi: Our taxis will take you directly to these peaceful destinations, allowing you to relax and enjoy the scenic beauty",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹3,500-₹5,000" },
        { location: "From Delhi", price: "₹7,500-₹9,500" },
        { location: "From Manali", price: "₹6,000-₹7,500" }
      ]
    },
    {
      id: 4,
      title: "Spiti Valley – A Desert Mountain Wonderland",
      image: "/img/blog/blog7.jpg",
   
      description: "Spiti Valley is a remote and stunning destination known for its rugged landscapes, ancient monasteries, and clear skies.",
      subdescription: "How to Reach There via Taxi: Our experienced drivers will navigate the challenging roads of Spiti Valley, ensuring a safe and memorable journey.",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Manali", price: "₹6,000-₹8,000" },
        { location: "From Shimla", price: "₹8,000-₹10,000" }
      ]
    },
    {
      id: 5,
      title: "Kasol – The Mini Israel of India",
      image: "/img/blog/blog6.jpg",
      description: "Kasol is a paradise for backpackers, trekkers, and nature lovers. It’s also the gateway to treks like Kheerganga and Tosh.",
      subdescription: "How to Reach There via Taxi: Our taxis will take you through the picturesque Parvati Valley, offering stunning views along the way.  ",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹3,500-₹5,000" },
        { location: "From Delhi", price: "₹7,000-₹9,000" },
        { location: "From Manali", price: "₹2,500-₹3,500" }
      ]
    },
    {
      id: 6,
      title: "Dalhousie – A Colonial Gem",
      image: "/img/blog/blog4.jpg",
      description: "Dalhousie is known for its colonial charm, lush greenery, and panoramic views of the Dhauladhar Range.",
      subdescription: "How to Reach There via Taxi: Our drivers will take you through the scenic routes to Dalhousie, ensuring a comfortable and relaxing journey.  ",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹4,000-₹5,500" },
        { location: "From Delhi", price: "₹8,000-₹10,000" }
      ]
    },
    {
      id: 7,
      title: "Kullu – The Valley of Gods",
      image: "/img/blog/blog11.jpg",
      description: "Kullu is famous for its temples, apple orchards, and the Beas River. It’s a great destination for those seeking peace and natural beauty.",
      subdescription: "How to Reach There via Taxi: Our taxis will take you through the lush green valleys of Kullu, offering a serene travel experience.  ",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹4,000-₹5,500" },
        { location: "From Delhi", price: "₹7,500-₹9,500" }
      ]
    },
    {
      id: 8,
      title: "Chail – A Quiet Hill Station",
      image: "/img/blog/blog9.jpg",
      description: "Chail is known for its peaceful environment, the world’s highest cricket ground, and the stunning Chail Palace.",
      subdescription: "Enjoy a relaxing getaway to Chail.",
      subtitle: "How to Reach There via Taxi: Our drivers will take you through the quiet and scenic roads to Chail, ensuring a relaxing journey.  ",
      fares: [
        { location: "From Chandigarh", price: "₹3,000-₹4,500" },
        { location: "From Shimla", price: "₹1,500-₹2,500" }
      ]
    },
    {
      id: 9,
      title: "Kinnaur – The Land of Apples",
      image: "/img/blog/blog5.jpg",
      description: "Kinnaur is famous for its apple orchards, ancient temples, and the stunning Kinnaur Kailash range.",
      subdescription: "How to Reach There via Taxi: Our experienced drivers will navigate the challenging roads of Kinnaur, ensuring a safe and enjoyable journey.  ",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Shimla", price: "₹6,000-₹8,000" }
      ]
    },
    {
      id: 10,
      title: "Bir Billing – The Paragliding Capital",
      image: "/img/blog/blog10.jpg",
      description: "Bir Billing is a hub for paragliding and adventure sports. It’s also known for its Tibetan monasteries and serene environment.",
      subdescription: "How to Reach There via Taxi: Our taxis will take you through the scenic routes to Bir Billing, offering a comfortable and enjoyable ride.",
      subtitle: "How to Reach There via Taxi",
      fares: [
        { location: "From Chandigarh", price: "₹4,000-₹5,500" },
        { location: "From Delhi", price: "₹7,500-₹9,500" }
      ]
    }
  ];
    return (
      // <div className="bg-black min-h-screen py-8 px-4">
      //   <div className="max-w-6xl mx-auto">
      //     <h1 className=" text-3xl lg:text-5xl font-bold text-yellow-400 text-center mb-6 flex items-center justify-center">
      //     Top 10 Tourist Sites in Himachal Pradesh and How to Get There with a Taxi  
      //     </h1>
      //     <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
      //     Himachal Pradesh, with its majestic mountains, serene valleys, and rich cultural heritage, is a paradise for travelers. Whether you&apos;re here for the snow-capped peaks, ancient temples, or lush landscapes, there&apos;s something for everyone in this beautiful state. The best way to explore Himachal Pradesh is with a reliable taxi service. Below, we’ve listed the top 10 must-visit tourist spots in Himachal Pradesh, along with how our taxi service can make your journey seamless and enjoyable.  
      //     </p>
          
         
      //     {blogs.map((blog, index) => (
      //       <div key={blog.id} className="mb-24 flex flex-col md:flex-row items-center gap-8">
      //         <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : ''}`}>
      //           <Image
      //             src={blog.image}
      //             width={600} 
      //             height={400} 
      //             alt={blog.title} 
      //             className="object-cover rounded-lg shadow-lg w-full"
      //           />
      //         </div>
      //         <div className="w-full md:w-1/2">
      //           <h2 className="text-3xl font-semibold text-yellow-400 mb-3 flex items-center">
      //             <FaMapMarkerAlt className="mr-2" /> {blog.title}
      //           </h2>
      //           <p className="text-gray-300 leading-relaxed mb-4">{blog.description}</p>
      //           <p className="text-yellow-400 font-medium italic mb-4">{blog.subdescription}</p>
                
      //           <div className="border-l-4 border-yellow-500 pl-4">
      //             <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
      //               <FaTaxi className="text-yellow-400 mr-2" /> {blog.subtitle}
      //             </h3>
      //             <ul className="space-y-2">
      //               {blog.fares.map((fare, index) => (
      //                 <li key={index} className="flex justify-between text-gray-300">
      //                   <span className="font-medium flex items-center">
      //                     <FaMapMarkerAlt className="text-yellow-400 mr-2 text-sm" />
      //                     {fare.location}:
      //                   </span>
      //                   <span className="text-yellow-400 font-bold flex items-center">
      //                     <FaRupeeSign className="mr-1 text-xs" />
      //                     {fare.price.replace('₹', '')}
      //                   </span>
      //                 </li>
      //               ))}
      //             </ul>
      //           </div>
      //         </div>
      //       </div>
      //     ))}
  
  
          
      //   </div>
  
      //    <div className=" text-gray-200 px-6 py-12 md:px-12 lg:px-24">
      //   <div className="max-w-3xl mx-auto text-center">
      //     <h2 className="text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-6">
      //       Why Choose Our Taxi Service?
      //     </h2>
      //     <p className="text-lg leading-relaxed">
      //       Traveling around <span className="text-yellow-300 font-semibold">Himachal Pradesh</span> can be challenging due to its winding roads and remote locations. That’s where we come in to make your journey smooth and hassle-free.
      //     </p>
      //   </div>
  
      //   <div className="mt-8 space-y-6 max-w-2xl mx-auto">
      //     <div className="flex items-center">
      //       <span className="text-yellow-400 text-xl mr-3">🚖</span>
      //       <p className="text-lg"><span className="text-yellow-300 font-semibold">Comfortable Rides:</span> We offer a fleet of well-maintained, air-conditioned vehicles for a comfortable travel experience.</p>
      //     </div>
  
      //     <div className="flex items-center">
      //       <span className="text-yellow-400 text-xl mr-3">👨‍✈️</span>
      //       <p className="text-lg"><span className="text-yellow-300 font-semibold">Experienced Drivers:</span> Our drivers are highly skilled and familiar with the terrain, ensuring a safe and timely journey.</p>
      //     </div>
  
      //     <div className="flex items-center">
      //       <span className="text-yellow-400 text-xl mr-3">💰</span>
      //       <p className="text-lg"><span className="text-yellow-300 font-semibold">Affordable Packages:</span> We provide customizable packages at competitive rates, making your trip budget-friendly.</p>
      //     </div>
  
      //     <div className="flex items-center">
      //       <span className="text-yellow-400 text-xl mr-3">🌍</span>
      //       <p className="text-lg"><span className="text-yellow-300 font-semibold">Convenience:</span> Whether You&apos;re heading to a hill station, a remote valley, or a serene village, our taxis will take you there directly.</p>
      //     </div>
  
      //     <div className="flex items-center">
      //       <span className="text-yellow-400 text-xl mr-3">🍱</span>
      //       <p className="text-lg"><span className="text-yellow-300 font-semibold">Complimentary Snacks & Lunch:</span> Enjoy free snacks daily and a complimentary lunch on the way <span className="text-gray-400 text-sm">(*terms and conditions apply)</span>.</p>
      //     </div>
      //   </div>
  
      //   <div className="border-t border-gray-700 my-12"></div>
  
      //   <div className="max-w-3xl mx-auto text-center">
      //     <h2 className="text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-6">
      //       Conclusion
      //     </h2>
      //     <p className="text-lg leading-relaxed">
      //       <span className="text-yellow-300 font-semibold">Himachal Pradesh</span> is a treasure trove of natural beauty and cultural heritage. With our reliable and affordable taxi service, you can explore these top 10 destinations comfortably and conveniently.
      //     </p>
      //     <p className="mt-4 text-lg font-semibold text-yellow-300">
      //       Ready to explore Himachal Pradesh? Book your taxi with us today!
      //     </p>
       
      //   </div>
      // </div>

      //   {/* Single Share Button */}
      //   <section className=" mt-8 text-center mb-12">
      //     <button
      //       onClick={handleShare}
      //       className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
      //     >
      //       📤 Share This Blog
      //     </button>
      //   </section>
      // </div>

      <div className="bg-teal-900 min-h-screen py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl lg:text-5xl font-bold text-teal-300 text-center mb-6 flex items-center justify-center">
      Top 10 Tourist Sites in Himachal Pradesh and How to Get There with a Taxi  
    </h1>
    <p className="text-teal-200 text-center mb-12 max-w-3xl mx-auto">
      Himachal Pradesh, with its majestic mountains, serene valleys, and rich cultural heritage, is a paradise for travelers. Whether you&rsquo;re here for the snow-capped peaks, ancient temples, or lush landscapes, there&rsquo;s something for everyone in this beautiful state. The best way to explore Himachal Pradesh is with a reliable taxi service. Below, we’ve listed the top 10 must-visit tourist spots in Himachal Pradesh, along with how our taxi service can make your journey seamless and enjoyable.  
    </p>
    
    {blogs.map((blog, index) => (
      <div key={blog.id} className="mb-24 flex flex-col md:flex-row items-center gap-8">
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : ''}`}> 
          <Image
            src={blog.image}
            width={600} 
            height={400} 
            alt={blog.title} 
            className="object-cover rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-teal-300 mb-3 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> {blog.title}
          </h2>
          <p className="text-teal-200 leading-relaxed mb-4">{blog.description}</p>
          <p className="text-teal-400 font-medium italic mb-4">{blog.subdescription}</p>
          
          <div className="border-l-4 border-teal-400 pl-4">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
              <FaTaxi className="text-teal-300 mr-2" /> {blog.subtitle}
            </h3>
            <ul className="space-y-2">
              {blog.fares.map((fare, index) => (
                <li key={index} className="flex justify-between text-teal-200">
                  <span className="font-medium flex items-center">
                    <FaMapMarkerAlt className="text-teal-300 mr-2 text-sm" />
                    {fare.location}:
                  </span>
                  <span className="text-teal-300 font-bold flex items-center">
                    <FaRupeeSign className="mr-1 text-xs" />
                    {fare.price.replace('₹', '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="text-teal-200 px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-300 mb-6">
        Why Choose Our Taxi Service?
      </h2>
      <p className="text-lg leading-relaxed">
        Traveling around <span className="text-teal-400 font-semibold">Himachal Pradesh</span> can be challenging due to its winding roads and remote locations. That&rsquo;s where we come in to make your journey smooth and hassle-free.
      </p>
    </div>

    <div className="mt-8 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center">
        <span className="text-teal-300 text-xl mr-3">🚖</span>
        <p className="text-lg"><span className="text-teal-400 font-semibold">Comfortable Rides:</span> We offer a fleet of well-maintained, air-conditioned vehicles for a comfortable travel experience.</p>
      </div>

      <div className="flex items-center">
        <span className="text-teal-300 text-xl mr-3">👨‍✈️</span>
        <p className="text-lg"><span className="text-teal-400 font-semibold">Experienced Drivers:</span> Our drivers are highly skilled and familiar with the terrain, ensuring a safe and timely journey.</p>
      </div>
    </div>

    <div className="border-t border-teal-600 my-12"></div>

    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-300 mb-6">
        Conclusion
      </h2>
      <p className="text-lg leading-relaxed">
        <span className="text-teal-400 font-semibold">Himachal Pradesh</span> is a treasure trove of natural beauty and cultural heritage. With our reliable and affordable taxi service, you can explore these top 10 destinations comfortably and conveniently.
      </p>
      <p className="mt-4 text-lg font-semibold text-teal-400">
        Ready to explore Himachal Pradesh? Book your taxi with us today!
      </p>
    </div>
  </div>

  <section className="mt-8 text-center mb-12">
    <button
      onClick={handleShare}
      className="px-6 py-3 bg-teal-400 text-black font-bold rounded-lg shadow-lg hover:bg-teal-500 transition"
    >
      📤 Share This Blog
    </button>
  </section>
</div>

    );
}


