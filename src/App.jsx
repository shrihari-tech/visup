import { useState } from 'react'
import Navbar from './components/Navbar'
import SplashCursor from './BlitsBlocks/SplashCursor/SplashCursor'
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/FeaturesSection";
import FeaturedCoursesSection from "./Components/FeaturedCoursesSection";
import CoursesSection from "./Components/CoursesSection";
import CallToActionSection from "./Components/CallToActionSection";
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
