import React, { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed-top">
    <nav className="flex items-center justify-between p-1.5 bg-black bg-opacity-50 backdrop-blur-md text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="ProFitness Logo" className="h-25 w-44" />
        {/* <div className="text-xl font-semibold">Vinsup Skill Academy</div> */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-blue-500 cursor-pointer"><a href ="#home" className="text-white">Home</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href ="#services" className="text-white">Services</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href ="#pricing" className="text-white">Pricing</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href = "#whyus" className="text-white">Why Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {/* ☰ */}
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-24 left-0 right-0 bg-black  backdrop-blur-md text-white w-full">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li className="hover:text-white-500 cursor-pointer"><a href ="#home" className="text-white">Home</a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href ="#services" className="text-white">Services</a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href ="#pricing" className="text-white">Pricing</a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href = "#whyus" className="text-white">Why Us</a></li>
          </ul>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;