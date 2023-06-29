import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/login.css';

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    const username = event.target.uname.value;
    const password = event.target.pass.value;

    // Check if the entered username and password match the hardcoded values
    if (username === 'example@gmail.com' && password === 'Test@#1216') {
      setLoggedIn(true); // Set login status to true
      navigate('/dashboard'); // Navigate to the Dashboard route
    } else {
      alert('Invalid username or password'); // Show error message for invalid credentials
    }
  };

  if (loggedIn) {
    return null; // Render nothing or a loading indicator while redirecting
  }

  return (
    <div className='mainContainer'>
      <div className="form">
        <label className='text'>LOG IN</label>
        <form className='formContainer' onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" name="uname" required placeholder='username' />
          </div>
          <div className="input-container">
            <input type="password" name="pass" required placeholder='password' />
          </div>
          <div className="button-container">
            <button className="button-85" role="button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
