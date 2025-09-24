// import React, { useEffect, useState } from "react";
// import {
//   Clock,
//   Wifi,
//   Calendar,
//   CheckCircle,
//   XCircle,
//   User,
// } from "lucide-react";
// import AppSidebar from "./AppSidebar"; // 👈 import your sidebar

// // Dummy API
// const fetchBatchData = async () => {
//   return [
//     {
//       _id: "batch1",
//       batchName: "React Bootcamp - Batch A",
//       batchTiming: "6:00 PM - 8:00 PM",
//       batchMode: "Online",
//       instructorName: "Sarah Johnson",
//       attendancePercentage: 85,
//       courseCertificate: true,
//       internshipCertificate: false,
//     },
//   ];
// };

// const Dashboard = () => {
//   const [batches, setBatches] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBatchData().then((data) => {
//       setBatches(data);
//       setLoading(false);
//     });
//   }, []);

//   const batch = batches[0]; // Only one course for a student

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-[#e9f3fd] to-[#e6eaf6]">
//       {/* Sidebar */}
//       <AppSidebar />

//       {/* Main Dashboard */}
//       <div className="flex-1 flex items-center justify-center px-2 py-10">
//         <div className="w-full max-w-3xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center tracking-tight drop-shadow-lg">
//             🎓 Batch Dashboard
//           </h1>

//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-[6px] border-blue-400 border-t-blue-700"></div>
//             </div>
//           ) : (
//             batch && (
//               <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 border border-blue-100 flex flex-col items-center transition-all duration-300">
//                 {/* Accent bar */}
//                 <div
//                   className={`absolute left-0 top-0 h-full w-2 rounded-l-3xl ${batch.batchMode === "Online"
//                     ? "bg-gradient-to-b from-blue-500 to-blue-300"
//                     : "bg-gradient-to-b from-purple-500 to-purple-300"
//                   }`}
//                 ></div>

//                 {/* Mode Icon */}
//                 <div className="absolute top-7 right-7">
//                   {batch.batchMode === "Online" ? (
//                     <Wifi className="w-8 h-8 text-blue-500 drop-shadow-md" />
//                   ) : (
//                     <Calendar className="w-8 h-8 text-purple-500 drop-shadow-md" />
//                   )}
//                 </div>

//                 {/* Batch Name */}
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3 text-center">
//                   <span className={inline-block px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm font-semibold uppercase tracking-wide shadow-md ${batch.batchMode === "Online" ? "border border-blue-200" : "border border-purple-200"}}>
//                     {batch.batchMode}
//                   </span>
//                   {batch.batchName}
//                 </h2>

//                 {/* Instructor */}
//                 <div className="flex items-center gap-3 mb-6 mt-2 text-gray-700 text-lg font-medium">
//                   <User className="w-6 h-6 text-gray-600" />
//                   <span>{batch.instructorName}</span>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
//                   {/* Batch Timing */}
//                   <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Clock className="w-6 h-6 text-blue-600" />
//                       <span className="text-xl font-semibold text-gray-800">{batch.batchTiming}</span>
//                     </div>
//                     <span className="text-sm text-gray-500">Batch Timing</span>
//                   </div>

//                   {/* Attendance Progress Bar */}
//                   <div className="flex flex-col items-center bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 shadow w-full">
//                     <div className="flex justify-between items-center w-full mb-2">
//                       <span className="text-sm text-gray-500">Attendance</span>
//                       <span className={`text-lg font-bold ${batch.attendancePercentage >= 90
//                         ? "text-green-600"
//                         : batch.attendancePercentage >= 80
//                           ? "text-yellow-500"
//                           : "text-red-500"
//                         }`}>
//                         {batch.attendancePercentage}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-5 shadow-inner mb-1">
//                       <div
//                         className={`h-5 rounded-full transition-all duration-500 ${batch.attendancePercentage >= 90
//                           ? "bg-gradient-to-r from-green-400 to-green-600"
//                           : batch.attendancePercentage >= 80
//                             ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
//                             : "bg-gradient-to-r from-red-400 to-red-600"
//                           }`}
//                         style={{ width: ${batch.attendancePercentage}% }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Certificates */}
//                 <div className="flex flex-col md:flex-row gap-6 mt-8 w-full justify-center">
//                   <div
//                     className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-semibold shadow-md border-2 ${batch.courseCertificate
//                       ? "bg-green-50 text-green-700 border-green-200"
//                       : "bg-gray-100 text-gray-400 border-gray-200"
//                     }`}
//                   >
//                     {batch.courseCertificate ? (
//                       <CheckCircle className="w-5 h-5 text-green-500" />
//                     ) : (
//                       <XCircle className="w-5 h-5 text-gray-400" />
//                     )}
//                     Course Certificate
//                   </div>

//                   <div
//                     className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg font-semibold shadow-md border-2 ${batch.internshipCertificate
//                       ? "bg-green-50 text-green-700 border-green-200"
//                       : "bg-gray-100 text-gray-400 border-gray-200"
//                     }`}
//                   >
//                     {batch.internshipCertificate ? (
//                       <CheckCircle className="w-5 h-5 text-green-500" />
//                     ) : (
//                       <XCircle className="w-5 h-5 text-gray-400" />
//                     )}
//                     Internship Certificate
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { Clock, Calendar, User } from "lucide-react";
// import AppSidebar from "./AppSidebar";

// const SHEET_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiNWkKLdGsaEC_6HKgTg9tPdVSk0c5O6dxO8Ucrk8kvGvtV_FfdSqE2VGkmVWt_89J6S_h1kCyJaMM/pub?output=csv";

// const Dashboard = () => {
//   const [studentData, setStudentData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const storedStudent = localStorage.getItem("student");
//   if (!storedStudent) {
//     setLoading(false);
//     return;
//   }

//   const parsedStudent = JSON.parse(storedStudent);
//   const loggedInEmail = parsedStudent.Email?.trim().toLowerCase();

//   const fetchStudentData = async () => {
//     try {
//       const response = await fetch(SHEET_URL);
//       const text = await response.text();
//       const rows = text.split("\n").map((row) => row.split(","));

//       const headers = rows[0].map((h) => h.trim());
//       const students = rows.slice(1).map((row) =>
//         headers.reduce((acc, header, i) => {
//           acc[header] = row[i]?.trim();
//           return acc;
//         }, {})
//       );

//       const student = students.find(
//         (s) => s.Email?.trim().toLowerCase() === loggedInEmail
//       );

//       setStudentData(student || null);
//     } catch (error) {
//       console.error("Error fetching sheet data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchStudentData();
// }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-[6px] border-blue-400 border-t-blue-700"></div>
//       </div>
//     );
//   }

//   if (!studentData) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600">
//         No student data found ❌
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-[#e9f3fd] to-[#e6eaf6]">
//       <AppSidebar />

//       <div className="flex-1 flex items-center justify-center px-4 py-10">
//         <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
//           <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
//             🎓 Student Dashboard
//           </h1>

//           <div className="space-y-4 text-lg">
//             <p>
//               <strong>Student:</strong> {studentData["Student Name"]}
//             </p>
//             <p>
//               <strong>Course:</strong> {studentData.Course}
//             </p>
//             <p>
//               <strong>Batch:</strong> {studentData["Batch No"]} (
//               {studentData["Batch Time"]})
//             </p>
//             <p>
//               <strong>Mode:</strong> {studentData["Batch Mode"]}
//             </p>
//             <p>
//               <strong>Fees:</strong> ₹{studentData["Course fees"]}
//             </p>
//             <p>
//               <strong>Paid:</strong> ₹{studentData.Paid}
//             </p>
//             <p>
//               <strong>Pending:</strong> ₹{studentData.Pending}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Clock, Calendar, User, BookOpen, CreditCard, AlertCircle } from "lucide-react";
import AppSidebar from "./AppSidebar";

// const SHEET_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiNWkKLdGsaEC_6HKgTg9tPdVSk0c5O6dxO8Ucrk8kvGvtV_FfdSqE2VGkmVWt_89J6S_h1kCyJaMM/pub?output=csv";
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgKzWhJerWCTqRNNZp70pCT0OUMpmOVxiPcOADqaQdLnPZ38yC6R0iU5X1NNX2JngMXTgQF4bS321a/pub?output=csv";

const Dashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (!storedStudent) {
      setLoading(false);
      return;
    }

    const parsedStudent = JSON.parse(storedStudent);
    const loggedInEmail = parsedStudent.Email?.trim().toLowerCase();

    const fetchStudentData = async () => {
      try {
        const response = await fetch(SHEET_URL + "&t=" + Date.now(), {
          cache: "no-store",
        });
        const text = await response.text();
        const rows = text.split("\n").map((row) => row.split(","));

        const headers = rows[0].map((h) => h.trim());
        const students = rows.slice(1).map((row) =>
          headers.reduce((acc, header, i) => {
            acc[header] = row[i]?.trim();
            return acc;
          }, {})
        );

        const student = students.find(
          (s) => s.Email?.trim().toLowerCase() === loggedInEmail
        );

        setStudentData(student || null);
      } catch (error) {
        console.error("Error fetching sheet data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-xl font-semibold text-red-600 flex items-center gap-2">
          <AlertCircle className="w-6 h-6" /> No student data found ❌
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f0f6ff] to-[#e8eefc]">
      <AppSidebar />

      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 relative">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-10 text-center">
            🎓 Student Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border bg-blue-50 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <User className="w-6 h-6 text-blue-700" />
                <p>
                  <strong>Student:</strong> {studentData["Student Name"]}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-green-50 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-700" />
                <p>
                  <strong>Course:</strong> {studentData.Course}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-purple-50 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-700" />
                <p>
                  <strong>Batch:</strong> {studentData["Batch No"]} (
                  {studentData["Batch Time"]})
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-yellow-50 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-700" />
                <p>
                  <strong>Mode:</strong> {studentData["Batch Mode"]}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-pink-50 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-pink-700" />
                <p>
                  <strong>Fees:</strong> ₹{studentData["Course fees"]}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-indigo-50 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-indigo-700" />
                <p>
                  <strong>Paid:</strong> ₹{studentData.Paid}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border bg-red-50 hover:shadow-md transition md:col-span-2">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-red-700" />
                <p>
                  <strong>Pending:</strong> ₹{studentData.Pending}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;