// import React, { useEffect, useState } from 'react';
// import { 
//   User, 
//   Phone, 
//   Mail, 
//   BookOpen, 
//   CreditCard, 
//   AlertCircle, 
//   CheckCircle,
//   Home,
//   BarChart3,
//   Settings,
//   GraduationCap,
//   DollarSign,
//   Trophy,
//   Star
// } from 'lucide-react';

// import AppSidebar from "./AppSidebar"

// // API call with realistic data
// const fetchStudentProfile = async () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         name: "Shrihari Tech",
//         phone: "+91 98765 43210",
//         email: "shrihari@example.com",
//         course: {
//           name: "Full Stack Development",
//           specialization: "MERN Stack",
//           fee: 45000,
//           paid: 30000,
//           progress: 68
//         },
//         avatar: "ST",
//         studentId: "EDU2024001",
//         status: "Active",
//         achievements: 12
//       });
//     }, 800);
//   });
// };

// function Profile() {
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchStudentProfile().then((data) => {
//       setStudent(data);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex h-screen">
//         <AppSidebar />
//         <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
//             <h3 className="text-xl font-semibold text-slate-700 mb-1">Loading Profile</h3>
//             <p className="text-slate-500">Please wait...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const pendingAmount = student.course.fee - student.course.paid;
//   const paymentPercentage = (student.course.paid / student.course.fee) * 100;

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Sidebar */}
//       <AppSidebar />
      
//       {/* Main Content */}
//       <div className="flex-1 p-6 relative z-10">
//         {/* Header */}
//         <div className="mb-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//               Student Profile
//             </h1>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           {/* Profile Header - Compact */}
//           <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 mb-6 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
//             <div className="flex items-center space-x-6">
//               {/* Avatar */}
//               <div className="relative">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
//                   {student.avatar}
//                 </div>
//                 <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                   <CheckCircle className="w-4 h-4 text-white" />
//                 </div>
//                 <div className="absolute -top-2 -left-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
//                   <Star className="w-3 h-3 text-white" />
//                 </div>
//               </div>

//               {/* Basic Info */}
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-slate-800 mb-1">{student.name}</h2>
//                 <p className="text-slate-600 mb-2">ID: {student.studentId}</p>
//                 <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
//                   {student.status} Student
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="flex space-x-4">
//                 <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
//                   <p className="text-xl font-bold text-blue-700">{student.course.progress}%</p>
//                   <p className="text-xs text-blue-600">Progress</p>
//                 </div>
//                 <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-100">
//                   <p className="text-xl font-bold text-purple-700">{student.achievements}</p>
//                   <p className="text-xs text-purple-600">Achievements</p>
//                 </div>
//                 <div className="text-center p-3 bg-green-50 rounded-xl border border-green-100">
//                   <p className="text-xl font-bold text-green-700">{Math.round(paymentPercentage)}%</p>
//                   <p className="text-xs text-green-600">Paid</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Personal Information */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
//               <div className="flex items-center mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
//                   <User className="w-4 h-4 text-white" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-800">Personal Info</h3>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center p-3 bg-slate-50/80 rounded-xl hover:bg-blue-50/80 transition-all duration-300">
//                   <User className="w-4 h-4 text-blue-600 mr-3" />
//                   <div>
//                     <p className="text-xs text-slate-500 font-medium">Name</p>
//                     <p className="text-sm font-semibold text-slate-800">{student.name}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center p-3 bg-slate-50/80 rounded-xl hover:bg-green-50/80 transition-all duration-300">
//                   <Phone className="w-4 h-4 text-green-600 mr-3" />
//                   <div>
//                     <p className="text-xs text-slate-500 font-medium">Mobile</p>
//                     <p className="text-sm font-semibold text-slate-800">{student.phone}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center p-3 bg-slate-50/80 rounded-xl hover:bg-purple-50/80 transition-all duration-300">
//                   <Mail className="w-4 h-4 text-purple-600 mr-3" />
//                   <div>
//                     <p className="text-xs text-slate-500 font-medium">Email</p>
//                     <p className="text-sm font-semibold text-slate-800">{student.email}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Course Information */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
//               <div className="flex items-center mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
//                   <GraduationCap className="w-4 h-4 text-white" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-800">Course Details</h3>
//               </div>

//               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-4 border border-indigo-100">
//                 <div className="flex items-center mb-3">
//                   <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
//                   <div>
//                     <h4 className="text-lg font-bold text-indigo-800">{student.course.name}</h4>
//                     <p className="text-sm text-indigo-600">{student.course.specialization}</p>
//                   </div>
//                 </div>
                
//                 <div className="mb-3">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm text-indigo-700 font-medium">Progress</span>
//                     <span className="text-sm text-indigo-800 font-bold">{student.course.progress}%</span>
//                   </div>
//                   <div className="w-full bg-indigo-200 rounded-full h-3">
//                     <div 
//                       className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
//                       style={{ width: `${student.course.progress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Information */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
//               <div className="flex items-center mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
//                   <CreditCard className="w-4 h-4 text-white" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-800">Payment Info</h3>
//               </div>

//               {/* Payment Cards - Compact */}
//               <div className="space-y-3 mb-4">
//                 <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
//                   <div className="flex items-center">
//                     <DollarSign className="w-4 h-4 text-slate-600 mr-2" />
//                     <span className="text-sm font-medium text-slate-600">Course Fee</span>
//                   </div>
//                   <span className="text-lg font-bold text-slate-800">₹{student.course.fee.toLocaleString()}</span>
//                 </div>

//                 <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl">
//                   <div className="flex items-center">
//                     <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
//                     <span className="text-sm font-medium text-emerald-600">Paid</span>
//                   </div>
//                   <span className="text-lg font-bold text-emerald-700">₹{student.course.paid.toLocaleString()}</span>
//                 </div>

//                 <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl">
//                   <div className="flex items-center">
//                     <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
//                     <span className="text-sm font-medium text-red-600">Pending</span>
//                   </div>
//                   <span className="text-lg font-bold text-red-700">₹{pendingAmount.toLocaleString()}</span>
//                 </div>
//               </div>

//               {/* Payment Progress */}
//               <div className="mb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium text-slate-700">Payment Progress</span>
//                   <span className="text-sm font-bold text-emerald-600">{Math.round(paymentPercentage)}%</span>
//                 </div>
//                 <div className="w-full bg-slate-200 rounded-full h-3">
//                   <div 
//                     className="h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
//                     style={{ width: `${paymentPercentage}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Payment Status - Compact */}
//               {pendingAmount > 0 ? (
//                 <div className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
//                   <AlertCircle className="w-4 h-4 text-amber-600 mr-3" />
//                   <div className="flex-1">
//                     <p className="text-xs font-bold text-amber-800">Payment Due</p>
//                     <p className="text-xs text-amber-700">₹{pendingAmount.toLocaleString()} pending</p>
//                   </div>
//                   <button className="bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-amber-600 transition-colors">
//                     Pay
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex items-center p-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl">
//                   <CheckCircle className="w-4 h-4 text-emerald-600 mr-3" />
//                   <div>
//                     <p className="text-xs font-bold text-emerald-800">Payment Complete! 🎉</p>
//                     <p className="text-xs text-emerald-700">All payments completed</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  BookOpen,
  CreditCard,
  AlertCircle,
  CheckCircle,
  GraduationCap,
  DollarSign,
  Star,
} from "lucide-react";

import AppSidebar from "./AppSidebar";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiNWkKLdGsaEC_6HKgTg9tPdVSk0c5O6dxO8Ucrk8kvGvtV_FfdSqE2VGkmVWt_89J6S_h1kCyJaMM/pub?output=csv";

function Profile() {
  const [student, setStudent] = useState(null);
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
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const rows = text.split("\n").map((row) => row.split(","));

        const headers = rows[0].map((h) => h.trim());
        const students = rows.slice(1).map((row) =>
          headers.reduce((acc, header, i) => {
            acc[header] = row[i]?.trim();
            return acc;
          }, {})
        );

        const studentData = students.find(
          (s) => s.Email?.trim().toLowerCase() === loggedInEmail
        );

        setStudent(studentData || null);
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
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-slate-700 mb-1">
              Loading Profile
            </h3>
            <p className="text-slate-500">Please wait...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 flex justify-center items-center text-xl font-semibold text-red-600 bg-slate-50">
          No student data found ❌
        </div>
      </div>
    );
  }

  // Calculate payment progress
  const totalFee = parseInt(student["Course fees"] || 0);
  const paid = parseInt(student["Paid"] || 0);
  const pendingAmount = parseInt(student["Pending"] || totalFee - paid);
  const paymentPercentage = totalFee ? (paid / totalFee) * 100 : 0;

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center space-x-3">
          <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Student Profile
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="flex items-center space-x-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                  {student["Student Name"]?.charAt(0) || "S"}
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-1">
                  {student["Student Name"]}
                </h2>
                <p className="text-slate-600 mb-2">
                  ID: {student["Student ID"]}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Active Student
                </div>
              </div>

              {/* Stats */}
              <div className="flex space-x-4">
                <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-xl font-bold text-blue-700">
                    {Math.round(paymentPercentage)}%
                  </p>
                  <p className="text-xs text-blue-600">Paid</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-xl font-bold text-green-700">
                    ₹{paid.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600">Paid</p>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-xl font-bold text-red-700">
                    ₹{pendingAmount.toLocaleString()}
                  </p>
                  <p className="text-xs text-red-600">Pending</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Personal Info */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" /> Personal Info
              </h3>
              <p className="mb-2">
                📱 <strong>Mobile:</strong> {student["Mobile No"]}
              </p>
              <p className="mb-2">
                📧 <strong>Email:</strong> {student["Email"]}
              </p>
            </div>

            {/* Course Info */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-purple-600" /> Course
              </h3>
              <p>
                📖 <strong>Course:</strong> {student["Course"]}
              </p>
              <p>
                ⏰ <strong>Batch:</strong> {student["Batch No"]} (
                {student["Batch Time"]})
              </p>
              <p>
                📅 <strong>Start Date:</strong> {student["Batch Start date"]}
              </p>
              <p>
                🎯 <strong>Mode:</strong> {student["Batch Mode"]}
              </p>
            </div>

            {/* Payment Info */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-green-600" /> Payment
              </h3>
              <p>
                💰 <strong>Total Fee:</strong> ₹{totalFee.toLocaleString()}
              </p>
              <p>
                ✅ <strong>Paid:</strong> ₹{paid.toLocaleString()}
              </p>
              <p>
                ⚠️ <strong>Pending:</strong> ₹{pendingAmount.toLocaleString()}
              </p>
              <div className="mt-3 w-full bg-slate-200 rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all"
                  style={{ width: `${paymentPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
