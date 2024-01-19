import React, { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const correctPassword = 'securePassword'; // Replace with a secure password

  const handleHoverStart = () => {
    if (password !== correctPassword) {
      // Move the button randomly
      const intervalId = setInterval(() => {
        setButtonPosition((prevPosition) => ({
          top: prevPosition.top + getRandomOffset(),
          left: prevPosition.left + getRandomOffset(),
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
    return Math.floor(Math.random() * 20) - 5;
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button
          type="button"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          style={{
            position: 'relative',
            top: `${buttonPosition.top}px`,
            left: `${buttonPosition.left}px`,
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
