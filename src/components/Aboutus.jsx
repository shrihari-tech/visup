// import React from "react";

// function Aboutus() {
//     return (
//         <div className="py-12 sm:py-12 lg:py-12 bg-gradient-to-b from-gray-50 to-white" id="aboutus">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6">
//                         About Us
//                     </h2>
//                     <img 
//                         src="/about.png" 
//                         alt="College Image" 
//                         className="w-full h-40 sm:h-24 md:h-40 lg:h-64 object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl mb-4 sm:mb-6" 
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Aboutus;

import React from "react";

function Aboutus() {
    return (
        <div className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="aboutus">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6">
                        About Us
                    </h2>
                    <img 
                        src="/about.png" 
                        alt="College Image" 
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl mb-4 sm:mb-6" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;