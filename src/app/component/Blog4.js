

import Head from 'next/head';
import Image from 'next/image';

export default function GoaTaxi() {
  return (
    <div className="bg-black text-yellow-400 min-h-screen p-6">
      <Head>
        <title>Affordable Taxi Options in Goa for Budget Travelers</title>
        <meta name="description" content="- Explore budget-friendly taxi options in Goa! Find low-cost rides, shared cabs, and the best ways to travel affordably while enjoying your trip." />
      </Head>
      
      <h1 className="text-3xl text-center my-8  font-bold mb-20">
      Goa on a Shoestring: Low-Cost Taxi Options for Budget Tourists
          </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
     
        <div className="md:w-1/2 mb-12">
          
          <p>
          Goa, with its beaches, its sun, and its vibrant cultural heritage, has been every tourist's dream destination. But this paradise need not be expensive. If your low-budget holiday in Goa has been on your mind, then transportation becomes the deciding factor. That's where we take charge – with our low-priced taxis, where Goa can be explored without shelling out a fortune for your journey.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/img/blog/blog11.jpg" alt="Goa Taxi Service" width={500} height={300} className="rounded-lg" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8 space-y-6">
      <h2 className="text-3xl text-center my-8  font-bold mb-20">
      Why Choose Our Low-Cost Taxi Services
          </h2>
        <section>
          <h3 className="text-2xl font-semibold">1. Competitive Prices and Transparent Fares</h3>
          <p>We understand that every rupee counts when you're on a shoestring when on the road. Our cab rates are among the best rates in Goa, with nothing extra charged. Whatever rate we quote, this is what you end up paying.</p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold">2. Customizable Packages</h3>
          <p>Whether you're staying for a weekend, for a whole week, or anything in between, we've got personalized packages of taxis for your needs. Choose from half-day, full-day, even multi-day hire for rates easy on your wallet.</p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold">3. Shared Taxi Options</h3>
          <p>Traveling solo, with a small group, or with friends and family, our group taxis allow you to share the ride and share the expense.</p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold">4.Local and Knowledgeable Drivers</h3>
          <p>Our experienced drivers not only take you to your destination safely, but also act as your guides, sharing with you insider tips on hidden gems, cheap eats, and free attractions in Goa.</p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold">5.Convenient Pick-Up and Drop-Off</h3>
          <p>No need for searching for the nearest cab stand. We organize doorstep pickups and drop-offs, and your journey becomes smooth and convenient.</p>
        </section>
        
        
      </div>
      <section className="my-12 mt-20 px-8 text-center">
  <h3 className="text-xl lg:text-4xl mb-8 font-semibold">
    Final Verdict: Taxi Service Wins!
  </h3>
  <p className="mb-4">
    While renting a car provides freedom, the perks of booking a cab—no parking troubles, familiarity with the locality, enhanced safety, and overall convenience—rank this higher. Whether you're a couple, single, or group, booking a cab translates into a smooth and hitch-free Goa experience.
  </p>
  <p className="text-lg font-semibold text-gray-300 mt-4">
    Book Your Taxi Today!
  </p>
  <p className="mb-8">
    Let us arrange your transportation and leave the worry of driving for someone else. Enjoy the best of Goa without the hassles of driving.
  </p>

  <div className="bg-black-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
    <h4 className="text-2xl font-semibold text-black-800 mb-6">
      Explore Goa Affordably with Our Taxi Packages
    </h4>
    <div className="grid md:grid-cols-2 gap-6 text-left">
      <div className="p-4 bg-black shadow rounded-lg">
        <h5 className="text-lg font-semibold text-gray-400">
          North Goa Tour Package (Economy)
        </h5>
        <p className="text-black-700">
          Visit Baga Beach, Calangute, Aguada Fort, and Anjuna at the best rates.
        </p>
      </div>
      <div className="p-4 bg-black shadow rounded-lg">
        <h5 className="text-lg font-semibold text-gray-400">
          South Goa Cultural Tour
        </h5>
        <p className="text-black-700">
          Experience serene beaches, historic churches, and spice plantations affordably.
        </p>
      </div>
      <div className="p-4 bg-black shadow rounded-lg">
        <h5 className="text-lg font-semibold text-gray-400">
          Airport & Railway Transfers
        </h5>
        <p className="text-black-700">
          Reliable and cost-effective pick-up and drop-off services.
        </p>
      </div>
      <div className="p-4 bg-black shadow rounded-lg">
        <h5 className="text-lg font-semibold text-gray-400">
          Hourly Rentals
        </h5>
        <p className="text-black-700">
          Pay for what you use—ideal for quick shopping trips.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-12 bg-black p-6 rounded-lg shadow-md max-w-3xl mx-auto">
    <h4 className="text-2xl font-semibold text-black-800 mb-4">
      Tips to Save Money on Your Goa Vacation
    </h4>
    <ul className="text-black-700 text-left list-disc list-inside">
      <li><strong>Opt for group booking</strong> and shared taxis for lower costs.</li>
      <li><strong>Plan your trips in advance</strong> to get the best deals.</li>
      <li><strong>Travel during off-season</strong> (monsoons) for cheaper rates.</li>
      <li><strong>Ask our drivers</strong> for the best local budget-friendly spots.</li>
    </ul>
  </div>
</section>

      
    </div>
  );
}