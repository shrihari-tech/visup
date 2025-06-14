import React from "react";

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="text-center group">
    <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <div className="text-4xl font-black text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

export default StatCard;
