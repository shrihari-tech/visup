// import React from "react";
// import TextPressure from "../BlitsBlocks/TextPressure/TextPressure";
// function Home() {
//   return (
//     <>
//       {/* Parallax Section 1 */}
//       <div
//         className="h-screen bg-center bg-cover bg-fixed"
//         style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?nature')" }}
//       >
//         <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//           {/* <h1 className="text-white text-5xl font-bold"><TextPressure/></h1> */}
//           <TextPressure/>
//         </div>
//       </div>

//       {/* Regular Content */}
//       <div className="h-screen flex items-center justify-center bg-white">
//         <p className="text-3xl text-gray-800">Scroll down for more...</p>
//       </div>

//       {/* Parallax Section 2 */}
//       <div
//         className="h-screen bg-center bg-cover bg-fixed"
//         style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?mountains')" }}
//       >
//         <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//           <h2 className="text-white text-4xl font-semibold">Another Parallax Section</h2>
//         </div>
//       </div>

//       {/* More Content */}
//       <div className="h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-3xl text-gray-700">Tailwind + Parallax = ❤️</p>
//       </div>
//     </>
//   );
// }

// export default Home;

import React, { useState, useEffect, useRef } from "react";
import { BookOpen, Users, Award, ArrowRight, Play, Star, ChevronDown, Zap, Target, Globe } from "lucide-react";
// Mock TextPressure component with enhanced styling
const TextPressure = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Learn", "Grow", "Excel", "Succeed"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 animate-pulse">
        {texts[currentText]}
      </div>
      <div className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
        Beyond Boundaries
      </div>
    </div>
  );
};

const FloatingCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <div 
    className="group bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-relaxed mb-6">{description}</p>
    <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
      <span className="mr-2">Explore</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="text-center group">
    <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <div className="text-4xl font-black text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const CourseCard = ({ title, description, image, rating, students, duration }) => (
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
      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 flex items-center justify-center">
        <Play className="w-5 h-5 mr-2" />
        Start Learning
      </button>
    </div>
  </div>
);

function Home() {

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
const carousel = useRef(null);

  // Carousel scroll logic
  const scrollTo = (idx) => {
    if (carousel.current) {
      const child = carousel.current.children[idx];
      child.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };


  return (
    <>
      {/* Hero Section with Enhanced Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-bounce" />
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-bounce" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-6xl mx-auto">
            <TextPressure />
            <p className="text-xl md:text-2xl text-white/80 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with cutting-edge courses designed by industry experts. 
              Transform your career with personalized learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl">
                Start Your Journey
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">EduVerse</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of education with our revolutionary platform that adapts to your learning style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FloatingCard 
              icon={Zap}
              title="Lightning Fast"
              description="Our AI-powered platform delivers personalized content at incredible speeds, ensuring you never lose momentum in your learning journey."
              delay={0}
            />
            <FloatingCard 
              icon={Target}
              title="Precision Learning"
              description="Advanced algorithms track your progress and adapt content difficulty to match your skill level, maximizing learning efficiency."
              delay={200}
            />
            <FloatingCard 
              icon={Globe}
              title="Global Community"
              description="Connect with learners worldwide, participate in collaborative projects, and gain insights from diverse perspectives."
              delay={400}
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl shadow-2xl p-12">
            <StatCard number="50K+" label="Students" icon={Users} />
            <StatCard number="500+" label="Courses" icon={BookOpen} />
            <StatCard number="98%" label="Success Rate" icon={Award} />
            <StatCard number="24/7" label="Support" icon={Zap} />
          </div>
        </div>
      </div>

      {/* Enhanced Parallax Section 2 */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        />
        
        {/* Content */}
        {/* <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Courses</span>
            </h2>
            <p className="text-2xl text-white/80 mb-12">
              Handpicked courses that will transform your career
            </p>
          </div>
        </div> */}
        <section className="relative h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Courses</span>
        </h2>
        <p className="text-2xl text-white/80 mb-12">
          Handpicked courses that will transform your career
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-center space-x-2 mb-6">
          {courses.map((_, idx) => (
            <button
              key={idx}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-yellow-400 transition"
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div
          ref={carousel}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="min-w-[320px] max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl snap-center flex-shrink-0"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.desc}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        
      </div>

      {/* Courses Section */}
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

      {/* Call to Action Section */}
      <div className="py-32 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.2
            }}
          />

        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* <MetallicPaint 
              imageData={imageData ?? new ImageData(1, 1)} 
              params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }} 
            /> */}

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-2xl text-white/80 mb-12 leading-relaxed">
            Join thousands of successful learners who have already taken the leap. Your journey to excellence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-full text-xl font-black hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl">
              Get Started Today
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;