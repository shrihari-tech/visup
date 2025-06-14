import React from "react";

const CallToActionSection = () => (
  <div className="py-32 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }}
      />
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
        Ready to Transform Your Future?
      </h2>
      <p className="text-2xl text-white/80 mb-12 leading-relaxed">
        Join thousands of successful learners who have already taken the leap. Your journey to excellence starts here.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-full text-xl font-black hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl">
          Get Started Today
        </button>
        <button className="border-2 border-white/30 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
          Schedule a Demo
        </button>
      </div>
    </div>
  </div>
);

export default CallToActionSection;