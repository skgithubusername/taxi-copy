

import Image from 'next/image';
import { FaTaxi, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: "1. Calangute Beach",
    description: `Often referred to as the "Queen of the Beach," Calangute Beach is one of the best-known and most populous beaches of Goa. With its sandy beaches, beach shacks, and water sporting adventures, it's a perfect spot for relaxation and for pursuing adventurous experiences.`,
    image: "/img/blog/blog1.jpg",
    subdescription: "How to Reach There via Taxi: Your cab can drop you on Calangute Beach from anywhere in Goa. Our drivers use the shortest and best possible route, avoiding traffic, and drop you there, and then, after your beach experience, drop you wherever you want.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹700-₹900" },
      { location: "From Baga Beach", price: "₹300-₹500" },
      { location: "From Dabolim Airport", price: "₹1,000-₹1,200" }
    ]
  },
  {
    id: 2,
    title: "2. Baga Beach",
    description: "Close to Calangute, Baga beach is a happening and trendy destination with its water sports and nightlife. The beach has parasailing and jet-skiing, and there are plenty of discotheques and bars for a night of merriment.",
    image: "/img/blog/blog2.jpg",
    subdescription: "How to Approach: From anywhere in Goa, Baga Beach can be easily reached with a cab. We can drop you on the beach directly, and with our transportation, you can avail of the maximum of your visit with minimal transit.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹800-₹1,000" },
      { location: "From Calangute Beach", price: "₹200-₹400" },
      { location: "From Dabolim Airport", price: "₹1,200-₹1,500" }
    ]
  }
  ,
  {
    id: 3,
    title: "3. Dudhsagar Falls",
    description: "For nature lovers, Dudhsagar Falls, with its spectacular scenery, is not to be missed. Set in the Bhagwan Mahavir Wildlife Sanctuary, these massive waterfalls rank among India's highest and are worth beholding.",
    image: "/img/blog/blog3.jpg",
    subdescription: "How to Approach Dudhsagar Falls by Taxi: To reach Dudhsagar Falls by taxi is an experience in itself. You can be dropped on the waterfalls' ground, and then take a small trek or jeep ride up towards the cascades. Our taxis can take you on the best possible paths towards this natural wonder.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹1,500-₹2,000" },
      { location: "From Calangute/Baga", price: "₹1,700-₹2,100" },
      { location: "From Dabolim Airport", price: "₹2,000-₹2,500" }
    ]
  }
  ,
  {
    id: 4,
    title: "4. Fort Aguada",
    description: "Built by the Portuguese in the 17th century, Fort Aguada has been a symbol of historical importance in Goa. With its scenic views of the Arabian Sea, and containing a lighthouse, this fort must be on every history enthusiast's and photographer's bucket list.",
    image: "/img/blog/blog4.png",
    subdescription: "How to Approach by Taxi: Your cab will directly drop you into Fort Aguada, and you can relax and take scenic views on your way. The fort can be easily accessed, and our drivers will take you there without wasting your valuable time.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹600-₹800" },
      { location: "From Baga Beach", price: "₹300-₹500" },
      { location: "From Dabolim Airport", price: "₹1,000-₹1,300" }
    ]
  }
  ,
  {
    id: 5,
    title: "5. Anjuna Beach",
    description: "Known for its bohemian feel, Anjuna Beach has a fame for its markets, its legendary trance events, and its natural landscape. It's a perfect spot for partygoers, for trekkers, and for individuals on the lookout for a relaxing experience.",
    image: "/img/blog/blog5.jpg",
    subdescription: "How to Get There with a Taxi: From whereever you are in Goa, take a taxi and be dropped on the beach, or more regularly, near Anjuna's main attractions including the Anjuna Flea Market. Your journey will be easy and convenient, and with plenty of scenery to view, sit and relax.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹900-₹1,200" },
      { location: "From Baga Beach", price: "₹500-₹700" },
      { location: "From Dabolim Airport", price: "₹1,200-₹1,500" }
    ]
  }
  ,
  {
    id: 6,
    title: "6. Basilica of Bom Jesus",
    description: "A UNESCO heritage site, Church of Bom Jesus is one of Goa's earliest churches, and its glory consists of being the final resting ground of St. Francis Xavier's earthly remains. The lovely architecture and serene atmosphere of the church result in this being a must-visit for history and culture enthusiasts.",
    image: "/img/blog/blog6.png",
    subdescription: "How to Reach There by Taxi: A cab journey from Old Goa, where the Basilica stands, can take you there in luxury and relaxation. Our expert drivers will drop you there on time, giving you more time for church and surrounding exploration.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹600-₹700" },
      { location: "From Calangute/Baga", price: "₹900-₹1,200" },
      { location: "From Dabolim Airport", price: "₹1,000-₹1,200" }
    ]
  }
  ,
  {
    id: 7,
    title: "7. Vasco da Gama",
    description: "Named after the famous Portuguese explorer, Vasco da Gama town of Goa has a heritage steeped in Portuguese history. Tourists can walk on the scenic harbor, shop from markets, and learn about Goa's maritime history.",
    image: "/img/blog/blog7.jpg",
    subdescription: "How to Approach by Taxi: A cab from whichever location of Goa, be it Old Goa, Goa, Baga, Calangute, Candolim, Anjuna, Morjim, Ashwem, Mandrem, Morjim, Ashwem, Mandrem, Baga, Calangute, Candolim, Anjuna, Morjim, Ashwem, Mand",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹800-₹1,000" },
      { location: "From Calangute ", price: "₹1,100-₹1,300" },
      { location: "From Dabolim Airport", price: "₹400-₹600" }
    ]
  }
  ,
  {
    id: 8,
    title: "8. Chapora Fort",
    description: "Famously featured in the Bollywood film Dil Chahta Hai, Chapora Fort offers beautiful views of the Arabian Sea and of Vagator Beach. The fort ruins and its scenic setting lure tourists.",
    image: "/img/blog/blog8.jpg",
    subdescription: "How to Approach with a Taxi: Chapora Fort can be reached with a short cab ride. Our transportation drops you directly outside the fort entrance, and our drivers will even recommend where photos can be best taken.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹800-₹1,000" },
      { location: "From Baga Beach", price: "₹500-₹700" },
      { location: "From Dabolim Airport", price: "₹1,300-₹1,600" }
    ]
  }
  ,
  {
    id: 9,
    title: "9. Miramar Beach",
    description: "If you're searching for a more peaceful beach experience, Miramar Beach is where you should be. Close to Panaji, this beach provides a peaceful beach experience for evening strolls and relaxation.",
    image: "/img/blog/blog9.jpg",
    subdescription: "How to Get There with a Taxi: Miramar Beach can be accessed with ease from the town and other tourist spots with a taxi. With our taxi, you can ride in style and relax, without worrying about transportation hassles.",
    subtitle: "Approximate Taxi Rate",
    fares: [
      { location: "From Panaji", price: "₹300-₹400" },
      { location: "From Calangute", price: "₹800-₹1,000" },
      { location: "From Dabolim Airport", price: "₹1,000-₹1,200" }
    ]
  }
  ,
  // {
  //   id: 10,
  //   title: "10. Spice Plantations",
  //   description: "Goa is also renowned for its spice plantations, where tourists can take plantation tours of the lovely plantations, learn of the range of spices grown there, and even taste some of the traditional Goan foods made with freshly ground spice.",
  //   // image: "/img/blog/blog10.jpg",
  //   subdescription: "How to Approach with a Taxi: Spice plantations are located within Goa, and the best way of approach towards such organic plantations is through a rented taxi. Our drivers understand the best approaches towards such plantations, and your ride becomes smooth and comfortable.",
  //   subtitle: "Approximate Taxi Rate",
  //   fares: [
  //     { location: "From Panaji", price: "₹800-₹1,200" },
  //     { location: "From Baga", price: "₹1,000-₹1,300" },
  //     { location: "From Dabolim Airport", price: "₹1,500-₹1,800" }
  //   ]
  // }
];

export default function Blog1() {
  return (
    <div className="bg-black min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-3xl lg:text-5xl font-bold text-yellow-400 text-center mb-6 flex items-center justify-center">
           Top 10 Tourist Sites in Goa and How to Get There with a Taxi
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Goa is a paradise for tourists with its sun, beach, and history blended in perfect proportion. Whether there for its beaches, cultural heritage, or landscapes, there's something for every tourist in this beach state. The best way to explore Goa is with a reliable taxi service. Below are the top 10 must-visit tourist spots in Goa along with taxi service details and approximate fares.
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
              <h2 className="text-3xl font-semibold text-yellow-400 mb-3 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {blog.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">{blog.description}</p>
              <p className="text-yellow-400 font-medium italic mb-4">{blog.subdescription}</p>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <FaTaxi className="text-yellow-400 mr-2" /> {blog.subtitle}
                </h3>
                <ul className="space-y-2">
                  {blog.fares.map((fare, index) => (
                    <li key={index} className="flex justify-between text-gray-300">
                      <span className="font-medium flex items-center">
                        <FaMapMarkerAlt className="text-yellow-400 mr-2 text-sm" />
                        {fare.location}:
                      </span>
                      <span className="text-yellow-400 font-bold flex items-center">
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
      <h6 className=" lg:text-lg  font-bold text-yellow-400 text-center mb-6 flex items-center justify-center">
        Why Choose Our Taxi Company? Traveling around Goa can be intimidating, be it on narrow lanes, congested roadways, or uncharted paths. This is where we take the effort of helping your journey towards these must-see attractions. Comfortable Rides: We utilise a variety of comfortable, air-conditioned taxis, promised to leave you comfortable on every ride. Experienced Drivers: Our drivers are professional and know the best ways, assuring your arrival promptly and securely. Affordable Packages: We offer beautiful packages and rates for tours and day trips, and our packages can be customized, allowing you to explore Goa on your terms. Convenience: Whether you're bound for the beach, a historical landmark, or a secluded waterfall, our taxis will take you directly there, saving your time and effort. Make your Goa holiday truly unforgettable with our comfortable and reliable taxi service. Chill, sit back, and leave the rest with us—your dream Goa holiday starts with us! This blog also provides approximate costs for each destination, helping future clients more realistically budget their trips.
        </h6>
    </div>
  );
}