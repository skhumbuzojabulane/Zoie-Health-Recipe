import React from 'react';

import '../styles/login.css'

function Login() {
  return (
    <div className='mainContainer'>
      <div className="form">
        <label className='text'>LOG IN</label>
        <form className='formContainer'>
          <div className="input-container">
            <input type="text" name="uname" required placeholder='username'/>
          </div>
          <div className="input-container">
            <input type="password" name="pass" required placeholder='password'/>
          </div>
          <div className="button-container">
            <button className="button-85" role="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
