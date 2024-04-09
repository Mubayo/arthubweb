import React, { useState } from 'react';
import images1 from '../assets/images/contact.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send a request to the server)
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Subject:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
        </div>
        <div className="about-image">
          {/* <img src={aboutImage} alt="About Us" /> */}
          <img src={images1} alt="About Us" />
        </div>
      </div>
    </div>
    
  );
};

export default ContactForm;
