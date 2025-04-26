
// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="about-page">
//       <h2>Full Bio</h2>
//       <p>
//         I’m Mohan Kumar, a passionate and dedicated developer skilled in full-stack development.
//         I love building robust and scalable web applications and continuously improving my skillset.
//       </p>
//       <h3>Core Skills</h3>
//       <ul>
//         <li>React, Node.js, Express</li>
//         <li>MongoDB, MySQL</li>
//         <li>HTML, CSS, JavaScript</li>
//         <li>RESTful APIs, Git, GitHub</li>
//       </ul>
//     </div>
//   );
// };

// export default AboutUs;
















// import React from 'react';
// import '../styles/aboutus.css';
// import profilePic from '../assets/myimg.jpg'; // Replace with your actual image path

// const AboutUs = () => {
//   return (
//     <section className="abouts-section">
//       <div className="abouts-container">
//         <div className="abouts-image">
//           <img src={profilePic} alt="Profile" />
//         </div>
//         <div className="abouts-content">
//           <h2>About Me</h2>
//           <div className="underlines"></div>
//           <p>
//             I'm a passionate and highly curious software developer with strong problem-solving skills
//             and a relentless drive for learning. My journey in tech started early, and over time, I've
//             honed my skills in <strong>React.js, Node.js, C++, and Python</strong>.
//           </p>
//           <p>
//             I take pride in building smart, scalable solutions and thrive in fast-paced environments. I'm known
//             for my attention to detail, creativity in design, and eagerness to take on challenges that push
//             my limits.
//           </p>
//           <p>
//             Whether it's front-end UI magic or back-end logic, I enjoy crafting products that make a real
//             difference. My curiosity extends beyond coding — I continuously explore AI, design trends, and
//             emerging technologies.
//           </p>
//           <p>
//             Looking forward to contributing to a team where innovation, collaboration, and growth are
//             celebrated. Let's build something amazing!
//           </p>
//           <p>
//             I was born in [Markapur], and I’m currently pursuing my B.Tech at Lovely Professional University (LPU).
//             I take pride in building smart, scalable solutions and thrive in fast-paced environments. I'm known
//             for my attention to detail, creativity in design, and eagerness to take on challenges that push
//             my limits.
//           </p>
//           <div className="about-buttons">
//   <button>
//     <span>3+</span>
//     <p>Coding</p>
//   </button>
//   <button>
//     <span>5+</span>
//     <p>Projects</p>
//   </button>
//   <button>
//     <span>2+</span>
//     <p>Certifications</p>
//   </button>
//   <button>
//     <span>10+</span>
//     <p>Tech Stacks</p>
//   </button>
// </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;













import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/aboutus.css';
import profilePic from '../assets/myimg.jpg'; // Replace with your actual image path

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = (path) => {
    navigate(path); // Redirect to the provided path
  };

  return (
    <section className="abouts-section">
      <div className="abouts-container">
        <div className="abouts-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="abouts-content">
          <h2>About Me</h2>
          <div className="underlines"></div>
          <p>
            I'm a passionate and highly curious software developer with strong problem-solving skills
            and a relentless drive for learning. My journey in tech started early, and over time, I've
            honed my skills in <strong>React.js, Node.js, C++, and Python</strong>.
          </p>
          <p>
            I take pride in building smart, scalable solutions and thrive in fast-paced environments. I'm known
            for my attention to detail, creativity in design, and eagerness to take on challenges that push
            my limits.
          </p>
          <p>
            Whether it's front-end UI magic or back-end logic, I enjoy crafting products that make a real
            difference. My curiosity extends beyond coding — I continuously explore AI, design trends, and
            emerging technologies.
          </p>
          <p>
            Looking forward to contributing to a team where innovation, collaboration, and growth are
            celebrated. Let's build something amazing!
          </p>
          <p>
            I was born in [Markapur], and I’m currently pursuing my B.Tech at Lovely Professional University (LPU).
            I take pride in building smart, scalable solutions and thrive in fast-paced environments. I'm known
            for my attention to detail, creativity in design, and eagerness to take on challenges that push
            my limits.
          </p>
          <div className="about-buttons">
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

          {/* Button to redirect to Projects */}
          <div className="about-button">
            <button onClick={() => handleRedirect('/projects')} className="heros-button">
              See My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
