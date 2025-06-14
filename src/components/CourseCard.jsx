import React from "react";
import { Users, Play, Star } from "lucide-react";

const CourseCard = ({ title, description, image, rating, students, duration }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
        <Star className="w-4 h-4 text-yellow-400 mr-1" />
        <span className="text-sm font-bold">{rating}</span>
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <span className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {students} students
        </span>
        <span>{duration}</span>
      </div>
      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center justify-center">
        <Play className="w-5 h-5 mr-2" />
        Start Learning
      </button>
    </div>
  </div>
);

export default CourseCard;