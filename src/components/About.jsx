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
      <div className="abouts-buttons">
  <button>
    <span>3+</span>
    <p>Coding</p>
  </button>
  <button>
    <span>5+</span>
    <p>Projects</p>
  </button>
  <button>
    <span>2+</span>
    <p>Certifications</p>
  </button>
  <button>
    <span>10+</span>
    <p>Tech Stacks</p>
  </button>
</div>

{/* <Link to="/about" className="more-btn">More About Me</Link> */}
    </section>
  );
};

export default About;


















// import React from 'react';
// import '../styles/about.css';
// import project2img from '../assets/aboutimg.png'; // your uploaded image

// const About = () => {
//   return (
//     <div className="about-section">
//       <h2>About Me</h2>
//       <p className="about-description">
//         I am a passionate developer with a strong background in building innovative, user-centric solutions that make a positive impact.
//       </p>

//       <div className="about-cards">
//         <div className="about-card">
//           <img src={project2img} alt="Coding" className="about-icon" />
//           <h3>3+</h3>
//           <p>Years Coding</p>
//         </div>
//         <div className="about-card">
//           <img src={project2img} alt="Projects" className="about-icon" />
//           <h3>2+</h3>
//           <p>Projects</p>
//         </div>
//         <div className="about-card">
//           <img src={project2img} alt="Certifications" className="about-icon" />
//           <h3>3+</h3>
//           <p>Certifications</p>
//         </div>
//         <div className="about-card">
//           <img src={project2img} alt="Tech Stack" className="about-icon" />
//           <h3>2+</h3>
//           <p>Tech Stack</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
