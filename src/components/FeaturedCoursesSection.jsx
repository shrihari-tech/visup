import React from "react";
import { Carousel } from "antd";

// Course data
const courses = [
  {
    title: "Graphic Designer / UI/UX Designer",
    desc: "Creative and detail-oriented designer skilled in crafting visually appealing graphics and intuitive user interfaces.",
    image: "/nocode.png"
  },
  {
    title: "Digital Marketing Specialist",
    desc: "Strategic and data-driven digital marketer with expertise in SEO, social media, and paid campaigns.",
    image: "/nocode.png"
  },
  {
    title: "Software Testing",
    desc: "Ensure software reliability by identifying bugs and verifying functionality using manual and automated testing tools like Selenium or Postman.",
    image: "/lowcode.png"
  },
  {
    title: "Data Analyst",
    desc: "Transform raw data into actionable insights through tools like Excel, Power BI, and SQL with minimal programming effort",
    image:"/lowcode.png"
  },
  {
    title: "Front End Development",
    desc: "Build visually engaging web interfaces using HTML, CSS, and low-code frameworks like Webflow or Bootstrap Studio.",
    image: "/lowcode.png"
  },
  {
    title: "DevOps",
    desc: "Streamline development and deployment processes with automation tools like GitHub Actions, Docker, and CI/CD platforms—minimal scripting required.",
    image: "/lowcode.png"
  },
  {
    title: "MERN Full Stack Development",
    desc: "Build scalable and dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
    image: "/code.png"
  },
  {
    title: "Java Full Stack Development",
    desc: "Master backend development with Java (Spring Boot) and frontend integration using Angular or React.",
    image: "/code.png"
  },
  {
    title: "PHP & Laravel Full Stack Development",
    desc: "Develop robust web applications using PHP with the Laravel framework.",
    image: "/code.png"
  },
  {
    title: "Flutter & Firebase Full Stack Development",
    desc: "Design and develop cross-platform mobile applications with Flutter.",
    image: "/code.png"
  },
  {
    title: "Data Science",
    desc: "Dive into data analytics, machine learning, and AI using Python, Pandas, Scikit-learn, and visualization libraries.",
    image: "/code.png"
  },
  // {
  //   title: "C & C++",
  //   desc: "Master the foundational programming languages that form the backbone of software development.",
  //   image: "/crt.png"
  // },
  // {
  //   title: "MERN Full Stack Development",
  //   desc: "Master the foundational programming languages that form the backbone of software development.",
  //   image: "/crt.png"
  // },
  // {
  //   title: "Java",
  //   desc: "Understand core and advanced Java concepts, including OOPs, exception handling, multithreading, and collections.",
  //   image: "/crt.png"
  // },
  // {
  //   title: "Python",
  //   desc: "Learn Python from basics to advanced, focusing on clean syntax, data types, control flow, and functions.",
  //   image: "/crt.png"
  // },
  // {
  //   title: "Data Structures & Algorithms",
  //   desc: "Develop strong problem-solving skills by mastering arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.",
  //   image: "/crt.png"
  // },
  // {
  //   title: "Networking",
  //   desc: "Gain clarity on networking fundamentals like OSI model, TCP/IP, IP addressing, routing, and protocols.",
  //   image: "/crt.png"
  // },
  // {
  //   title: "Database (SQL, MySQL)",
  //   desc: "Focus on SQL syntax, normalization, joins, indexing, and practical use cases in MySQL to support backend and data-driven applications.",
  //   image: "/crt.png"
  // }
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
  <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center px-4 py-20" id="services">
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
        Jumpstart Your Career with Our Specialized{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
          Programs
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
                {/* <button className={buttonClass}>Road Map</button> */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default FeaturedCoursesSection;