// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const phoneNumber = "+918870060607"
// const message = encodeURIComponent("Hello! I have a question about your courses.");
// const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

// const styles = {
//   position: "fixed",
//   bottom: "32px",
//   right: "32px",
//   zIndex: 1000,
//   background: "#25D366",
//   borderRadius: "50%",
//   width: "56px",
//   height: "56px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
//   cursor: "pointer",
// };

// export default function WhatsAppChat() {
//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={styles}
//       title="Chat with us on WhatsApp"
//     >
//       <FaWhatsapp color="#fff" size={32} />
//     </a>
//   );
// }

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const phoneNumber = "+918870060607 "; // fallback if env missing
const message = encodeURIComponent("Hello! I have a question about your courses.");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
const callUrl = `tel:${phoneNumber}`;

const baseStyle = {
  position: "fixed",
  right: "32px",
  zIndex: 1000,
  borderRadius: "50%",
  width: "56px",
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
  cursor: "pointer",
};

export default function WhatsAppChat() {
  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...baseStyle,
          bottom: "100px", // WhatsApp button higher
          background: "#25D366",
        }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp color="#fff" size={32} />
      </a>
      <a
        href={callUrl}
        style={{
          ...baseStyle,
          bottom: "32px", // Call button below WhatsApp
          background: "#34b7f1",
        }}
        title="Call us"
      >
        <FaPhoneAlt color="#fff" size={28} />
      </a>
    </>
  );
}