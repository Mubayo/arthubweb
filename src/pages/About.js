import React from 'react';
// import aboutImage from '../assets/images/about-image.jpg';
import '../assets/css/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed et mattis odio. Suspendisse potenti. Proin at elit vel
            justo ultrices fermentum vel sed nunc.
          </p>
          <p>
            Vestibulum vehicula justo eget urna lacinia, vel commodo sapien
            interdum. Integer tincidunt fringilla quam, in tempus odio
            fermentum eu.
          </p>
        </div>
        <div className="about-image">
          {/* <img src={aboutImage} alt="About Us" /> */}
          <img src="https://source.unsplash.com/1200x400/?history" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
