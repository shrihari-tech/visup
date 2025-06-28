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
          100 Hr's{" "}
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
