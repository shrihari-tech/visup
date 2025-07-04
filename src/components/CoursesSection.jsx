// import React from "react";
// import CourseCard from "./CourseCard";
// import { Carousel } from "antd";

// const CoursesSection = () => {
//   const courses = [
//     {
//       title: "Frontend Developer-React",
//       description:
//         "This course is designed to equip you with the essential skills required to build modern, responsive, and user-friendly websites and web applications...",
//       image: "/frontend.png",
//       rating: "4.9",
//       students: "12,450",
//       duration: "12 weeks",
//     },
//     {
//       title: "UI/UX & Graphic Design",
//       description:
//         "This course is designed for aspiring designers who want to master the principles of visual communication and user-centered design...",
//       image: "/uiux.png",
//       rating: "4.8",
//       students: "8,930",
//       duration: "16 weeks",
//     },
//     {
//       title: "Software Testing",
//       description:
//         "This course is crafted for individuals looking to become skilled in manual and automated software testing...",
//       image:"/st.png",
//       rating: "4.9",
//       students: "15,670",
//       duration: "14 weeks",
//     },
//     {
//       title: "Data Analysis & Visualization",
//       description:
//         "This course is designed for aspiring data analysts and business professionals looking to make data-driven decisions...",
//       image: "/da.png",
//       rating: "4.7",
//       students: "10,200",
//       duration: "10 weeks",
//     },
//     {
//       title: "Mobile App Development",
//       description:
//         "This course is designed for individuals aspiring to become mobile app developers using Flutter and Dart...",
//       image: "/mobile.png",
//       rating: "4.8",
//       students: "9,500",
//       duration: "8 weeks",
//     },
//     {
//       title: "PHP & Laravel Development",
//       description:
//         "This course is crafted for aspiring web developers who want to master backend development using PHP and the Laravel framework...",
//       image: "/php.png",
//       rating: "4.9",
//       students: "11,300",
//       duration: "10 weeks",
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "This course is designed for aspiring marketers and entrepreneurs who want to master the art and science of digital marketing...",
//       image: "/dm.png",
//       rating: "4.8",
//       students: "13,000",
//       duration: "12 weeks",
//     },
//   ];

//   return (
//     <div className="py-32 bg-gradient-to-b from-white to-gray-50" id="courses">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
//           100 Hr's{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//             Course
//           </span>
//         </h2>
//         <Carousel arrows autoplay infinite={false}>
//           {courses.map((course, index) => (
//             <div key={index} className="px-4">
//               <CourseCard
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 rating={course.rating}
//                 students={course.students}
//                 duration={course.duration}
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default CoursesSection;


import React, { useState } from "react";
// import { Users, Play, Star, X, ChevronDown, ChevronRight, Clock, BookOpen, Award, Code, Laptop, Globe, Database, Smartphone, PenTool, BarChart } from "lucide-react";

const CourseCard = ({ title, description, image, rating, students, duration, courseData }) => {
  const [showCurriculum, setShowCurriculum] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {students} students
            </span>
            <span>{duration}</span>
          </div>
          <button 
            onClick={() => setShowCurriculum(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            <Play className="w-5 h-5 mr-2" />
            Road Map
          </button>
        </div>
      </div>

      {showCurriculum && (
        <CurriculumModal 
          course={courseData} 
          onClose={() => setShowCurriculum(false)} 
        />
      )}
    </>
  );
};

// const CurriculumModal = ({ course, onClose }) => {
//   const [expandedSections, setExpandedSections] = useState({});

//   const toggleSection = (sectionId) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [sectionId]: !prev[sectionId]
//     }));
//   };

//   const getIconForSection = (title) => {
//     if (title.toLowerCase().includes('html') || title.toLowerCase().includes('css')) return <Code className="w-5 h-5" />;
//     if (title.toLowerCase().includes('javascript')) return <Globe className="w-5 h-5" />;
//     if (title.toLowerCase().includes('react')) return <Laptop className="w-5 h-5" />;
//     if (title.toLowerCase().includes('bootstrap')) return <PenTool className="w-5 h-5" />;
//     if (title.toLowerCase().includes('project')) return <Award className="w-5 h-5" />;
//     return <BookOpen className="w-5 h-5" />;
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 relative">
//           <button 
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//           <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
//           <div className="flex items-center gap-6 text-sm opacity-90">
//             <span className="flex items-center">
//               <Clock className="w-4 h-4 mr-1" />
//               {course.duration}
//             </span>
//             <span className="flex items-center">
//               <BookOpen className="w-4 h-4 mr-1" />
//               {course.lectures} Lectures
//             </span>
//             <span className="flex items-center">
//               <Users className="w-4 h-4 mr-1" />
//               {course.students}
//             </span>
//           </div>
//         </div>

//         {/* Course Info */}
//         <div className="p-6 border-b border-gray-200">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">What You Will Learn</h3>
//               <ul className="space-y-2">
//                 {course.learningOutcomes.map((outcome, index) => (
//                   <li key={index} className="flex items-start text-gray-600">
//                     <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                     {outcome}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Tools You'll Use</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {course.tools.map((tool, index) => (
//                   <div key={index} className="flex items-center text-gray-600 bg-gray-50 p-2 rounded-lg">
//                     {getIconForSection(tool)}
//                     <span className="ml-2 text-sm">{tool}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Curriculum */}
//         <div className="p-6 overflow-y-auto max-h-96">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Course Curriculum</h3>
//           <div className="space-y-3">
//             {course.curriculum.map((section, index) => (
//               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
//                 <button
//                   onClick={() => toggleSection(index)}
//                   className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
//                 >
//                   <div className="flex items-center">
//                     {getIconForSection(section.title)}
//                     <div className="ml-3">
//                       <h4 className="font-semibold text-gray-800">{section.title}</h4>
//                       <p className="text-sm text-gray-500">{section.topics.length} topics</p>
//                     </div>
//                   </div>
//                   {expandedSections[index] ? 
//                     <ChevronDown className="w-5 h-5 text-gray-400" /> : 
//                     <ChevronRight className="w-5 h-5 text-gray-400" />
//                   }
//                 </button>
                
//                 {expandedSections[index] && (
//                   <div className="px-4 pb-4 bg-gray-50">
//                     <ul className="space-y-2">
//                       {section.topics.map((topic, topicIndex) => (
//                         <li key={topicIndex} className="flex items-center text-gray-600 py-1">
//                           <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
//                           {topic}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Projects */}
//         <div className="p-6 bg-gray-50 border-t border-gray-200">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Projects</h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             {course.projects.map((project, index) => (
//               <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
//                 <div className="flex items-center mb-2">
//                   <Award className="w-5 h-5 text-purple-600 mr-2" />
//                   <h4 className="font-semibold text-gray-800">{project}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CurriculumModal = ({ course, onClose }) => {
//   const [expandedSections, setExpandedSections] = useState({});

//   const toggleSection = (sectionId) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [sectionId]: !prev[sectionId]
//     }));
//   };

//   const getIconForSection = (title) => {
//     if (title.toLowerCase().includes('html') || title.toLowerCase().includes('css')) return <Code className="w-4 h-4 sm:w-5 sm:h-5" />;
//     if (title.toLowerCase().includes('javascript')) return <Globe className="w-4 h-4 sm:w-5 sm:h-5" />;
//     if (title.toLowerCase().includes('react')) return <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />;
//     if (title.toLowerCase().includes('bootstrap')) return <PenTool className="w-4 h-4 sm:w-5 sm:h-5" />;
//     if (title.toLowerCase().includes('project')) return <Award className="w-4 h-4 sm:w-5 sm:h-5" />;
//     return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />;
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
//       <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl mx-2 sm:mx-4">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 relative">
//           <button 
//             onClick={onClose}
//             className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 pr-12 sm:pr-16">{course.title}</h2>
//           <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm opacity-90">
//             <span className="flex items-center">
//               <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//               {course.duration}
//             </span>
//             <span className="flex items-center">
//               <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//               {course.lectures} Lectures
//             </span>
//             <span className="flex items-center">
//               <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//               {course.students}
//             </span>
//           </div>
//         </div>

//         {/* Course Info */}
//         <div className="p-4 sm:p-6 border-b border-gray-200">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//             <div>
//               <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">What You Will Learn</h3>
//               <ul className="space-y-2">
//                 {course.learningOutcomes.map((outcome, index) => (
//                   <li key={index} className="flex items-start text-gray-600 text-sm sm:text-base">
//                     <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
//                     {outcome}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-6 lg:mt-0">
//               <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Tools You'll Use</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
//                 {course.tools.map((tool, index) => (
//                   <div key={index} className="flex items-center text-gray-600 bg-gray-50 p-2 sm:p-3 rounded-lg">
//                     {getIconForSection(tool)}
//                     <span className="ml-2 text-xs sm:text-sm">{tool}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Curriculum */}
//         <div className="p-4 sm:p-6 overflow-y-auto max-h-60 sm:max-h-80 lg:max-h-96">
//           <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Course Curriculum</h3>
//           <div className="space-y-2 sm:space-y-3">
//             {course.curriculum.map((section, index) => (
//               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
//                 <button
//                   onClick={() => toggleSection(index)}
//                   className="w-full p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
//                 >
//                   <div className="flex items-center min-w-0 flex-1">
//                     {getIconForSection(section.title)}
//                     <div className="ml-2 sm:ml-3 min-w-0 flex-1">
//                       <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{section.title}</h4>
//                       <p className="text-xs sm:text-sm text-gray-500">{section.topics.length} topics</p>
//                     </div>
//                   </div>
//                   {expandedSections[index] ? 
//                     <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 ml-2 flex-shrink-0" /> : 
//                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 ml-2 flex-shrink-0" />
//                   }
//                 </button>
                
//                 {expandedSections[index] && (
//                   <div className="px-3 sm:px-4 pb-3 sm:pb-4 bg-gray-50">
//                     <ul className="space-y-1 sm:space-y-2">
//                       {section.topics.map((topic, topicIndex) => (
//                         <li key={topicIndex} className="flex items-start text-gray-600 py-1 text-sm sm:text-base">
//                           <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
//                           <span className="leading-relaxed">{topic}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Projects */}
//         <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
//           <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Projects</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//             {course.projects.map((project, index) => (
//               <div key={index} className="bg-white p-3 sm:p-4 rounded-xl shadow-sm">
//                 <div className="flex items-center">
//                   <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 flex-shrink-0" />
//                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">{project}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { 
  X, 
  Clock, 
  BookOpen, 
  Users, 
  ChevronDown, 
  ChevronRight, 
  Code, 
  Globe, 
  Laptop, 
  PenTool, 
  Award,
  Star,
  Play,
  CheckCircle,
  Target,
  Zap,
  Monitor,
  Smartphone,
  Database,
  Layers,
  Palette,
  Settings
} from 'lucide-react';

const CurriculumModal = ({ course, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getIconForSection = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('html') || lowerTitle.includes('css')) return <Code className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('javascript')) return <Globe className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('react')) return <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('bootstrap')) return <PenTool className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('project')) return <Award className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('database')) return <Database className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('design')) return <Palette className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('responsive')) return <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (lowerTitle.includes('api')) return <Layers className="w-4 h-4 sm:w-5 sm:h-5" />;
    return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />;
  };

  const getToolIcon = (tool) => {
    const lowerTool = tool.toLowerCase();
    if (lowerTool.includes('html')) return <Code className="w-4 h-4 text-orange-500" />;
    if (lowerTool.includes('css')) return <Palette className="w-4 h-4 text-blue-500" />;
    if (lowerTool.includes('javascript')) return <Globe className="w-4 h-4 text-yellow-500" />;
    if (lowerTool.includes('react')) return <Laptop className="w-4 h-4 text-cyan-500" />;
    if (lowerTool.includes('bootstrap')) return <PenTool className="w-4 h-4 text-purple-500" />;
    if (lowerTool.includes('vscode')) return <Monitor className="w-4 h-4 text-blue-600" />;
    if (lowerTool.includes('git')) return <Settings className="w-4 h-4 text-gray-600" />;
    return <Zap className="w-4 h-4 text-green-500" />;
  };

  // Sample course data for demonstration
  const sampleCourse = {
    title: "Complete Web Development Bootcamp",
    duration: "12 weeks",
    lectures: "180",
    students: "25,000+ students",
    rating: "4.8",
    level: "Beginner to Advanced",
    instructor: "John Doe",
    price: "$299",
    learningOutcomes: [
      "Build responsive websites with HTML5, CSS3, and JavaScript",
      "Master modern frameworks like React and Vue.js",
      "Create full-stack applications with Node.js and Express",
      "Deploy applications to cloud platforms like AWS and Heroku",
      "Understand database management with MongoDB and MySQL",
      "Implement user authentication and security best practices"
    ],
    tools: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Bootstrap",
      "VS Code",
      "Git & GitHub",
      "MongoDB"
    ],
    curriculum: [
      {
        title: "HTML & CSS Fundamentals",
        topics: [
          "HTML structure and semantic elements",
          "CSS selectors and properties",
          "Flexbox and Grid layouts",
          "Responsive design principles",
          "CSS animations and transitions"
        ]
      },
      {
        title: "JavaScript Essentials",
        topics: [
          "Variables, functions, and data types",
          "DOM manipulation and events",
          "Asynchronous programming with promises",
          "Modern ES6+ features",
          "Error handling and debugging"
        ]
      },
      {
        title: "React Development",
        topics: [
          "Component architecture and JSX",
          "State management with hooks",
          "React Router for navigation",
          "API integration and data fetching",
          "Testing React applications"
        ]
      },
      {
        title: "Backend Development",
        topics: [
          "Node.js and Express.js setup",
          "RESTful API design",
          "Database integration",
          "Authentication and authorization",
          "Server deployment and hosting"
        ]
      }
    ],
    projects: [
      "Personal Portfolio Website",
      "E-commerce Shopping Cart",
      "Social Media Dashboard",
      "Real-time Chat Application",
      "Task Management System",
      "Weather App with API Integration"
    ],
    requirements: [
      "Basic computer literacy",
      "No prior programming experience required",
      "Reliable internet connection",
      "Computer with at least 4GB RAM"
    ]
  };

  const displayCourse = course;

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
        activeTab === id
          ? 'bg-white text-purple-600 shadow-md'
          : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon className="w-4 h-4 mr-1 sm:mr-2" />
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl mx-2 sm:mx-4">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white p-4 sm:p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 pr-12 sm:pr-16 leading-tight">
              {displayCourse.title}
            </h2>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm sm:text-base font-medium">{displayCourse.rating}</span>
              </div>
              <span className="text-sm sm:text-base opacity-80">•</span>
              <span className="text-sm sm:text-base opacity-90">{displayCourse.level}</span>
              <span className="text-sm sm:text-base opacity-80">•</span>
              <span className="text-sm sm:text-base opacity-90">{displayCourse.instructor}</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm opacity-90">
              <span className="flex items-center bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {displayCourse.duration}
              </span>
              <span className="flex items-center bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {displayCourse.lectures} Lectures
              </span>
              <span className="flex items-center bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {displayCourse.students}
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <TabButton id="overview" label="Overview" icon={BookOpen} />
            <TabButton id="curriculum" label="Curriculum" icon={Layers} />
            <TabButton id="projects" label="Projects" icon={Award} />
            {/* <TabButton id="requirements" label="Requirements" icon={CheckCircle} /> */}
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto max-h-[calc(95vh-200px)] sm:max-h-[calc(90vh-200px)]">
          {activeTab === 'overview' && (
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    What You Will Learn
                  </h3>
                  <div className="space-y-3">
                    {displayCourse.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-purple-600" />
                    Tools & Technologies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {displayCourse.tools.map((tool, index) => (
                      <div key={index} className="flex items-center bg-white border border-gray-200 hover:border-purple-300 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        {getToolIcon(tool)}
                        <span className="ml-3 text-gray-700 text-sm sm:text-base font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-purple-600" />
                Course Curriculum
              </h3>
              <div className="space-y-4">
                {displayCourse.curriculum.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center min-w-0 flex-1">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3 sm:mr-4 group-hover:bg-purple-200 transition-colors">
                          {getIconForSection(section.title)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{section.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            {section.topics.length} topics
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 flex items-center">
                        <span className="text-xs sm:text-sm text-gray-400 mr-2">
                          {expandedSections[index] ? 'Hide' : 'Show'}
                        </span>
                        {expandedSections[index] ? 
                          <ChevronDown className="w-5 h-5 text-purple-600 transition-transform duration-200" /> : 
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-200" />
                        }
                      </div>
                    </button>
                    
                    {expandedSections[index] && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-gradient-to-r from-gray-50 to-purple-50">
                        <div className="space-y-3">
                          {section.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-purple-600 text-xs font-medium">{topicIndex + 1}</span>
                              </div>
                              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-purple-600" />
                Hands-on Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {displayCourse.projects.map((project, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-purple-50 border border-purple-200 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{project}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">Project #{index + 1}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                        Build & Deploy
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* {activeTab === 'requirements' && (
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
                Requirements
              </h3>
              <div className="space-y-4">
                {displayCourse.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start bg-green-50 border border-green-200 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};


const CoursesSection = () => {
  const courses = [
    {
      title: "Software Development",
      description: "This course is designed to equip you with the essential skills required to build modern, responsive, and user-friendly websites...",
      image: "/sd.png",
      rating: "4.9",
      students: "12,450",
      duration: "100 hours",
      courseData: { 
        title: "Software Development",
        duration: "100 hours",
        lectures: "35",
        students: "1500+",
        learningOutcomes: [
          "Front-End Development: HTML5, CSS3, JavaScript (ES6+), ReactJS, Angular, Vue.js, Bootstrap, Responsive Web Design",
          "Style web pages using CSS, including advanced topics like Flexbox and Grid Layouts",
          "Create responsive designs with media queries for different devices",
          "Bootstrap 5 - Quickly design mobile-first, responsive layouts",
          "Node.js, Express.js, Python (Django/Flask), Java (Spring Boot), REST APIs, Server-side Logic",
          " Git, GitHub, Version Control, Deployment Strategies, Agile Methodologies"
        ],
        tools: [
          "Visual Studio Code",
          "Git & GitHub",
          "Chrome Developer Tools",
          "Node.js & npm",
          "Netlify/Vercel"
        ],
        curriculum: [
          {
            title: "HTML5 & CSS3",
            topics: [
              "Understand the structure of web pages using semantic HTML tags",
              "Style web pages using CSS, including advanced topics like Flexbox and Grid Layouts",
              "Create responsive designs with media queries for different devices",

            ]
          },
          {
            title: "Bootstrap 5",
            topics: [
              "Quickly design mobile-first, responsive layouts using Bootstrap's grid system and components",
              "Customize themes and use utility classes to create polished user interfaces faster"
            ]
          },
          {
            title: "JavaScript (ES6+)",
            topics: [
              "Learn core programming concepts like variables, functions, loops, and conditionals",
              "Understand modern JavaScript syntax including arrow functions, destructuring, and promises",
              "Manipulate the DOM, handle events, and make asynchronous API calls using fetch"
            ]
          },
          {
            title: "ReactJS",
            topics: [
              "Build dynamic and scalable single-page applications (SPAs)",
              "Learn to create and reuse components, manage state with hooks, and useEffect",
              "Understand JSX, virtual DOM, component lifecycle, and props",
              "Handle routing with React Router and make REST API integrations",
              "Introduction to hooks and managing complex state with Context API or Redux"
            ]
          }
        ],
        projects: [
          "Personal Portfolio Website",
          "Responsive Landing Page",
          "Interactive To-Do List",
          "Weather App using API",
          "Blog or E-commerce Front-End with React"
        ]
      }
    },
    {
      title: "UI/UX & Graphic Design",
      description: "This course is designed for aspiring designers who want to master the principles of visual communication and user-centered design...",
      image: "/uiux.png",
      rating: "4.8",
      students: "8,930",
      duration: "16 weeks",
      courseData: {
        title: "UI/UX & Graphic Design",
        duration: "16 weeks",
        lectures: "48",
        students: "8,930",
        learningOutcomes: [
          "User Experience (UX): User Research, Persona Creation, User Journey Mapping, Information Architecture, Wireframing, Usability Testing, UX Principles",
          "User Interface (UI): Visual Design Principles, Color Theory, Typography, Layout, Prototyping (Figma, , Sketch), Interaction Design, UI Best Practices",
          // "Develop prototypes and interactive mockups",
          // "Design brand identities and logos",
          // "Understand color theory and typography"
        ],
        tools: [
          "Figma",
          "Adobe",
          "Illustrator",
          "XD",
          "Sketch",
          "Photoshop"
        ],
        curriculum: [
          {
            title: "Design Fundamentals",
            topics: [
              "Design principles and visual hierarchy",
              "Color theory and psychology",
              "Typography and layout design"
            ]
          },
          {
            title: "UI/UX Design",
            topics: [
              "User research and personas",
              "Wireframing and prototyping",
              "Usability testing and iteration"
            ]
          }
        ],
        projects: [
          "Mobile App Design",
          "Website Redesign",
          "Brand Identity Package",
          "E-commerce Platform Design"
        ]
      }
    },
    {
      title: "Software Testing",
      description: "This course is crafted for individuals looking to become skilled in manual and automated software testing...",
      image: "/st.png",
      rating: "4.9",
      students: "15,670",
      duration: "14 weeks",
      courseData: {
        title: "Software Testing",
        duration: "14 weeks",
        lectures: "40",
        students: "15,670",
        learningOutcomes: [
          "Understand software testing principles and methodologies",
          "Perform manual testing and create test cases",
          "Automate tests using Selenium and Postman",
          "Identify and report bugs effectively",
          "Ensure software quality and reliability"
        ],
        tools: [
          "Selenium",
          "Postman",
          "Jira",
          "TestRail",
          "Git"
        ],
        curriculum: [
          {
            title: "Introduction to Software Testing",
            topics: [
              "Software testing principles and methodologies",
              "Types of testing: functional, non-functional, regression, etc.",
              "Test planning and documentation"
            ]
          },
          {
            title: "Manual Testing",
            topics: [
              "Creating test cases and test plans",
              "Executing tests and reporting defects",
              "Understanding test environments and configurations"
            ]
          },
          {
            title: "Automated Testing",
            topics: [
              "Introduction to automation tools like Selenium",
              "Writing automated test scripts",
              "API testing with Postman"
            ]
          }
        ],
        projects: [
          "Test Case Development for a Web Application",
          "Automated Testing Suite using Selenium",
          "API Testing Project with Postman",
          "Bug Tracking and Reporting System"
        ]
      }
    },
    {
      title: "Data Analysis & Visualization",
      description: "This course is designed for aspiring data analysts and business professionals looking to make data-driven decisions...",
      image: "/da.png",
      rating: "4.7",
      students: "10,200",
      duration: "10 weeks",
      courseData: {
        title: "Data Analysis & Visualization",
        duration: "10 weeks",
        lectures: "30",
        students: "10,200",
        learningOutcomes: [
          "Data Fundamentals: Data Collection, Data Cleaning, Data Visualization, Exploratory Data Analysis (EDA)",
          "Create interactive dashboards and reports",
          "Use SQL for data extraction and manipulation",
          "Visualize data effectively with charts and graphs"
        ],
        tools: [
          "Python for Data Analysis (Pandas, NumPy, Matplotlib, Seaborn),",
          "Power BI",
          "SQL for Database Management",
          "Tableau",
          " Microsoft Excel (Advanced)"
        ],
        curriculum: [
          {
            title: "Data Analysis Fundamentals",
            topics: [
              "Understanding data types and structures",
              "Data cleaning and preprocessing techniques",
              "Basic statistical analysis"
            ]
          },
          {
            title: "Data Visualization",
            topics: [
              "Creating charts and graphs in Excel",
              "Building interactive dashboards in Power BI",
              "Using SQL for data extraction"
            ]
          }
        ],
        projects: [
          "Sales Data Analysis Dashboard",
          "Customer Segmentation Report",
          "Financial Performance Visualization"
        ]
      }
    },
    {
      title: "Mobile App Development",
      description: "This course is designed for individuals aspiring to become mobile app developers using Flutter and Dart...",
      image: "/mobile.png",
      rating: "4.8",
      students: "9,500",
      duration: "8 weeks",
      courseData: {
        title: "Mobile App Development",
        duration: "8 weeks",
        lectures: "24",
        students: "9,500",
        learningOutcomes: [
          "Build cross-platform mobile applications using Flutter",
          "Understand Dart programming language fundamentals",
          "Implement responsive UI designs for mobile devices",
          "Integrate APIs and manage app state"
        ],
        tools: [
          "Flutter SDK",
          "Dart Programming Language",
          "Android Studio",
          "Visual Studio Code"
        ],
        curriculum: [
          {
            title: "Flutter Basics",
            topics: [
              "Setting up the Flutter environment",
              "Understanding widgets and state management",
              "Building responsive layouts"
            ]
          },
          {
            title: "Advanced Flutter Development",
            topics: [
              "Integrating REST APIs and handling JSON data",
              "Managing app state with Provider or Riverpod",
              "Publishing apps to Google Play Store and Apple App Store"
            ]
          }
        ],
        projects: [
          "Personal Finance Tracker App",
          "E-commerce Mobile Application",
          "Social Media Platform Prototype"
        ]
      }
    },
    {
      title: "Digital Marketing Course Page",
      description: "Marketing Professionals, Business Owners, Entrepreneurs, Graduates, Freelancers...",
      image: "/dm.png",
      rating: "4.9",
      students: "11,300",
      duration: "10 weeks",
      courseData: {
        title: "Digital Marketing",
        duration: "10 weeks",
        lectures: "30",
        students: "11,300",
        learningOutcomes: [
          "SEO (Search Engine Optimization): On-page SEO, Off-page SEO, Keyword Research, Technical SEO, Google Analytics",
          "SEM (Search Engine Marketing): Google Ads, PPC Campaigns",
          "Social Media Marketing: Strategy, Content Creation, Paid Campaigns (Facebook Ad",
          "Content Marketing: Strategy, Blogging, Video Marketing",
          "Email Marketing: List Building, Campaign Management, Automation",
        ],
        tools: [
          "Google Ads","Google Analytics", 
          "SEMrush", 
          "Ahrefs (concepts)", 
          "Mailchimp"
        ],
        curriculum: [
          {
            title: "Digital Marketing",
            topics: [
              "Digital Marketing Executive, SEO Specialist, Social Media Manager",
              "PPC Specialist, Email Marketing Specialist",
              "Content Marketing Specialist, Freelance Digital Marketer"
            ]
          },
          // {
          //   title: "Laravel Framework",
          //   topics: [
          //     "Setting up Laravel environment",
          //     "Routing, controllers, and views",
          //     "Database migrations and Eloquent ORM"
          //   ]
          // },
          // {
          //   title: "Building Web Applications with Laravel",
          //   topics: [
          //     "Creating RESTful APIs with Laravel",
          //     "User authentication and authorization",
          //     "Deploying Laravel applications"
          //   ]
          // }
        ],
        projects: [
          "Email Marketing Campaign",
          "Content Marketing Campaign",
          "Social Media Audit and Strategy Plan"
        ]
      }
    },
    // Add more courses here with their respective courseData
  ];

  return (
    <div className="py-32 bg-gradient-to-b from-white to-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
          100 Hr's to Get your {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Entry Level JOB'S
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              rating={course.rating}
              students={course.students}
              duration={course.duration}
              courseData={course.courseData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;