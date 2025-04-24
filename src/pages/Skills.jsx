
// import React, { useState } from 'react';
// import '../styles/skills.css';

// const Skills = () => {
//   const [activeSection, setActiveSection] = useState('technical');

//   const technicalSkills = [
//     { name: 'JavaScript', level: 90 },
//     { name: 'React.js', level: 85 },
//     { name: 'Node.js', level: 80 },
//     { name: 'C++', level: 88 },
//     { name: 'HTML/CSS', level: 95 },
//   ];

//   const nonTechnicalSkills = [
//     { name: 'Communication', level: 90 },
//     { name: 'Teamwork', level: 85 },
//     { name: 'Problem Solving', level: 88 },
//     { name: 'Adaptability', level: 80 },
//     { name: 'Time Management', level: 87 },
//   ];

//   const skillsToDisplay = activeSection === 'technical' ? technicalSkills : nonTechnicalSkills;

//   return (
//     <section className="skills-section">
//       <h2>My Skills</h2>
//       <div className="underline"></div>

//       <div className="skills-toggle">
//         <button
//           className={activeSection === 'technical' ? 'active' : ''}
//           onClick={() => setActiveSection('technical')}
//         >
//           Technical
//         </button>
//         <button
//           className={activeSection === 'nonTechnical' ? 'active' : ''}
//           onClick={() => setActiveSection('nonTechnical')}
//         >
//           Non-Technical
//         </button>
//       </div>

//       <div className="skills-container">
//         {skillsToDisplay.map((skill, index) => (
//           <div className="skill-bar" key={index}>
//             <div className="skill-label">{skill.name}</div>
//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: `${skill.level}%` }}
//               >
//                 <span className="progress-text">{skill.level}%</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;












// import React, { useState } from 'react';
// import '../styles/skills.css';

// const Skills = () => {
//   const [activeSection, setActiveSection] = useState('technical');

//   const technicalSkills = [
//     { name: 'JavaScript', level: 90 },
//     { name: 'React.js', level: 85 },
//     { name: 'Node.js', level: 80 },
//     { name: 'C++', level: 88 },
//     { name: 'HTML/CSS', level: 95 },
//   ];

//   const nonTechnicalSkills = [
//     { name: 'Communication', level: 90 },
//     { name: 'Teamwork', level: 85 },
//     { name: 'Problem Solving', level: 88 },
//     { name: 'Adaptability', level: 80 },
//     { name: 'Time Management', level: 87 },
//   ];

//   const skillsToDisplay = activeSection === 'technical' ? technicalSkills : nonTechnicalSkills;

//   return (
//     <section className="skills-section">
//       <h2>My Skills</h2>
//       <div className="underline"></div>

//       <div className="skills-toggle">
//         <button
//           className={activeSection === 'technical' ? 'active' : ''}
//           onClick={() => setActiveSection('technical')}
//         >
//           Technical
//         </button>
//         <button
//           className={activeSection === 'nonTechnical' ? 'active' : ''}
//           onClick={() => setActiveSection('nonTechnical')}
//         >
//           Non-Technical
//         </button>
//       </div>

//       {/* Buttons for each skill */}
//       <div className="skills-buttons">
//         {skillsToDisplay.map((skill, index) => (
//           <button key={index} className="skill-name-btn">
//             {skill.name}
//           </button>
//         ))}
//       </div>

//       {/* Skill levels as bars */}
//       <div className="skills-container">
//         {skillsToDisplay.map((skill, index) => (
//           <div className="skill-bar" key={index}>
//             <div className="skill-label">{skill.name}</div>
//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: `${skill.level}%` }}
//               >
//                 <span className="progress-text">{skill.level}%</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;










// import React from 'react';
// import '../styles/skills.css';

// const Skills = () => {
//   const technicalSkills = [
//     { name: 'HTML/CSS', icon: 'fab fa-html5' },
//     { name: 'JavaScript', icon: 'fab fa-js-square' },
//     { name: 'React.js', icon: 'fab fa-react' },
//     { name: 'Node.js', icon: 'fab fa-node' },
//     { name: 'C++', icon: 'fas fa-code' },
//   ];

//   const nonTechnicalSkills = [
//     'Communication',
//     'Teamwork',
//     'Problem Solving',
//     'Adaptability',
//     'Time Management',
//   ];

//   return (
//     <section className="skills-section">
//       <h2>My Skills</h2>
//       <div className="underline"></div>

//       <div className="skills-grid-wrapper">
//         {/* Technical Skills */}
//         <div className="skills-box">
//           <h3>Technical Skills</h3>
//           <div className="skills-grid">
//             {technicalSkills.map((skill, index) => (
//               <button key={index} className="skill-button">
//                 <i className={skill.icon}></i> {skill.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Non-Technical Skills */}
//         <div className="skills-box">
//           <h3>Non-Technical Skills</h3>
//           <div className="skills-grid">
//             {nonTechnicalSkills.map((skill, index) => (
//               <button key={index} className="skill-button">
//                 <i className="fas fa-check-circle"></i> {skill}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;











import React, { useState } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const [showTechnicalRange, setShowTechnicalRange] = useState(false);
  const [showNonTechnicalRange, setShowNonTechnicalRange] = useState(false);

  const technicalSkills = [
    { name: 'HTML', icon: 'fab fa-html5', level: 95 },
    { name: 'CSS', icon: 'fab fa-css3', level: 95 },
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 90 },
    { name: 'React.js', icon: 'fab fa-react', level: 85 },
    { name: 'Node.js', icon: 'fab fa-node', level: 80 },
    { name: 'C++', icon: 'fas fa-code', level: 88 },
    { name: 'php', icon: 'fab fa-php', level: 95 },
  ];

  const nonTechnicalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Teamplayer', level: 85 },
    { name: 'Problem Solving', level: 88 },
    { name: 'Adaptability', level: 80 },
    { name: 'Time Management', level: 87 },
    { name: 'Active Listner', level: 87 },
    { name: 'Time Management', level: 87 },
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-underline"></div>

      <div className="skills-grid-wrapper">
        {/* Technical Skills */}
        <div className="skills-box">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <button key={index} className="skill-button">
                <i className={skill.icon}></i> {skill.name}
              </button>
            ))}
          </div>
          <button 
            className="show-more-button" 
            onClick={() => setShowTechnicalRange(!showTechnicalRange)}
          >
            {showTechnicalRange ? 'Show Less' : 'See All Skills'}
          </button>
          {showTechnicalRange && (
            <div className="skills-range">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-range">
                  <div className="skill-name">{skill.name}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Non-Technical Skills */}
        <div className="skills-box">
          <h3>Non-Technical Skills</h3>
          <div className="skills-grid">
            {nonTechnicalSkills.map((skill, index) => (
              <button key={index} className="skill-button">
                <i className="fas fa-check-circle"></i> {skill.name}
              </button>
            ))}
          </div>
          <button 
            className="show-more-button" 
            onClick={() => setShowNonTechnicalRange(!showNonTechnicalRange)}
          >
            {showNonTechnicalRange ? 'Show Less' : 'See All Skills'}
          </button>
          {showNonTechnicalRange && (
            <div className="skills-range">
              {nonTechnicalSkills.map((skill, index) => (
                <div key={index} className="skill-range">
                  <div className="skill-name">{skill.name}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;












// import React, { useState } from 'react';
// import '../styles/skills.css';

// const Skills = () => {
//   const [showTechnicalRange, setShowTechnicalRange] = useState(false);
//   const [showNonTechnicalRange, setShowNonTechnicalRange] = useState(false);

//   // All Technical Skills (Languages, Frameworks, Tools & Platforms)
//   const technicalSkills = [
//     // Languages
//     { name: 'C++', icon: 'fas fa-code', level: 88 },
//     { name: 'Java', icon: 'fab fa-java', level: 85 },
//     { name: 'C', icon: 'fas fa-code', level: 80 },
//     { name: 'Python', icon: 'fab fa-python', level: 90 },

//     // Frameworks
//     { name: 'React.js', icon: 'fab fa-react', level: 85 },
//     { name: 'Node.js', icon: 'fab fa-node', level: 80 },

//     // Tools & Platforms
//     { name: 'GitHub', icon: 'fab fa-github', level: 95 },
//     { name: 'Git', icon: 'fab fa-git', level: 90 },
//     { name: 'MySQL', icon: 'fas fa-database', level: 85 },
//     { name: 'MongoDB', icon: 'fas fa-database', level: 90 },
//     { name: 'Docker', icon: 'fab fa-docker', level: 75 },
//   ];

//   // Non-Technical Skills
//   const nonTechnicalSkills = [
//     { name: 'Communication', icon: 'fas fa-comments', level: 90 },
//     { name: 'Teamplayer', icon: 'fas fa-users', level: 85 },
//     { name: 'Problem Solving', icon: 'fas fa-lightbulb', level: 88 },
//     { name: 'Adaptability', icon: 'fas fa-sync', level: 80 },
//     { name: 'Time Management', icon: 'fas fa-clock', level: 87 },
//     { name: 'Active Listener', icon: 'fas fa-headphones', level: 87 },
//   ];

//   return (
//     <section className="skills-section">
//       <h2>My Skills</h2>
//       <div className="skills-underline"></div>

//       <div className="skills-box">
//         <h3>Technical Skills</h3>
//         <div className="skills-grid">
//           {technicalSkills.map((skill, index) => (
//             <button key={index} className="skill-button">
//               <i className={skill.icon}></i> {skill.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Non-Technical Skills */}
//       <div className="skills-box">
//         <h3>Non-Technical Skills</h3>
//         <div className="skills-grid">
//           {nonTechnicalSkills.map((skill, index) => (
//             <button key={index} className="skill-button">
//               <i className={skill.icon}></i> {skill.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
