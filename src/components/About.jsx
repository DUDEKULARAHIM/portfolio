import React from 'react';
import { Link } from 'react-router-dom'; // <-- import Link
import '../styles/about.css';
import myPhoto from '../assets/myimg.jpg';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="underline"></div>
      <div className="about-content">
        <img src={myPhoto} alt="Mohan" />
        <div>
          <p>Hello! I’m Rahim, a passionate developer who thrives on creativity and logic. I love solving real-world problems with code.</p>
          <p>Enthusiastic, fast learner, and a believer in “Code. Learn. Repeat.”</p>

          {/* Button to navigate to About Us route */}
          <Link to="/about" className="more-btn">More About Me</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
