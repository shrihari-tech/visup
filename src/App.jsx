// import React, { useState, useEffect } from 'react'
// import Navbar from './components/Navbar';
// import SplashCursor from './BlitsBlocks/SplashCursor/SplashCursor'
// import HeroSection from "./components/HeroSection";
// import FeaturesSection from "./components/FeaturesSection";
// import FeaturedCoursesSection from "./components/FeaturedCoursesSection";
// import CoursesSection from "./components/CoursesSection";
// import CallToActionSection from "./components/CallToActionSection";
// import WorkProcessSection from "./components/WorkProcessSection";
// import Footer from "./components/Footer";
// import LandingPage from "./components/LandingPage";
// import WhatsAppChat from "./components/WhatsAppChat";
// function App() {
//   const [frontendLoaded, setFrontendLoaded] = useState(false);

//   useEffect(() => {
//     // Simulate loading; replace timeout with real data loading if needed!
//     const timer = setTimeout(() => setFrontendLoaded(true), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!frontendLoaded) {
//     // Inline logo splash, center screen, white bg, blinking
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white">
//         <img
//           src="/welcome.gif" // <-- Set your logo path here
//           alt="Logo"
//           className="w-96 h-96"
//         />
//       </div>
//     );
//   }

//   return (
//     <>
//       <SplashCursor />
//       <Navbar/>
//       <HeroSection />
//       <FeaturesSection />
//       <FeaturedCoursesSection />
//       <CoursesSection />
//       <CallToActionSection />
//       <WorkProcessSection />
//       <Footer/>
//       <WhatsAppChat />
//     </>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import SplashCursor from './BlitsBlocks/SplashCursor/SplashCursor'
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturedCoursesSection from "./components/FeaturedCoursesSection";
import CoursesSection from "./components/CoursesSection";
import CallToActionSection from "./components/CallToActionSection";
import WorkProcessSection from "./components/WorkProcessSection";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import WhatsAppChat from "./components/WhatsAppChat";
import Aboutus from "./components/Aboutus";
function App() {
  const [frontendLoaded, setFrontendLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate realistic loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setFrontendLoaded(true), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 180);

    return () => clearInterval(progressInterval);
  }, []);

  if (!frontendLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Logo container with enhanced glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <img
                src="/welcome.gif"
                alt="Logo"
                className="w-80 h-80 object-contain filter drop-shadow-2xl"
                style={{
                  animation: 'logoFloat 3s ease-in-out infinite'
                }}
              />
            </div>
          </div>

          {/* Loading progress */}
          <div className="w-80 space-y-4">
            <div className="flex justify-between items-center text-white/80 text-sm font-medium">
              <span className="tracking-wide">Loading ...</span>
              <span className="font-mono">{Math.round(loadingProgress)}%</span>
            </div>
            
            {/* Enhanced progress bar */}
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${loadingProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                <div className="absolute right-0 top-0 w-4 h-full bg-white/20 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Loading text with enhanced typography */}
          <div className="text-center space-y-2">
            <div className="text-white/90 text-xl font-light tracking-wider">
              <span className="inline-block animate-pulse">
                Welcome to Your Learning Journey
              </span>
            </div>
          </div>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.4;
            }
            50% { 
              transform: translateY(-30px) rotate(180deg); 
              opacity: 0.8;
            }
          }
          
          @keyframes logoFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1) rotate(0deg); 
            }
            50% { 
              transform: translateY(-12px) scale(1.03) rotate(1deg); 
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <SplashCursor />
      <Navbar/>
      <HeroSection />
      <Aboutus />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <CoursesSection />
      <CallToActionSection />
      <WorkProcessSection />
      <Footer/>
      <WhatsAppChat />
    </>
  )
}

export default App