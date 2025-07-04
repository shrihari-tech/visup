// import React from "react";
// import { ChevronDown } from "lucide-react";
// import TextPressure from "./TextPressure";

// const HeroSection = () => (
//   <>
//     <div className="relative h-screen overflow-hidden" id="home">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      
//       {/* Floating Geometric Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
//         <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-bounce" />
//         <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
//         <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-bounce" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4">
//         <div className="text-center max-w-6xl mx-auto">
//           <TextPressure />
//           <p className="text-xl md:text-2xl text-white/80 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Kickstart your career with our industry-ready professional course — perfect for students seeking hands-on skills and a direct path to job opportunities in tech.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <a className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl" href="#whyus">
//               Start Your Journey
//             </a>
//             {/* <button className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm" href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank">
//               Watch Demo
//             </button> */}
//             <a
//               href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//             >
//               Watch Demo
//             </a>

//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="w-8 h-8 text-white/60" />
//       </div>
//     </div>
//   </>
// );

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// // Custom Carousel Component (replacing Ant Design Carousel)
// const CustomCarousel = ({ images, autoplay = true, autoplayInterval = 3000 }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     if (!autoplay) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, autoplayInterval);

//     return () => clearInterval(interval);
//   }, [autoplay, autoplayInterval, images.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     // <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-lg">
//     //   <div 
//     //     className="flex transition-transform duration-500 ease-in-out h-full"
//     //     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//     //   >
//     //     {images.map((image) => (
//     //       <div key={image.id} className="relative w-full h-full flex-shrink-0">
//     //         <img 
//     //           src={image.src} 
//     //           alt={image.alt} 
//     //           className="w-full h-full object-cover"
//     //         />
//     //         {/* <div className="absolute bottom-0 mt-6 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
//     //           {image.caption}
//     //         </div> */}
//     //       </div>
//     //     ))}
//     //   </div>
      
//     //   {/* Navigation Buttons */}
//     //   <button 
//     //     onClick={prevSlide}
//     //     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-200"
//     //   >
//     //     <ChevronLeft className="w-4 h-4" />
//     //   </button>
//     //   <button 
//     //     onClick={nextSlide}
//     //     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-200"
//     //   >
//     //     <ChevronRight className="w-4 h-4" />
//     //   </button>
      
//     //   {/* Dots Indicator */}
//     //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//     //     {images.map((_, index) => (
//     //       <button
//     //         key={index}
//     //         onClick={() => setCurrentSlide(index)}
//     //         className={`w-2 h-2 rounded-full transition-all duration-200 ${
//     //           index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
//     //         }`}
//     //       />
//     //     ))}
//     //   </div>
//     // </div>
//     <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
//       <div 
//         className="flex mt-24 transition-transform duration-500 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {images.map((image) => (
//           <div key={image.id} className="relative w-full h-full flex-shrink-0">
//             <img 
//               src={image.src} 
//               alt={image.alt} 
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
      
//       {/* Navigation Buttons */}
//       <button 
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-200"
//       >
//         <ChevronLeft className="w-4 h-4" />
//       </button>
//       <button 
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-200"
//       >
//         <ChevronRight className="w-4 h-4" />
//       </button>
      
//       {/* Dots Indicator */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-200 ${
//               index === currentSlide ? 'bg-gray-700' : 'bg-white bg-opacity-50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // TextPressure component placeholder (you'll need to import your actual component)
// const TextPressure = () => (
//   <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
//     Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Future</span>
//   </h1>
// );

// const images = [
//   {
//     id: 1,
//     src: './college/clg1.JPG',
//     alt: 'College Image 1',
//     caption: 'Our Campus',
//   },
//   {
//     id: 2,
//     src: './college/clg2.JPG',
//     alt: 'Learning Environment',
//     caption: 'State-of-the-Art Facilities',
//   },
//   {
//     id: 3,
//     src: './college/clg3.JPG',
//     alt: 'Student Life',
//     caption: 'Vibrant Student Community',
//   },
//   {
//     id: 4,
//     src: './college/clg4.JPG',
//     alt: 'Innovation Hub',
//     caption: 'Innovation & Technology',
//   },
//   {
//     id: 5,
//     src: './college/clg5.JPG',
//     alt: 'Career Opportunities',
//     caption: 'Career-Ready Graduates',
//   },
//   {
//     id: 6,
//     src: './college/clg6.JPG',
//     alt: 'Global Network',
//     caption: 'Global Alumni Network',
//   },
//   {
//     id: 7,
//     src: './college/clg7.JPG',
//     alt: 'Hands-On Training',
//     caption: 'Hands-On Training',
//   },
// ];

// const HeroSection = () => (
//   <>
//     <div className="relative h-screen overflow-hidden" id="home">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      
//       {/* Floating Geometric Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
//         <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-bounce" />
//         <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
//         <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-bounce" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4">
//         <div className="text-center max-w-6xl mx-auto">
//           <TextPressure />
          
//           {/* Integrated Carousel */}
//           <div className="mb-4 max-w-4xl mx-auto">
//             <CustomCarousel images={images} autoplay={true} autoplayInterval={4000} />
//           </div>
          
//           <p className="text-xl md:text-2xl text-white/80 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Kickstart your career with our industry-ready professional course — perfect for students seeking hands-on skills and a direct path to job opportunities in tech.
//           </p>
//           <div className="flex flex-col mb-12 sm:flex-row gap-16 justify-center items-center">
//             <a className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl" href="#whyus">
//               Start Your Journey
//             </a>
//             <a
//               href="https://www.instagram.com/reel/DJ4ESRPIk83/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//             >
//               View Offer
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="w-8 h-8 text-white/60" />
//       </div>
//     </div>
//   </>
// );

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// Custom Carousel Component (replacing Ant Design Carousel)
const CustomCarousel = ({ images, autoplay = true, autoplayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl md:rounded-2xl shadow-2xl max-w-full">
      <div 
        className="flex mt-10 transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-full flex-shrink-0 min-w-full">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// TextPressure component placeholder (you'll need to import your actual component)
// const TextPressure = () => (
//   <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 w-full max-w-full break-words">
//     Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Future</span>
//   </h1>
// );

const images = [
  {
    id: 1,
    src: './college/clg1.png',
    alt: 'College Image 1',
    caption: 'Our Campus',
  },
  {
    id: 2,
    src: './college/clg2.png',
    alt: 'Learning Environment',
    caption: 'State-of-the-Art Facilities',
  },
  {
    id: 3,
    src: './college/clg3.png',
    alt: 'Student Life',
    caption: 'Vibrant Student Community',
  },
  {
    id: 4,
    src: './college/clg4.png',
    alt: 'Innovation Hub',
    caption: 'Innovation & Technology',
  },
  {
    id: 5,
    src: './college/clg5.png',
    alt: 'Career Opportunities',
    caption: 'Career-Ready Graduates',
  },
  {
    id: 6,
    src: './college/clg6.png',
    alt: 'Global Network',
    caption: 'Global Alumni Network',
  },
];

const HeroSection = () => (
  <>
    <div className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      
      {/* Floating Geometric Shapes - Hidden on mobile for performance */}
      <div className="absolute inset-0 w-full overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-bounce" />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-full px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center w-full max-w-7xl mx-auto">
          {/* Title */}
          {/* <div className="w-full">
            <TextPressure />
          </div> */}
          
          {/* Integrated Carousel */}
          <div className="mb-4 sm:mb-6 md:mb-8 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
            <CustomCarousel images={images} autoplay={true} autoplayInterval={4000} />
          </div>
          
          {/* Description */}
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-1 sm:px-2">
            <p className="text-sm text-justify sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
              Master Full Stack, UI/UX, Data Analytics, or Digital Marketing with Hands-On Training in Our Advanced, Fully-Equipped Classrooms for Just Rs. 14,999! Explore Our 100-Hour Skill Mastery Programs. Transform your career path efficiently. Our intensive 100-hour programs are meticulously designed to deliver job-ready skills without unnecessary fluff, getting you industry-ready, faster.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4">
            <a 
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl text-center whitespace-nowrap" 
              href="#whyus"
            >
              Start Your Journey
            </a>
            <a
              href="https://www.instagram.com/reel/DJ4ESRPIk83/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-center whitespace-nowrap"
            >
              View Offer
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
      </div>
    </div>
  </>
);

export default HeroSection;