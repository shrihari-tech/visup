import React, { useState, useEffect } from "react";

const TextPressure = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Learn", "Grow", "Excel", "Succeed"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 animate-pulse">
        {texts[currentText]}
      </div>
      <div className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
        Beyond Boundaries
      </div>
    </div>
  );
};

export default TextPressure;