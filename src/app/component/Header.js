// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTransparent, setIsTransparent] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const navItems = [
//     { name: 'HOME', link: '#home' },
//     { name: 'ABOUT', link: '#about' },
//     { name: 'SERVICE', link: '#services' },
//     { name: 'CARS', link: '#cars' },
//     { name: 'ACTIVITIES', link: '#activities' },
//     { name: 'PLACES', link: '#places' },
//     { name: 'BLOG', link: '#blog' },
//     { name: 'RENTALS', link: '#rentals' }, // New Rentals Section
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!isOpen) { // Pause transparency when dropdown is open
//         if (window.scrollY > lastScrollY) {
//           // Scrolling down
//           setIsTransparent(true);
//         } else {
//           // Scrolling up
//           setIsTransparent(false);
//         }
//         setLastScrollY(window.scrollY);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY, isOpen]);

//   const handleClick = (e, targetId) => {
//     e.preventDefault();
//     const targetElement = document.querySelector(targetId);
//     const offset = -80; // Adjust this value based on your navbar height

//     if (targetElement) {
//       const targetPosition =
//         targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth',
//       });
//     }
//     // Close the dropdown after clicking
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
//         isTransparent && !isOpen ? 'bg-transparent' : 'bg-yellow-500'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <span className={`font-bold transition-colors duration-300 ${isTransparent && !isOpen ? 'text-white' : 'text-black'}`}>D TAXI SERVICE</span>
//             </div>
//           </div>
//           <div className="hidden lg:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.link}
//                   onClick={(e) => handleClick(e, item.link)}
//                   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
//                     isTransparent && !isOpen ? 'text-white hover:bg-yellow-600' : 'text-black hover:bg-yellow-600'
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 onClick={(e) => handleClick(e, '#contact')}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
//                   isTransparent && !isOpen ? 'bg-transparent text-white' : 'bg-gray-900 text-white'
//                 }`}
//               >
//                 CONTACT US
//               </a>
//             </div>
//           </div>
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300 ${
//                 isTransparent && !isOpen ? 'text-white hover:bg-yellow-600' : 'text-black hover:bg-yellow-600'
//               }`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="lg:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.link}
//                 onClick={(e) => handleClick(e, item.link)}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
//                   isTransparent && !isOpen ? 'text-white hover:bg-yellow-600' : 'text-black hover:bg-yellow-600'
//                 }`}
//               >
//                 {item.name}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               onClick={(e) => handleClick(e, '#contact')}
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
//                 isTransparent && !isOpen ? 'bg-transparent text-white' : 'bg-gray-900 text-white'
//               }`}
//             >
//               CONTACT US
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



































'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);



  const navItems = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SERVICE', link: '#services' },
    { name: 'CARS', link: '#cars' },
    // { name: 'ACTIVITIES', link: '/activities' },
    { name: 'PLACES', link: '#places' },
    { name: 'RENTALS', link: '#rentals' },
  ];

  const blogItems = [
    { name: 'Blog 1', link: '/blog/blog1' },
    { name: 'Blog 2', link: '/blog/blog2' },
    { name: 'Blog 3', link: '/blog/blog3' },
    { name: 'Blog 4', link: '/blog/blog4' },
    { name: 'Blog 5', link: '/blog/blog5' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        if (window.scrollY > lastScrollY) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isOpen]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isTransparent && !isOpen ? 'bg-transparent' : 'bg-yellow-500'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
  <span className={`font-bold transition-colors duration-300 ${isTransparent && !isOpen ? 'text-white' : 'text-black'}`}>
    <img src="/logo2.png" alt="Logo" className="h-16 w-auto" />
  </span>
</div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.link} className="text-black hover:text-white transition">
                {item.name}
              </Link>
            ))}

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className="flex items-center text-black hover:text-white transition"
              >
                BLOG <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isBlogOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                  {blogItems.map((blog) => (
                    <Link
                      key={blog.name}
                      href={blog.link}
                      className="block px-4 py-2 text-black hover:bg-yellow-500 transition"
                      onClick={() => setIsBlogOpen(false)}
                    >
                      {blog.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="px-4 py-2 bg-gray-900 text-white rounded-md transition hover:bg-gray-700">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:bg-yellow-600 p-2 rounded-md transition">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-2">
          <div className="px-3 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.link} className="block text-black hover:bg-yellow-500 p-2 rounded-md transition" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            {/* Blog Dropdown (Mobile) */}
            <div className="relative">
              <button onClick={() => setIsBlogOpen(!isBlogOpen)} className="flex items-center text-black hover:text-yellow-500 w-full p-2">
                BLOG <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isBlogOpen && (
                <div className="pl-4">
                  {blogItems.map((blog) => (
                    <Link
                      key={blog.name}
                      href={blog.link}
                      className="block text-black hover:bg-yellow-500 p-2 rounded-md transition"
                      onClick={() => {
                        setIsBlogOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {blog.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="block bg-gray-900 text-white p-2 rounded-md transition hover:bg-gray-700 text-center">
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
