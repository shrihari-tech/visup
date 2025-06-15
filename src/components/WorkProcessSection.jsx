import React from "react";

const steps = [
  {
    id: "01",
    title: "Learn by Doing & Analysis",
    description:
      "Hands-on training with real-time coding exercises, tools, and live projects to build practical skills from day one.",
    points: ["Real-Time Practice", "Project-Based Learning", "Tool Mastery"],
  },
  {
    id: "02",
    title: "Concept & Code",
    description:
      "Master core concepts in Frontend and Backend development, then immediately apply them in structured mini-projects.",
    points: ["Step-by-Step Learning", "Immediate Application", "Integrated Curriculum"],
  },
  {
    id: "03",
    title: "Job-Oriented & Preparation",
    description:
      "Resume building, mock interviews, aptitude training, and guidance tailored to make you placement-ready.",
    points: [
      "Resume & LinkedIn Workshops",
      "Mock Interviews & Feedback",
      "Aptitude & Soft Skills Documents",
    ],
  },
];

const WorkProcessSection = () => {
  return (
    <section className="py-32 bg-white" id="process">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-20 text-center">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Work Process</span>
        </h2>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="md:flex md:items-start md:space-x-10"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {step.id}
                </div>
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {step.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
