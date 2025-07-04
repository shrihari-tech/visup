import React from "react";
import { BookOpen, Users, Award, Zap, ChartLine, Globe, Figma, TvMinimalPlay } from "lucide-react";
import FloatingCard from "./FloatingCard";
import StatCard from "./StatCard";
import LandingPage from "./LandingPage";
const FeaturesSection = () => (
  <div className="py-32 bg-gradient-to-b from-gray-50 to-white" id="whyus">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Vinsup</span>
        </h2>
        <p className="text-xl text-justify text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Unbeatable Value at Rs. 14,999: "High-quality, practical tech education shouldn't break the bank. Invest in your future with any of our premium courses, all at an accessible flat fee of Rs. 14,999, ensuring top-tier learning is within your reach.
The Ultimate Learning Environment: "Experience learning like never before in our modern, 3-floor facility located in coimbatore. Every classroom is fully air-conditioned, equipped with high-definition projectors, and designed for collaborative, immersive learning. We provide the perfect atmosphere for focused skill development and innovation


Expert-Led & Practical: "Learn from industry veterans who bring real-world insights and practical experience to every session. Our curriculum is hands-on, project-based, and aligned with current industry demands, ensuring you build a robust portfolio.
Career-Focused Approach: "Beyond skills, we focus on your career. Our programs are geared towards empowering you for immediate employment, career advancement, or successful freelancing.

        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <FloatingCard 
          icon={Globe}
          title="Full Stack Development"
          description="Build web applications end-to-end. Master front-end & back-end technologies. Full Stack Developer Course."
          delay={0}
          image="./whyus/image1.jfif"
        />
        <FloatingCard 
          icon={Figma}
          title="UI/UX Design"
          description="Craft intuitive & beautiful user experiences. Design impactful digital products. UI UX Training."
          delay={200}
          image="./whyus/image2.jfif"
        />
        <FloatingCard 
          icon={ChartLine}
          title="Data Analytics"
          description="Uncover insights from data. Drive smart business decisions. Data Analytics Certification India."
          delay={400}
          image="./whyus/image3.jfif"
        />
        <FloatingCard 
          icon={TvMinimalPlay}
          title="Digital Marketing"
          description="Dominate the online landscape. Grow brands with cutting-edge strategies. Digital Marketing Course."
          delay={600}
          image="./whyus/image4.jfif"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl shadow-2xl p-12">
        <StatCard number="15K+" label="Students" icon={Users} />
        <StatCard number="50+" label="Courses" icon={BookOpen} />
        <StatCard number="100%" label="Pratical Experience and Live Products" icon={Award} />
        <StatCard number="24/7" label="Support" icon={Zap} />
      </div>
    </div>
  </div>
);

export default FeaturesSection;