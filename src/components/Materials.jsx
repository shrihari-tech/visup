// import React, { useEffect, useState } from 'react';
// import AppSidebar from './AppSidebar';

// // Dummy API call to fetch materials grouped by week and day
// // Replace with your real API call as needed
// const fetchMaterials = async () => {
//   return [
//     {
//       week: 1,
//       days: [
//         {
//           day: 1,
//           materials: [
//             {
//               _id: "mat1",
//               title: "Introduction to React",
//               description: "Overview of React basics.",
//               file: "/materials/week1/day1/intro-react.pdf"
//             }
//           ]
//         },
//         {
//           day: 2,
//           materials: [
//             {
//               _id: "mat2",
//               title: "JSX & Components",
//               description: "Understanding JSX and components.",
//               file: "/materials/week1/day2/jsx-components.pdf"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       week: 2,
//       days: [
//         {
//           day: 1,
//           materials: [
//             {
//               _id: "mat3",
//               title: "State & Props",
//               description: "Learn about state and props.",
//               file: "/materials/week2/day1/state-props.pdf"
//             }
//           ]
//         }
//       ]
//     }
//   ];
// };

// function Materials() {
//   const [materials, setMaterials] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchMaterials().then(data => {
//       setMaterials(data);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//       <AppSidebar />
//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">
//           <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Course Materials
//           </span>
//         </h1>
//         {loading ? (
//           <div className="flex items-center justify-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//             <span className="ml-4 text-xl text-gray-600">Loading...</span>
//           </div>
//         ) : materials.length === 0 ? (
//           <div className="flex items-center justify-center h-64">
//             <div className="text-gray-600 text-lg font-medium bg-white rounded-lg p-8 shadow">
//               No materials available yet.
//             </div>
//           </div>
//         ) : (
//           <div>
//             {materials.map((weekData, weekIdx) => (
//               <div key={weekIdx} className="mb-10">
//                 <h2 className="text-2xl font-semibold text-blue-800 mb-4">
//                   Week {weekData.week}
//                 </h2>
//                 <div className="space-y-6">
//                   {weekData.days.map((dayData, dayIdx) => (
//                     <div key={dayIdx} className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:border-blue-400 transition-all">
//                       <h3 className="text-lg font-bold text-purple-700 mb-2">
//                         Day {dayData.day}
//                       </h3>
//                       {dayData.materials.length === 0 ? (
//                         <p className="text-gray-500">No materials for this day.</p>
//                       ) : (
//                         <ul className="space-y-3">
//                           {dayData.materials.map(material => (
//                             <li key={material._id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
//                               <div>
//                                 <div className="text-md font-semibold text-gray-900">{material.title}</div>
//                                 <div className="text-gray-600 text-sm">{material.description}</div>
//                               </div>
//                               <a
//                                 href={material.file}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="ml-4 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform"
//                               >
//                                 View Material
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Materials;

import React, { useEffect, useState } from "react";
import AppSidebar from "./AppSidebar";

// const SHEET_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbAzs8MWu5oUh3ZU6YSeNsTF0Iy10rnol1hm5srnWJNCDcZFpOzqj6PVXsqYkzdAVwQoFL4x1HyPx2/pub?output=csv";
const domain = localStorage.getItem("domain");

let SHEET_CONTENT_URL = "";

if (domain === "FSD") {
  SHEET_CONTENT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbAzs8MWu5oUh3ZU6YSeNsTF0Iy10rnol1hm5srnWJNCDcZFpOzqj6PVXsqYkzdAVwQoFL4x1HyPx2/pub?output=csv"; 
} else if (domain === "DM") {
  SHEET_CONTENT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRC7XRrz_5RNnFDAIp_oqgyv3DBKJjEIthOjz4Jzqo2URnmW6qICqK_TnZ6-n7vD52aqvqUakYA0THa/pub?output=csv"; 
} else if (domain === "DA") {
  SHEET_CONTENT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEe2wwACQ-gUn3v1_nMU_M4eA8DyGQScRQ3KoP9NuY5DRkEYx5QkLRLFbjpGo5CK00FC5Rg_2nvgtq/pub?output=csv"; 
}
else if (domain === "UI/UX"){
  SHEET_CONTENT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpW1UGkacnqz6bENq_fQ4iI1VrIb9xnc1g6cuKlBb-nGKg70Vx53awHFgZs1NAt-q7mYX6hNAXpUVw/pub?output=csv";
}

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const res = await fetch(SHEET_CONTENT_URL);
        const text = await res.text();  
        const rows = text.split("\n").map((r) => r.split(",").map((c) => c.trim()));

        const headers = rows[0];
        const data = rows.slice(1).map((row) =>
          headers.reduce((acc, h, i) => {
            acc[h] = row[i];
            return acc;
          }, {})
        );

        // Group into { week -> days -> materials[] }
        let grouped = [];
        data.forEach((item) => {
          if (!item["Week"] || !item["Day"] || !item["Topic"] || !item["Link"]) return;

          const weekNum = parseInt(item["Week"].replace(/\D/g, "")) || 0;
          const dayNum = parseInt(item["Day"].replace(/\D/g, "")) || 0;

          let week = grouped.find((w) => w.week === weekNum);
          if (!week) {
            week = { week: weekNum, days: [] };
            grouped.push(week);
          }

          let day = week.days.find((d) => d.day === dayNum);
          if (!day) {
            day = { day: dayNum, materials: [] };
            week.days.push(day);
          }

          day.materials.push({
            _id: `${weekNum}-${dayNum}-${day.materials.length + 1}`,
            title: item["Topic"],
            description: "", // Sheet doesn’t have description, so leaving empty
            file: item["Link"],
          });
        });

        // Sort weeks and days
        grouped.sort((a, b) => a.week - b.week);
        grouped.forEach((w) => w.days.sort((a, b) => a.day - b.day));

        setMaterials(grouped);
      } catch (err) {
        console.error("Error fetching sheet:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSheet();
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <AppSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Course Materials
          </span>
        </h1>
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <span className="ml-4 text-xl text-gray-600">Loading...</span>
          </div>
        ) : materials.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-600 text-lg font-medium bg-white rounded-lg p-8 shadow">
              No materials available yet.
            </div>
          </div>
        ) : (
          <div>
            {materials.map((weekData, weekIdx) => (
              <div key={weekIdx} className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  Week {weekData.week}
                </h2>
                <div className="space-y-6">
                  {weekData.days.map((dayData, dayIdx) => (
                    <div
                      key={dayIdx}
                      className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:border-blue-400 transition-all"
                    >
                      <h3 className="text-lg font-bold text-purple-700 mb-2">
                        Day {dayData.day}
                      </h3>
                      {dayData.materials.length === 0 ? (
                        <p className="text-gray-500">No materials for this day.</p>
                      ) : (
                        <ul className="space-y-3">
                          {dayData.materials.map((material) => (
                            <li
                              key={material._id}
                              className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 hover:bg-blue-50 transition"
                            >
                              <div>
                                <div className="text-md font-semibold text-gray-900">
                                  {material.title}
                                </div>
                              </div>
                              <a
                                href={material.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform"
                              >
                                View Material
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Materials;