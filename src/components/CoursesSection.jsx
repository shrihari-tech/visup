// import React from "react";
// import CourseCard from "./CourseCard";

// const CoursesSection = () => (
//   <div className="py-32 bg-gradient-to-b from-white to-gray-50">
//     <div className="max-w-7xl mx-auto px-4">
//       <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
//           Our Launched <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Course</span>
//         </h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         <CourseCard 
//           title="Frontend Developer-React"
//           description="This course is designed to equip you with the essential skills required to build modern, responsive, and user-friendly websites and web applications. You’ll start from the basics of web development and progress toward advanced concepts like component-based development using ReactJS. Whether you’re a beginner or someone looking to enhance your web development skills, this course provides a solid foundation for a career in front-end development."
//           image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
//           rating="4.9"
//           students="12,450"
//           duration="12 weeks"
//         />
//         <CourseCard 
//           title="UI/UX & Graphic Design"
//           description="This course is designed for aspiring designers who want to master the principles of visual communication and user-centered design. Learn to create professional graphics, intuitive interfaces, and engaging digital experiences using industry-standard tools and methods. Whether you're looking to design brand identities or craft seamless user journeys, this course will provide you with the creative and technical skills to thrive in the digital design industry."
//           image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
//           rating="4.8"
//           students="8,930"
//           duration="16 weeks"
//         />
//         <CourseCard 
//           title="Software Testing"
//           description="This course is crafted for individuals looking to become skilled in manual and automated software testing. You’ll gain a deep understanding of QA principles, testing methodologies, tools, and best practices to ensure high-quality software delivery. Ideal for beginners and career switchers aiming to join the IT industry as testers or QA analysts."
//           image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
//           rating="4.9"
//           students="15,670"
//           duration="14 weeks"
//         />
//         <CourseCard 
//           title="Data Analysis & Visualization"
//           description="This course is designed for aspiring data analysts and business professionals looking to make data-driven decisions. You'll learn how to collect, clean, analyze, and visualize data using industry-standard tools and techniques. Ideal for beginners, career switchers, or anyone seeking to master data analysis for real-world applications."
//           image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
//           rating="4.7"
//           students="10,200"
//           duration="10 weeks"
//         />
//         <CourseCard 
//           title="Mobile App Development"
//           description="This course is designed for individuals aspiring to become mobile app developers using Flutter and Dart. You'll learn to build high-performance, cross-platform mobile apps for Android and iOS with a single codebase. Whether you're a beginner or transitioning into mobile development, this course equips you with hands-on skills to create real-world apps and launch your development career."
//           image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
//           rating="4.8"
//           students="9,500"
//           duration="8 weeks"
//         />
//         <CourseCard 
//           title="PHP & Laravel Development"
//           description="This course is crafted for aspiring web developers who want to master backend development using PHP and the Laravel framework. You'll learn how to build secure, dynamic, and data-driven web applications from scratch, ideal for beginners and those transitioning into full stack development with modern PHP practices."
//           image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
//           rating="4.9"
//           students="11,300"
//           duration="10 weeks"
//         />
//         <CourseCard 
//           title="Digital Marketing"
//           description="This course is designed for aspiring marketers and entrepreneurs who want to master the art and science of digital marketing. From SEO to social media strategy, you'll gain hands-on experience with tools and platforms that drive real business results. Perfect for beginners, freelancers, and business owners aiming to build a strong digital presence and drive growth online."
//           image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
//           rating="4.8"
//           students="13,000"
//           duration="12 weeks"
//         />
//       </div>
//     </div>
//   </div>
// );

// export default CoursesSection;

import React from "react";
import CourseCard from "./CourseCard";
import { Carousel } from "antd";

const CoursesSection = () => {
  const courses = [
    {
      title: "Frontend Developer-React",
      description:
        "This course is designed to equip you with the essential skills required to build modern, responsive, and user-friendly websites and web applications...",
      image: "/frontend.png",
      rating: "4.9",
      students: "12,450",
      duration: "12 weeks",
    },
    {
      title: "UI/UX & Graphic Design",
      description:
        "This course is designed for aspiring designers who want to master the principles of visual communication and user-centered design...",
      image: "/uiux.png",
      rating: "4.8",
      students: "8,930",
      duration: "16 weeks",
    },
    {
      title: "Software Testing",
      description:
        "This course is crafted for individuals looking to become skilled in manual and automated software testing...",
      image:"/st.png",
      rating: "4.9",
      students: "15,670",
      duration: "14 weeks",
    },
    {
      title: "Data Analysis & Visualization",
      description:
        "This course is designed for aspiring data analysts and business professionals looking to make data-driven decisions...",
      image: "/da.png",
      rating: "4.7",
      students: "10,200",
      duration: "10 weeks",
    },
    {
      title: "Mobile App Development",
      description:
        "This course is designed for individuals aspiring to become mobile app developers using Flutter and Dart...",
      image: "/mobile.png",
      rating: "4.8",
      students: "9,500",
      duration: "8 weeks",
    },
    {
      title: "PHP & Laravel Development",
      description:
        "This course is crafted for aspiring web developers who want to master backend development using PHP and the Laravel framework...",
      image: "/php.png",
      rating: "4.9",
      students: "11,300",
      duration: "10 weeks",
    },
    {
      title: "Digital Marketing",
      description:
        "This course is designed for aspiring marketers and entrepreneurs who want to master the art and science of digital marketing...",
      image: "/dm.png",
      rating: "4.8",
      students: "13,000",
      duration: "12 weeks",
    },
  ];

  return (
    <div className="py-32 bg-gradient-to-b from-white to-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
          Our Launched{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Course
          </span>
        </h2>
        <Carousel arrows autoplay infinite={false}>
          {courses.map((course, index) => (
            <div key={index} className="px-4">
              <CourseCard
                title={course.title}
                description={course.description}
                image={course.image}
                rating={course.rating}
                students={course.students}
                duration={course.duration}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CoursesSection;
