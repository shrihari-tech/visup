import React from "react";
import { Carousel } from "antd";

// Course data
const courses = [
  {
    title: "AI & Machine Learning",
    desc: "Master the fundamentals of artificial intelligence and build real-world applications that solve complex problems.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
  },
  {
    title: "Full Stack Development",
    desc: "Build modern web applications from scratch using the latest technologies and industry best practices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
  },
  {
    title: "Data Science Mastery",
    desc: "Analyze complex datasets and extract meaningful insights using Python, R, and advanced statistical methods.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
  },
  {
    title: "UI/UX Design Essentials",
    desc: "Design intuitive user interfaces and delightful user experiences with hands-on projects.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
  },
];

// Optional: Tailwind classes for carousel content
const cardClass =
  "bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center max-w-lg mx-auto";
const imgClass = "w-full h-48 object-cover";
const titleClass = "text-2xl font-bold text-gray-800 mb-3";
const descClass = "text-gray-600 mb-6 leading-relaxed flex-1";
const buttonClass =
  "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 mt-auto";

const FeaturedCoursesSection = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center px-4 py-20">
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
          Courses
        </span>
      </h2>
      <p className="text-2xl text-white/80 mb-12">
        Handpicked courses that will transform your career
      </p>
    </div>
    <div className="w-full max-w-2xl mx-auto">
      <Carousel autoplay dots>
        {courses.map((course, idx) => (
          <div key={idx} className="px-4">
            <div className={cardClass}>
              <img src={course.image} alt={course.title} className={imgClass} />
              <div className="p-8 flex flex-col flex-1 w-full">
                <h3 className={titleClass}>{course.title}</h3>
                <p className={descClass}>{course.desc}</p>
                <button className={buttonClass}>Start Learning</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default FeaturedCoursesSection;