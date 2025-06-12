import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-1.5 bg-white bg-opacity-50 backdrop-blur-md text-black">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="ProFitness Logo" className="h-25 w-44" />
        {/* <div className="text-xl font-semibold">Vinsup Skill Academy</div> */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-black">
          <li className="hover:text-blue-500 cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#services">Services</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#pricing">Pricing</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#whyus">Why Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black text-white w-full z-40">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#whyus" className="hover:text-blue-500">Why Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
