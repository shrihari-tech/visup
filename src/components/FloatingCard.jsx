import React from "react";
import { ArrowRight } from "lucide-react";

const FloatingCard = ({ icon: Icon, title, description, delay = 0 , image}) => (
  // <div 
  //   className="group bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
  //   style={{ animationDelay: `${delay}ms` }}
  // >
  //   <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
  //     <Icon className="w-8 h-8 text-white" />
  //   </div>
  //   <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
  //   <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-relaxed mb-6">{description}</p>
  //   <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
  //     <span className="mr-2">Explore</span>
  //     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  //   </div>
  // </div>
  <div>
    <div>
      <img src={image} alt="Card Image" className="w-full h-96 object-cover rounded-3xl mb-6" />
    </div>
  </div>
);

export default FloatingCard;