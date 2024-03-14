// Login.js

import React from 'react';
import '../assets/css/auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-form">
          <h2>Login</h2>
          <form>
            {/* Your login form fields go here */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="auth-image">
          {/* <img src={loginImage} alt="Login" /> */}
          <img src="https://source.unsplash.com/1200x400/?house" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
