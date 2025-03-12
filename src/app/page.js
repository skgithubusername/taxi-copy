// // import Navbar from './component/Header';
// // import HeroicSection from './component/HeroicSection';
// // import AboutUs from './component/AboutUsSection';
// // import Service from './component/service';
// // import CarSection from './component/cars';
// // import BackgroundVideoSection from './component/BackgroundVideoSection';
// // import Activities from './component/activities';
// // import GoaPlaces from './component/GoaPlaces';
// // import Rentals from './component/Rentals';
// // import Footer from './component/Footer';
// // import Marquee from 'react-fast-marquee';
// // // import Testimonials from './component/Testimonials';

// // export default function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <main>
// //         <section id="home">
// //           <HeroicSection />
// //         </section>

// //         <section id="about">
// //           <AboutUs />
// //         </section>

// //         <Marquee>
// //           <img src="/img/divderOne.svg" alt="divider" />
// //           <img src="/img/divderOne.svg" alt="divider" />
// //         </Marquee>

// //         <section id="services">
// //           <Service />
// //         </section>
        
// //         <Marquee>
// //           <img src="/img/dividerTwo.svg" alt="divider" />
// //           <img src="/img/dividerTwo.svg" alt="divider" />
// //         </Marquee>

// //         <section id="cars">
// //           <CarSection />
// //         </section>

// //         <BackgroundVideoSection
// //           videoSrc="https://videos.pexels.com/video-files/4443766/4443766-hd_1920_1080_25fps.mp4"
// //           text="EXPLORE GOA WITH US ANY TIME ANY WERE"
// //         />

// //         <section id="activities">
// //           <Activities />
// //         </section>
        
// //         <section id="places">
// //           <GoaPlaces />
// //         </section>
        
// //         <section id="rentals">
// //           <Rentals />
// //         </section>


// //         {/* <Testimonials /> */}

// //       </main>
// //       <Footer id="contact" />
// //     </>
// //   );
// // }













import Navbar from './component/Header';
import HeroicSection from './component/HeroicSection';
import AboutUs from './component/AboutUsSection';
import Service from './component/service';
import CarSection from './component/cars';
import BackgroundVideoSection from './component/BackgroundVideoSection';
import Activities from './component/activities';
import GoaPlaces from './component/GoaPlaces';
import Rentals from './component/Rentals';
import Footer from './component/Footer';
import Marquee from 'react-fast-marquee';

// ✅ Define metadata for SEO
export const metadata = {
  title: 'Taxi Service in Goa | Taxi Cab Service - Dhanishtaxiservice',
  description: 'Book reliable taxi services in Goa with Dhanish Taxi Service. Enjoy safe, affordable, and comfortable rides with our professional drivers. Call now!',
  keywords: [
    'Taxi service in goa ',
    'taxi cab service',
    
  ],
  alternates: {
    canonical: 'https://dhanishtaxiservice.com/',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroicSection />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <Marquee>
          <img src="/img/divderOne.svg" alt="divider" />
          <img src="/img/divderOne.svg" alt="divider" />
        </Marquee>

        <section id="services">
          <Service />
        </section>

        <Marquee>
          <img src="/img/dividerTwo.svg" alt="divider" />
          <img src="/img/dividerTwo.svg" alt="divider" />
        </Marquee>

        <section id="cars">
          <CarSection />
        </section>

        <BackgroundVideoSection
          videoSrc="https://videos.pexels.com/video-files/4443766/4443766-hd_1920_1080_25fps.mp4"
          text="EXPLORE GOA WITH US ANY TIME ANYWHERE"
        />

        <section id="activities">
          <Activities />
        </section>

        <section id="places">
          <GoaPlaces />
        </section>

        <section id="rentals">
          <Rentals />
        </section>
      </main>
      <Footer id="contact" />
    </>
  );
}
