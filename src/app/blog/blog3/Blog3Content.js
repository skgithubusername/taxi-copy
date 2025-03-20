"use client";
import { FaCar, FaMapMarkerAlt, FaShieldAlt, FaGasPump, FaEye, FaMountain, FaDollarSign } from "react-icons/fa";

export default function Blog3Content() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
            title: 'Why Choose a Local Himachal Pradesh Taxi Over Renting a Vehicle?    ',
            text: 'Discover why booking a local Himachal Pradesh taxi service is better than renting a vehicle. Enjoy convenience, safety, and a hassle-free travel experience in the mountains!    ',
           
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
     <div className="bg-teal-900  text-white p-8 min-h-screen">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl text-white font-bold text-center mb-6">Why Booking a Local Himachal Pradesh Taxi Service is Better Than Renting a Vehicle  </h2>
         <p className=" text-teal-100">Himachal Pradesh, with its breathtaking mountains, serene valleys, and vibrant culture, is a dream destination for travelers. While renting a vehicle might seem like a good idea for independent exploration, hiring a local taxi service offers unmatched comfort, safety, and convenience. Here’s why choosing a cab in Himachal Pradesh is a smarter choice than renting a vehicle.  </p>
         
         <div className="grid my-12 grid-cols-1 md:grid-cols-2 gap-6 ">
           <BenefitItem icon={<FaCar />} title="No Parking Hassles" description="Finding parking in popular tourist spots like Manali, Shimla, or Dharamshala can be a nightmare, especially during peak seasons. With a taxi, you don’t have to worry about parking spaces or paying hefty parking fees. Simply hop in, enjoy your trip, and let your driver handle the rest.  " />
           
           <BenefitItem icon={<FaMapMarkerAlt />} title="Local Driver Expertise" description="Himachal Pradesh’s winding mountain roads and hidden gems are best navigated by someone who knows the terrain. Our local drivers are familiar with the shortest routes, traffic patterns, and offbeat attractions that you might miss if you drive on your own. " />
           
           <BenefitItem icon={<FaShieldAlt />} title="Safety and Convenience" description="Driving on steep, narrow mountain roads can be challenging, especially if you’re not used to such terrain. With a hired cab, you’re in the hands of a professional driver who ensures a safe and comfortable journey, allowing you to relax and enjoy the scenic beauty.  " />
           
           <BenefitItem icon={<FaGasPump />} title="No Stress Over Fuel and Maintenance" description="When you hire a taxi, you don’t have to worry about fuel costs, vehicle maintenance, or unexpected breakdowns. Your fare covers everything, so you can focus on enjoying your trip without any financial surprises.  " />
           
           <BenefitItem icon={<FaEye />} title="Enjoy the Journey Without Distractions" description="Driving in Himachal Pradesh means navigating sharp curves, unpredictable weather, and occasional traffic. With a taxi, you can sit back, relax, and soak in the stunning views of the mountains and valleys without any distractions" />
           
           <BenefitItem icon={<FaMountain />} title="Perfect for Sightseeing and Long Trips" description="Himachal Pradesh is all about exploring its diverse landscapes, from snow-capped peaks to lush green valleys. A taxi allows you to hop from one destination to another effortlessly, whether you’re visiting temples, trekking spots, or scenic viewpoints.  " />
           
           <BenefitItem icon={<FaDollarSign />} title="Flexible and Affordable Options" description="Local taxi services in Himachal Pradesh offer a range of packages, from hourly rentals to full-day tours. Whether you’re on a tight budget or looking for a luxurious experience, there’s a cab option to suit your needs.  " />
         </div>
         
         <div className="text-center mt-8">
           <h2 className="text-2xl font-bold">Final Verdict: Taxi Service Wins!</h2>
           <p className="mt-2">While renting a car might offer a sense of freedom, the benefits of hiring a taxi—no parking worries, local expertise, enhanced safety, and overall convenience—make it the better choice. Whether you’re traveling solo, as a couple, or in a group, booking a taxi ensures a smooth and stress-free experience in Himachal Pradesh.  </p>
           <p className="mt-2">Book Your Taxi Today!Let us handle your transportation while you focus on enjoying the beauty of Himachal Pradesh. Sit back, relax, and leave the driving to us!  </p>
          
         </div>
       </div>

         {/* Single Share Button */}
         <section className=" mt-8 text-center mb-12">
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



const BenefitItem = ({ icon, title, description }) => {
    return (
      <div className="flex items-center space-x-4 bg-white text-teal-500 p-4 rounded-lg shadow-md hover:shadow-teal-200">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-xl text-teal-900 font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };
