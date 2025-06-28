import React from "react";
import { BookOpen, Users, Award, Zap, Target, Globe } from "lucide-react";
import FloatingCard from "./FloatingCard";
import StatCard from "./StatCard";
import LandingPage from "./LandingPage";
const FeaturesSection = () => (
  <div className="py-32 bg-gradient-to-b from-gray-50 to-white" id="whyus">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">EduVerse</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Vinsup Skill Academy, we bridge the gap between learning and employment. Our industry-focused curriculum, hands-on training, and expert guidance make us the ideal choice for students ready to step into the tech world. With 100 hours of focused learning, placement support, and a strong community, we’re committed to helping you succeed.
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
);

export default FeaturesSection;