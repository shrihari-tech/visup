// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   // Mock validation -- replace with API call for production!
//   const validateCredentials = async (email, password) => {
//     const mockUser = { email: 'user@example.com', password: 'password123' };
//     return email === mockUser.email && password === mockUser.password;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     const valid = await validateCredentials(email, password);
//     if (valid) {
//       navigate('/dashboard');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form 
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             className="w-full border px-3 py-2 rounded"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-1 font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full border px-3 py-2 rounded"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [domain, setDomain] = useState("");

  // Google Sheet published as CSV link
  // const SHEET_URL =
  //   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiNWkKLdGsaEC_6HKgTg9tPdVSk0c5O6dxO8Ucrk8kvGvtV_FfdSqE2VGkmVWt_89J6S_h1kCyJaMM/pub?output=csv";
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgKzWhJerWCTqRNNZp70pCT0OUMpmOVxiPcOADqaQdLnPZ38yC6R0iU5X1NNX2JngMXTgQF4bS321a/pub?output=csv";

//   const validateCredentials = async (email, password) => {
//   try {
//     const response = await fetch(SHEET_URL);
//     const text = await response.text();

//     // Convert CSV to array
//     const rows = text.split("\n").map((r) => r.split(","));

//     // Clean headers (trim + remove quotes)
//     const headers = rows[0].map((h) => h.replace(/['"]+/g, "").trim());

//     // Convert rows to objects
//     const data = rows.slice(1).map((row) =>
//       Object.fromEntries(
//         row.map((cell, i) => [headers[i], cell.replace(/['"]+/g, "").trim()])
//       )
//     );

//     // Debug check (see what data looks like)
//     console.log("Parsed data:", data);

//     // Find user by email (case-insensitive)
//     const user = data.find(
//       (u) => u.Email?.toLowerCase() === email.toLowerCase()
//     );


//     if (user && user.Password === password.trim()) {
//       localStorage.setItem("student", JSON.stringify(user));
//         const domainKey = Object.keys(user).find(
//           (k) => k.toLowerCase().trim() === "domain"
//         );
//           if (domainKey) {
//     localStorage.setItem("domain", user[domainKey]);
//   }
//       return true;
//     }


//     return false;
//   } catch (err) {
//     console.error("Error fetching sheet:", err);
//     return false;
//   }
// };
const validateCredentials = async (email, password) => {
  try {
    const response = await fetch(SHEET_URL);
    const text = await response.text();

    // Convert CSV to array
    const rows = text.split("\n").map((r) => r.split(","));

    // Clean headers (trim + remove quotes)
    const headers = rows[0].map((h) => h.replace(/['"]+/g, "").trim());

    // Convert rows to objects
    const data = rows.slice(1).map((row) =>
      Object.fromEntries(
        row.map((cell, i) => [headers[i], cell.replace(/['"]+/g, "").trim()])
      )
    );

    // Find user by email (case-insensitive)
    const user = data.find(
      (u) => u.Email?.toLowerCase() === email.toLowerCase()
    );

    console.log("Matched user:", user);

    if (user && user.Password === password.trim()) {
      // Save the whole user object
      localStorage.setItem("student", JSON.stringify(user));

      // Dynamically detect the domain key (in case of extra spaces)
      const domainKey = Object.keys(user).find(
        (k) => k.toLowerCase().trim() === "domain"
      );

      if (domainKey) {
        localStorage.setItem("domain", user[domainKey]);
        console.log("Saved domain:", user[domainKey]);
      } else {
        console.warn("Domain key not found in user object!");
      }

      return true;
    }

    return false;
  } catch (err) {
    console.error("Error fetching sheet:", err);
    return false;
  }
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const valid = await validateCredentials(email, password);
    if (valid) {
      navigate("/dashboard");
      console.log(valid);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;