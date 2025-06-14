import React from "react";
import CourseCard from "./CourseCard";

const CoursesSection = () => (
  <div className="py-32 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <CourseCard 
          title="AI & Machine Learning"
          description="Master the fundamentals of artificial intelligence and build real-world applications that solve complex problems."
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
          rating="4.9"
          students="12,450"
          duration="12 weeks"
        />
        <CourseCard 
          title="Full Stack Development"
          description="Build modern web applications from scratch using the latest technologies and industry best practices."
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
          rating="4.8"
          students="8,930"
          duration="16 weeks"
        />
        <CourseCard 
          title="Data Science Mastery"
          description="Analyze complex datasets and extract meaningful insights using Python, R, and advanced statistical methods."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
          rating="4.9"
          students="15,670"
          duration="14 weeks"
        />
      </div>
    </div>
  </div>
);

export default CoursesSection;