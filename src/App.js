// import React, { useState } from "react";

// const Login = () => {
//   const [password, setPassword] = useState("");
//   const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

//   const correctPassword = "1234"; // Replace with a secure password

//   const handleHoverStart = () => {
//     if (password !== correctPassword) {
//       // Move the button randomly
//       const intervalId = setInterval(() => {
//         setButtonPosition((prevPosition) => ({
//           top: prevPosition.top + getRandomOffset(),
//           left: prevPosition.left + getRandomOffset(),
//         }));
//       }, 50);

//       // Stop moving after 1000 milliseconds (adjust as needed)
//       setTimeout(() => {
//         clearInterval(intervalId);
//       }, 1000);
//     }
//   };

//   const handleHoverEnd = () => {
//     // Reset the button position on hover end
//     setButtonPosition({ top: 0, left: 0 });
//   };

//   const getRandomOffset = () => {
//     // Generate a random offset between -5 and 5 (adjust as needed)
//     return Math.floor(Math.random() * 50) - 5;
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <div className="login-container m-10 text-center">
//       <h1 className="text-[30px] text-center">Login</h1>
//       <h2>
//         Use <span className="text-red-500">"1234"</span> as the testing password
//       </h2>
//       <form>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//           className="border-2 my-2 pl-2 mx-2 rounded-md"
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <div className="">
//           <button
//           className="bg-blue-600 px-4 text-[#ffffff] py-2 rounded-md"
//             type="button"
//             onMouseEnter={handleHoverStart}
//             onMouseLeave={handleHoverEnd}
//             style={{
//               position: "relative",
//               top: `${buttonPosition.top}px`,
//               left: `${buttonPosition.left}px`,
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [buttonArea] = useState({ minX: -500, maxX: 500, minY: 0, maxY: 500 }); // Adjust as needed

  const correctPassword = '1234'; // Replace with a secure password

  const handleHoverStart = () => {
    if (password !== correctPassword) {
      // Move the button randomly within the specified area
      const intervalId = setInterval(() => {
        setButtonPosition((prevPosition) => ({
          top: clamp(
            prevPosition.top + getRandomOffset(),
            buttonArea.minY,
            buttonArea.maxY
          ),
          left: clamp(
            prevPosition.left + getRandomOffset(),
            buttonArea.minX,
            buttonArea.maxX
          ),
        }));
      }, 50);

      // Stop moving after 1000 milliseconds (adjust as needed)
      setTimeout(() => {
        clearInterval(intervalId);
      }, 1000);
    }
  };

  const handleHoverEnd = () => {
    // Reset the button position on hover end
    setButtonPosition({ top: 0, left: 0 });
  };

  const getRandomOffset = () => {
    // Generate a random offset between -5 and 5 (adjust as needed)
    return Math.floor(Math.random() * 15) - 5;
  };

  const clamp = (value, min, max) => {
    // Ensure the value is within the specified range
    return Math.min(Math.max(value, min), max);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container m-10 text-center">
      <h1 className="text-[30px] text-center">Login</h1>
      <h2>
        Use <span className="text-red-500">"1234"</span> as the testing password
      </h2>
      <form>
        <label htmlFor="password">Password:</label>
        <input
        className="border-2 my-2 pl-2 mx-2 rounded-md"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div
          className="button-container"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <button
          className="bg-blue-600 px-4 text-[#ffffff] py-2 rounded-md"
            type="button"
            style={{
              position: 'relative',
              top: `${buttonPosition.top}px`,
              left: `${buttonPosition.left}px`,
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
