import { useState } from 'react'
import Navbar from './components/Navbar'
import SplashCursor from './BlitsBlocks/SplashCursor/SplashCursor'
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturedCoursesSection from "./components/FeaturedCoursesSection";
import CoursesSection from "./components/CoursesSection";
import CallToActionSection from "./components/CallToActionSection";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplashCursor />
      <Navbar/>
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <CoursesSection />
      <CallToActionSection />
    </>
  )
}

export default App
