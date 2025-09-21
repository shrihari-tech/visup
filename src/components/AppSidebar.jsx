// import React, { useState } from 'react';
// import { Search, LayoutDashboard, CreditCard, Wallet, Plus, Users, Zap, User, FileText, MoreHorizontal, Menu, X, LogOut } from 'lucide-react';
// import {useNavigate} from "react-router-dom";
// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState('Dashboard');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();


//   const menuItems = [
//     { name: 'Dashboard', icon: LayoutDashboard, active: true,link:"/dashboard" },
//     { name: 'Materials', icon: Wallet, link:"/materials" },
//     // { name: 'Cards', icon: CreditCard },
//     // { name: 'Transaction', icon: Plus },
//     // { name: 'Spend Groups', icon: Users },
//     // { name: 'Integrations', icon: Zap },
//     { name: 'Profile', icon: User, link:"/profile" },
//     { name: 'Logout', icon: LogOut, link:"/"  },
//   ];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       {/* Mobile menu button */}
//       <button
//         onClick={toggleMobileMenu}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
//       >
//         {isMobileMenuOpen ? (
//           <X className="w-6 h-6 text-gray-600" />
//         ) : (
//           <Menu className="w-6 h-6 text-gray-600" />
//         )}
//       </button>

//       {/* Mobile overlay */}
//       {isMobileMenuOpen && (
//         <div 
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleMobileMenu}
//         />
//       )}

//       {/* Sidebar */}
//       <div className={`
//         fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-40
//         w-80 bg-gray-50 h-screen flex flex-col
//         ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
//       `}>
//       {/* Header */}
//       <div className="p-4 lg:p-6 border-b border-gray-200">
//         <div className="flex items-center justify-center">
//           <div className="flex items-center space-x-3">
//             <img src="/logo.png" className="w-44 h-25 lg:w-44 lg:h-25 bg-white rounded-sm"></img>

//             {/* <div>
//               <h2 className="text-base lg:text-lg font-semibold text-gray-900">Kevin Dukkon</h2>
//               <p className="text-xs lg:text-sm text-gray-500">hey@kevdu.co</p>
//             </div> */}
//           </div>
//           {/* <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//             <MoreHorizontal className="w-5 h-5 text-gray-400" />
//           </button> */}
//         </div>
//       </div>

//       {/* Search */}
//       <div className="p-4 lg:p-6 border-b border-gray-200">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full pl-10 pr-12 py-2.5 lg:py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
//           />
//           <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-medium">
//             /
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 lg:px-6 py-4">
//         <ul className="space-y-1 lg:space-y-2">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeItem === item.name;
            
//             return (
//               <li key={item.name}>
//                 <button
//                   onClick={() => {
//                     setActiveItem(item.name);
//                     setIsMobileMenuOpen(false); // Close mobile menu when item is selected
//                     navigate(item.link);
//                   }}
//                   className={`w-full flex items-center space-x-3 px-3 py-2.5 lg:py-3 rounded-lg text-left transition-colors ${
//                     isActive 
//                       ? 'bg-white text-gray-900 shadow-sm' 
//                       : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
//                   }`}
//                 >
//                   <Icon className={`w-5 h-5 ${isActive ? 'text-gray-700' : 'text-gray-400'}`} />
//                   <span className="font-medium text-sm lg:text-base">{item.name}</span>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { 
  Search, 
  LayoutDashboard, 
  Wallet, 
  User, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AppSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ tracks current URL

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, link: "/dashboard" },
    { name: 'Materials', icon: Wallet, link: "/materials" },
    { name: 'Profile', icon: User, link: "/profile" },
    { name: 'Logout', icon: LogOut, link: "/" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-40
        w-80 bg-gray-50 h-screen flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header / Logo */}
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Logo"
                className="w-44 h-25 lg:w-44 lg:h-25 bg-white rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-12 py-2.5 lg:py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-medium">
              /
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 lg:px-6 py-4">
          <ul className="space-y-1 lg:space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.link; // ✅ highlight current route

              return (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false); // ✅ close mobile menu
                      navigate(item.link);        // ✅ navigate to route
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 lg:py-3 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-gray-700' : 'text-gray-400'}`} />
                    <span className="font-medium text-sm lg:text-base">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AppSidebar;
