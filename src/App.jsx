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
function App() {
  const [frontendLoaded, setFrontendLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading; replace timeout with real data loading if needed!
    const timer = setTimeout(() => setFrontendLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!frontendLoaded) {
    // Inline logo splash, center screen, white bg, blinking
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <img
          src="/logo.png" // <-- Set your logo path here
          alt="Logo"
          className="w-32 h-32 blink-animate"
        />
      </div>
    );
  }

  return (
    <>
      <SplashCursor />
      <Navbar/>
      <HeroSection />
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
