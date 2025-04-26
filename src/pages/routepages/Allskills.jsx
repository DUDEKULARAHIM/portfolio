// import React from 'react';
// import '../../styles/AllSkills.css'; // Make sure path is correct

// const programmingSkills = [
//     { name: 'C++', icon: 'fas fa-c', level: 85 },
//   { name: 'Python', icon: 'fab fa-python', level: 90 },
//   { name: 'C++', icon: 'fas fa-code', level: 85 },
//   { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
//   { name: 'Java', icon: 'fab fa-java', level: 70 },
//   { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
//   { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
// ];

// const webDevelopment = [
//   { name: 'React', icon: 'fab fa-react', level: 85 },
//   { name: 'Node.js', icon: 'fab fa-node', level: 80 },
//   { name: 'HTML', icon: 'fab fa-html5', level: 95 },
//   { name: 'CSS', icon: 'fab fa-css3-alt', level: 90 },
//   { name: 'JavaScript', icon: 'fab fa-js-square', level: 88 },
// ];

// const toolsTechnologies = [
//   { name: 'Git', icon: 'fab fa-git-alt', level: 85 },
//   { name: 'GitHub', icon: 'fab fa-github', level: 90 },
//   { name: 'Figma', icon: 'fab fa-figma', level: 70 },
//   { name: 'Postman', icon: 'fas fa-envelope-open-text', level: 80 },
// ];

// const database = [
//   { name: 'MongoDB', icon: 'fas fa-database', level: 75 },
//   { name: 'MySQL', icon: 'fas fa-database', level: 80 },
// ];

// const nonTechnicalSkills = [
//   { name: 'Problem Solving', icon: 'fas fa-tools' },
//   { name: 'Time Management', icon: 'fas fa-clock' },
//   { name: 'Teamwork', icon: 'fas fa-users' },
//   { name: 'Adaptability', icon: 'fas fa-random' },
//   { name: 'Creativity', icon: 'fas fa-lightbulb' },
//   { name: 'Communication', icon: 'fas fa-comments' },
//   { name: 'Leadership', icon: 'fas fa-user-tie' },
// ];

// const Allskills = () => {
//   return (
//     <div className="skills-container">
//       <h2 className="sections-title">Technical Skills</h2>

//       <div className="skills-section">
//         <h3>Programming Skills</h3>
//         <div className="skills-grid">
//           {programmingSkills.map((skill, index) => (
//             <div key={index} className="skill-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//               <div className="circle">
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h3>Web Development</h3>
//         <div className="skills-grid">
//           {webDevelopment.map((skill, index) => (
//             <div key={index} className="skill-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//               <div className="circle">
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h3>Tools & Technologies</h3>
//         <div className="skills-grid">
//           {toolsTechnologies.map((skill, index) => (
//             <div key={index} className="skill-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//               <div className="circle">
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h3>Database</h3>
//         <div className="skills-grid">
//           {database.map((skill, index) => (
//             <div key={index} className="skill-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//               <div className="circle">
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Non-Technical Skills */}
//       <h2 className="sections-title">Non-Technical Skills</h2>
//       <div className="skills-grid">
//         {nonTechnicalSkills.map((skill, index) => (
//           <div key={index} className="skill-card">
//             <div className="icon"><i className={skill.icon}></i></div>
//             <h4>{skill.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Allskills;









// import React from 'react';
// import '../../styles/AllSkills.css'; // Ensure path is correct

// const programmingSkills = [
//   { name: 'Python', icon: 'fab fa-python', level: 90 },
//   { name: 'C++', icon: 'fas fa-code', level: 85 },
//   { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
//   { name: 'Java', icon: 'fab fa-java', level: 70 },
//   { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
//   { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
// ];

// const webDevelopment = [
//   { name: 'React', icon: 'fab fa-react' },
//   { name: 'Node.js', icon: 'fab fa-node' },
//   { name: 'HTML', icon: 'fab fa-html5' },
//   { name: 'CSS', icon: 'fab fa-css3-alt' },
//   { name: 'JavaScript', icon: 'fab fa-js-square' },
// ];

// const toolsTechnologies = [
//   { name: 'Git', icon: 'fab fa-git-alt' },
//   { name: 'GitHub', icon: 'fab fa-github' },
//   { name: 'Figma', icon: 'fab fa-figma' },
//   { name: 'Postman', icon: 'fas fa-envelope-open-text' },
// ];

// const database = [
//   { name: 'MongoDB', icon: 'fas fa-database' },
//   { name: 'MySQL', icon: 'fas fa-database' },
// ];

// const nonTechnicalSkills = [
//   { name: 'Problem Solving', icon: 'fas fa-tools' },
//   { name: 'Time Management', icon: 'fas fa-clock' },
//   { name: 'Teamwork', icon: 'fas fa-users' },
//   { name: 'Adaptability', icon: 'fas fa-random' },
//   { name: 'Creativity', icon: 'fas fa-lightbulb' },
//   { name: 'Communication', icon: 'fas fa-comments' },
//   { name: 'Leadership', icon: 'fas fa-user-tie' },
// ];

// const Allskills = () => {
//   return (
//     <div className="skills-container">
//       <h2 className="sections-title">Technical Skills</h2>

//       <div className="skills-section">
//         <h3>Programming Skills</h3>
//         <div className="skills-grid">
//           {programmingSkills.map((skill, index) => (
//             <div key={index} className="skill-card programming-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//               <div className="circle">
//                 <span>{skill.level}%</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h3>Web Development</h3>
//         <div className="skills-grid">
//           {webDevelopment.map((skill, index) => (
//             <div key={index} className="skill-card web-dev-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//             </div>
//           ))}
//         </div>

//         <h3>Tools & Technologies</h3>
//         <div className="skills-grid">
//           {toolsTechnologies.map((skill, index) => (
//             <div key={index} className="skill-card tools-tech-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//             </div>
//           ))}
//         </div>

//         <h3>Database</h3>
//         <div className="skills-grid">
//           {database.map((skill, index) => (
//             <div key={index} className="skill-card database-card">
//               <div className="icon"><i className={skill.icon}></i></div>
//               <h4>{skill.name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Non-Technical Skills */}
//       <h2 className="sections-title">Non-Technical Skills</h2>
//       <div className="skills-grid">
//         {nonTechnicalSkills.map((skill, index) => (
//           <div key={index} className="skill-card non-tech-card">
//             <div className="icon"><i className={skill.icon}></i></div>
//             <h4>{skill.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Allskills;
















import React from 'react';
import '../../styles/AllSkills.css'; // Make sure path is correct

const programmingSkills = [
  { name: 'C++', icon: 'fas fa-c', level: 85 },
  { name: 'Python', icon: 'fab fa-python', level: 90 },
  { name: 'C++', icon: 'fas fa-code', level: 85 },
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
  { name: 'Java', icon: 'fab fa-java', level: 70 },
  { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
];

const webDevelopment = [
  { name: 'React', icon: 'fab fa-react', level: 85 },
  { name: 'Node.js', icon: 'fab fa-node', level: 80 },
  { name: 'HTML', icon: 'fab fa-html5', level: 95 },
  { name: 'CSS', icon: 'fab fa-css3-alt', level: 90 },
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 88 },
];

const toolsTechnologies = [
  { name: 'Git', icon: 'fab fa-git-alt', level: 85 },
  { name: 'GitHub', icon: 'fab fa-github', level: 90 },
  { name: 'Figma', icon: 'fab fa-figma', level: 70 },
  { name: 'Postman', icon: 'fas fa-envelope-open-text', level: 80 },
];

const database = [
  { name: 'MongoDB', icon: 'fas fa-database', level: 75 },
  { name: 'MySQL', icon: 'fas fa-database', level: 80 },
];

const nonTechnicalSkills = [
  { name: 'Problem Solving', icon: 'fas fa-tools' },
  { name: 'Time Management', icon: 'fas fa-clock' },
  { name: 'Teamwork', icon: 'fas fa-users' },
  { name: 'Adaptability', icon: 'fas fa-random' },
  { name: 'Creativity', icon: 'fas fa-lightbulb' },
  { name: 'Communication', icon: 'fas fa-comments' },
  { name: 'Leadership', icon: 'fas fa-user-tie' },
];

const Allskills = () => {
  return (
    <div className="skills-container">
      <h2 className="sections-title">Technical Skills</h2>
      {/* <div className="skills-underline"></div> */}

      <div className="skills-section">
        <h3>Programming Skills</h3>
        {/* <div className="skills-underline"></div> */}
        <div className="skills-grid">
          {programmingSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon"><i className={skill.icon}></i></div>
              <h4>{skill.name}</h4>
              <div className="circle">
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h3>Web Development</h3>
        {/* <div className="skills-underline"></div> */}
        <div className="skills-grid">
          {webDevelopment.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon"><i className={skill.icon}></i></div>
              <h4>{skill.name}</h4>
              <div className="circle">
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h3>Tools & Technologies</h3>
        {/* <div className="skills-underline"></div> */}
        <div className="skills-grid">
          {toolsTechnologies.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon"><i className={skill.icon}></i></div>
              <h4>{skill.name}</h4>
              <div className="circle">
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h3>Database</h3>
        {/* <div className="skills-underline"></div> */}
        <div className="skills-grid">
          {database.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon"><i className={skill.icon}></i></div>
              <h4>{skill.name}</h4>
              <div className="circle">
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Skills */}
      <h2 className="sections-title">Non-Technical Skills</h2>
      {/* <div className="skills-underline"></div> */}
      <div className="skills-grid">
        {nonTechnicalSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon"><i className={skill.icon}></i></div>
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allskills;
