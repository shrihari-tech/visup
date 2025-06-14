import React from "react";
import { ChevronDown } from "lucide-react";
import TextPressure from "./TextPressure";

const HeroSection = () => (
  <div className="relative h-screen overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
    
    {/* Floating Geometric Shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-bounce" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-bounce" />
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex items-center justify-center h-full px-4">
      <div className="text-center max-w-6xl mx-auto">
        <TextPressure />
        <p className="text-xl md:text-2xl text-white/80 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock your potential with cutting-edge courses designed by industry experts. 
          Transform your career with personalized learning experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl">
            Start Your Journey
          </button>
          <button className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            Watch Demo
          </button>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-white/60" />
    </div>
  </div>
);

export default HeroSection;