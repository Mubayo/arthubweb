// Register.js

import React from 'react';
import '../assets/css/auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-form">
          <h2>Register</h2>
          <form>
            {/* Your registration form fields go here */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="auth-image">
          {/* <img src={registerImage} alt="Register" /> */}
          <img src="https://source.unsplash.com/1200x400/?house" alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;