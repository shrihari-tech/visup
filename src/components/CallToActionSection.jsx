import React, { useState } from "react";
import { Modal, Button } from "antd";

const CallToActionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProject = {
    title: "VINSUP Skill Academy",
    details: [
      { id: 1, title: "", image: "./gallery/img1.jpg" },
      { id: 2, title: "", image: "./gallery/img2.jpeg" },
      { id: 3, title: "", image: "./gallery/img3.JPG" },
      { id: 4, title: "", image: "./gallery/img4.JPG" },
      { id: 5, title: "", image: "./gallery/img5.JPG" },
      { id: 6, title: "", image: "./gallery/img6.JPG" },
      { id: 7, title: "", image: "./gallery/img7.JPG" },
      { id: 8, title: "", image: "./gallery/img8.PNG" },
      { id: 9, title: "", image: "./gallery/img9.JPG" },
      { id: 10, title: "", image: "./gallery/IMG_0022.JPG"},
    ]
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-32 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
          Ready to Transform Your Future?
        </h2>
        <p className="text-2xl text-white/80 mb-12 leading-relaxed">
          Join thousands of successful learners who have already taken the leap. Your journey to excellence starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer text-black px-12 py-6 rounded-full text-xl font-black hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-2xl"
            onClick={handleOpenModal}
          >
            Take a Look
          </button>
          <a className="border-2 border-white/30 cursor-pointer text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm" href="https://forms.gle/MMvpL26W5tp3ifd57" target="_blank" >
            Contact Us
          </a>
        </div>
      </div>

      {/* Modal for Project Details */}
      <Modal
        title={selectedProject?.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="close"
            type="primary"
            onClick={handleOk}
            style={{ backgroundImage: "linear-gradient(to right, #805ad5, #D81B60)", cursor: "pointer" }}

          >
            Close
          </Button>,
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedProject?.details.map((detail) => (
            <div key={detail.id} className="border rounded-lg overflow-hidden">
              <img
                src={detail.image}
                alt={detail.title}
                className="w-full h-48 object-cover"
              />
              {/* <div className="p-4">
                <h3 className="text-lg font-semibold">{detail.title}</h3>
              </div> */}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CallToActionSection;
