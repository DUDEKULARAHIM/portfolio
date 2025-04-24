
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
















import React from 'react';
import '../styles/aboutus.css';
import profilePic from '../assets/myimg.jpg'; // Replace with your actual image path

const AboutUs = () => {
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
