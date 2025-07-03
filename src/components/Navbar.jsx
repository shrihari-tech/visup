// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-1.5 bg-white bg-opacity-50 backdrop-blur-md text-black">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <img src="/logo.png" alt="ProFitness Logo" className="h-25 w-44" />
//         {/* <div className="text-xl font-semibold">Vinsup Skill Academy</div> */}
//       </div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex flex-1 justify-center">
//         <ul className="flex space-x-8 text-black">
//           <li className="hover:text-blue-500 cursor-pointer"><a href="#home">Home</a></li>
//           <li className="hover:text-blue-500 cursor-pointer"><a href="#whyus">Why Us</a></li>
//           <li className="hover:text-blue-500 cursor-pointer"><a href="#services">Services</a></li>
//           <li className="hover:text-blue-500 cursor-pointer"><a href="#courses">Courses</a></li>
//           <li className="hover:text-blue-500 cursor-pointer"><a href="#process">Process</a></li>
//         </ul>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="text-black text-2xl">
//           {isOpen ? '✕' : '☰'}
//         </button>
//       </div>
//       <div className="hidden md:block">
//             <a className="border border-[#7e7d72] text-[#5b5a53] hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium transition duration-200" href="#contact">
//               Get Brochure
//             </a>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-20 text-white w-full z-40">
//           <ul className="flex flex-col items-center space-y-4 p-4">
//             <li><a href="#home" className="hover:text-blue-500">Home</a></li>
//             <li><a href="#services" className="hover:text-blue-500">Services</a></li>
//             <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
//             <li><a href="#whyus" className="hover:text-blue-500">Why Us</a></li>
//             <li><a onClick={() => setIsOpen(false)} className="mt-2 w-full border border-white text-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium" href="#contact">
//               Get Brochure
//             </a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-1.5 bg-white bg-opacity-50 backdrop-blur-md text-black">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="ProFitness Logo" className="h-25 w-44" />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <ul className="flex space-x-8 text-black">
//             <li className="hover:text-blue-500 cursor-pointer"><a href="#home">Home</a></li>
//             <li className="hover:text-blue-500 cursor-pointer"><a href="#whyus">Why Us</a></li>
//             <li className="hover:text-blue-500 cursor-pointer"><a href="#services">Services</a></li>
//             <li className="hover:text-blue-500 cursor-pointer"><a href="#courses">Courses</a></li>
//             <li className="hover:text-blue-500 cursor-pointer"><a href="#process">Process</a></li>
//           </ul>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-black text-2xl">
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>

//         {/* Desktop Get Brochure */}
//         <div className="hidden md:block">
//           <button
//             onClick={toggleModal}
//             className="border border-[#7e7d72] text-[#5b5a53] hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium transition duration-200"
//           >
//             Get Brochure
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-20 text-white w-full z-40">
//           <ul className="flex flex-col items-center space-y-4 p-4">
//             <li><a href="#home" className="hover:text-blue-500">Home</a></li>
//             <li><a href="#services" className="hover:text-blue-500">Services</a></li>
//             <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
//             <li><a href="#whyus" className="hover:text-blue-500">Why Us</a></li>
//             <li>
//               <button
//                 onClick={() => {
//                   toggleModal();
//                   setIsOpen(false);
//                 }}
//                 className="mt-2 w-full border border-white text-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium"
//               >
//                 Get Brochure
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Brochure Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//           <div className="relative bg-white w-11/12 md:w-3/4 h-[80vh] p-4 rounded-lg shadow-lg">
//             <button
//               onClick={toggleModal}
//               className="absolute top-2 right-4 text-black text-xl"
//             >
//               ✕
//             </button>
//             <iframe
//               src="/broucher.pdf#toolbar=0&navpanes=0&scrollbar=0"
//               title="Brochure"
//               className="w-full h-full border-0"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleNavClick = (href) => {
//     setIsOpen(false);
//     // Smooth scroll to section
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-1.5 bg-white bg-opacity-50 backdrop-blur-md text-black shadow-sm">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="./logo.png" alt="vinsup skill accademy" className="h-25 w-44"/>

//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <ul className="flex space-x-8 text-black">
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
//               <button onClick={() => handleNavClick('#home')}>Home</button>
//             </li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
//               <button onClick={() => handleNavClick('#whyus')}>Why Us</button>
//             </li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
//               <button onClick={() => handleNavClick('#services')}>Services</button>
//             </li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
//               <button onClick={() => handleNavClick('#courses')}>Courses</button>
//             </li>
//             <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
//               <button onClick={() => handleNavClick('#process')}>Process</button>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button 
//             onClick={toggleMenu} 
//             className="text-black text-2xl p-2 hover:bg-black hover:bg-opacity-10 rounded transition-colors duration-200"
//             aria-label="Toggle mobile menu"
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>

//         {/* Desktop Get Brochure */}
//         <div className="hidden md:block">
//           <button
//             onClick={toggleModal}
//             className="border border-gray-400 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition duration-200"
//           >
//             Get Brochure
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="fixed top-16 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md text-black w-full z-40 shadow-lg border-t border-gray-200">
//           <ul className="flex flex-col items-center space-y-4 p-4">
//             <li>
//               <button 
//                 onClick={() => handleNavClick('#home')} 
//                 className="hover:text-blue-500 transition-colors duration-200"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavClick('#whyus')} 
//                 className="hover:text-blue-500 transition-colors duration-200"
//               >
//                 Why Us
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavClick('#services')} 
//                 className="hover:text-blue-500 transition-colors duration-200"
//               >
//                 Services
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavClick('#courses')} 
//                 className="hover:text-blue-500 transition-colors duration-200"
//               >
//                 Courses
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavClick('#process')} 
//                 className="hover:text-blue-500 transition-colors duration-200"
//               >
//                 Process
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => {
//                   toggleModal();
//                   setIsOpen(false);
//                 }}
//                 className="mt-2 w-full max-w-xs border border-gray-400 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition duration-200"
//               >
//                 Get Brochure
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Brochure Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//           <div className="relative bg-white w-11/12 md:w-3/4 max-w-4xl h-[80vh] p-4 rounded-lg shadow-lg">
//             <button
//               onClick={toggleModal}
//               className="absolute top-2 right-4 text-black text-xl hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
//               aria-label="Close modal"
//             >
//               ✕
//             </button>
//             <div className="w-full h-full border border-gray-200 rounded bg-gray-50 flex items-center justify-center">
//               <div className="text-center text-gray-600">
//                 <div className="text-4xl mb-4">📄</div>
//                 <p className="text-lg font-medium mb-2">Brochure Preview</p>
//                 <p className="text-sm">PDF content would be displayed here</p>
//                 <p className="text-xs mt-2 text-gray-500">
                 
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleModal = () => setShowModal(!showModal);
  const brouchreUrl = "/broucher.pdf";

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-1.5 bg-white bg-opacity-50 backdrop-blur-md text-black shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="vinsup skill accademy" className="h-25 w-44"/>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-black">
            <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
              <button onClick={() => handleNavClick('#home')}>Home</button>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
              <button onClick={() => handleNavClick('#whyus')}>Why Us</button>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
              <button onClick={() => handleNavClick('#services')}>Services</button>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
              <button onClick={() => handleNavClick('#courses')}>Courses</button>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
              <button onClick={() => handleNavClick('#process')}>Process</button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-black text-2xl p-2 hover:bg-black hover:bg-opacity-10 rounded transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className="hidden md:block">
          <button
            onClick={toggleModal}
            className="border border-gray-400 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition duration-200"
          >
            Get Brochure
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md text-black w-full z-40 shadow-lg border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <button onClick={() => handleNavClick('#home')} className="hover:text-blue-500 transition-colors duration-200">Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('#whyus')} className="hover:text-blue-500 transition-colors duration-200">Why Us</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('#services')} className="hover:text-blue-500 transition-colors duration-200">Services</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('#courses')} className="hover:text-blue-500 transition-colors duration-200">Courses</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('#process')} className="hover:text-blue-500 transition-colors duration-200">Process</button>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleModal();
                  setIsOpen(false);
                }}
                className="mt-2 w-full max-w-xs border border-gray-400 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition duration-200"
              >
                Get Brochure
              </button>
            </li>
          </ul>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white w-11/12 md:w-3/4 max-w-4xl h-[80vh] p-4 rounded-lg shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-4 text-black text-xl hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="w-full h-full border border-gray-200 rounded bg-gray-50 flex items-center justify-center">
              {brouchreUrl ? (
                //Show brochure PDF
                // <embed
                //   src={brouchreUrl}
                //   type="application/pdf"
                //   className="w-full h-full rounded"
                //   />
                <Document file={brouchreUrl}>
                  <Page pageNumber={1} width={600} />
                </Document>

              ) : (
                // Show "No brochure" message
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-4">📄</div>
                  <p className="text-lg font-medium mb-2">No brochure available</p>
                  <p className="text-xs mt-2 text-gray-500">
                    Please check back later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;