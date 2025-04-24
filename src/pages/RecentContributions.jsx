
// import React from 'react';
// import '../styles/recentContributions.css';

// const RecentContributions = () => {
//   const projects = [
//     {
//       name: 'AI-Powered Smart Helmet',
//       date: 'April 2025',
//       description:
//         'Developed an AI-powered smart helmet for accident prevention and emergency response, integrating real-time data analysis and emergency alerts.',
//       techStack: ['AI', 'React.js', 'Node.js'],
//     },
//     {
//       name: 'React.js Portfolio Website',
//       date: 'March 2025',
//       description:
//         'Created a responsive, dynamic portfolio website showcasing personal projects, skills, and achievements, with smooth animations and a modern UI.',
//       techStack: ['React.js', 'CSS', 'JavaScript'],
//     },
//     {
//       name: 'Real-Time Chat Application',
//       date: 'February 2025',
//       description:
//         'Built a real-time local chat application using Node.js, Express, and Socket.IO, with features like message deletion and chat room creation.',
//       techStack: ['Node.js', 'Express', 'Socket.IO', 'MongoDB'],
//     },
//     {
//       name: 'QR & Barcode Generator',
//       date: 'January 2025',
//       description:
//         'Developed an online tool that allows users to generate QR codes and barcodes from provided links, enabling easy sharing and tracking.',
//       techStack: ['JavaScript', 'React.js', 'HTML/CSS'],
//     },
//   ];

//   return (
//     <section className="recent-contributions-section">
//       <h2>Recent Project Contributions</h2>
//       <div className="underline"></div>

//       <div className="contributions-container">
//         {projects.map((project, index) => (
//           <div className="contribution-card" key={index}>
//             <h3>{project.name}</h3>
//             <p className="project-date">{project.date}</p>
//             <p>{project.description}</p>
//             <div className="tech-stack">
//               <strong>Tech Stack:</strong><br/>
//               {project.techStack.map((tech, idx) => (
//                 <span key={idx} className="tech-tag">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RecentContributions;












// import React from 'react';
// import '../styles/recentContributions.css';

// const RecentContributions = () => {
//   const projects = [
//     {
//       name: 'AI-Powered Smart Helmet',
//       date: 'April 2025',
//       description:
//         'An intelligent helmet solution for accident prevention and emergency response using real-time sensor data and alerts.',
//       languages: ['Python', 'React.js', 'Node.js'],
//       github: 'https://github.com/your-username/smart-helmet',
//       demo: 'https://smart-helmet-demo.netlify.app',
//     },
//     {
//       name: 'React.js Portfolio Website',
//       date: 'March 2025',
//       description:
//         'Dynamic portfolio website with animations, responsive design, and a modular project showcase.',
//       languages: ['JavaScript', 'React.js', 'CSS'],
//       github: 'https://github.com/your-username/portfolio-site',
//       demo: 'https://yourportfolio.netlify.app',
//     },
//     {
//       name: 'Real-Time Chat App',
//       date: 'February 2025 - march 2025',
//       description:
//         'Chat application with instant messaging, message deletion, and chat room features using Socket.IO.',
//       languages: ['Node.js', 'Express', 'MongoDB'],
//       github: 'https://github.com/your-username/chat-app',
//       demo: 'https://chat-app-demo.netlify.app',
//     },
//     {
//       name: 'QR & Barcode Generator',
//       date: 'January 2025',
//       date2: "march 2025",
//       description:
//         'Tool to generate and download QR codes and barcodes from links with print support.',
//       languages: ['JavaScript', 'React.js', 'HTML/CSS'],
//       github: 'https://github.com/your-username/qr-barcode-gen',
//       demo: 'https://qrcode-gen.netlify.app',
//     },
//   ];

//   return (
//     <section className="recent-contributions-section">
//       <h2>Recent Project Contributions</h2>
//       <div className="underline"></div>

//       <div className="contributions-container">
//         {projects.map((project, index) => (
//           <div className="contribution-card" key={index}>
//             <h3>{project.name}</h3>
//             <button className="date-btn">{project.date}</button>
//             {/* <button className="date-btn">{project.date2}</button> */}
//             <p>{project.description}</p>

//             <div className="tech-stack">
//               <strong>Languages:</strong>
//               <div className="tech-tags">
//                 {project.languages.map((lang, idx) => (
//                   <span className="tech-tag" key={idx}>{lang}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="project-buttons">
//               <a href={project.github} className="project-btn" target="_blank" rel="noreferrer">
//                 <i className="fab fa-github"></i> GitHub
//               </a>
//               <a href={project.demo} className="project-btn" target="_blank" rel="noreferrer">
//                 <i className="fas fa-external-link-alt"></i> Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RecentContributions;












// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/recentContributions.css';

// const RecentContributions = () => {
//   const navigate = useNavigate();

//   const projects = [
//     {
//       name: 'AI-Powered Smart Helmet',
//       date: 'April 2025',
//       description:
//         'An intelligent helmet solution for accident prevention and emergency response using real-time sensor data and alerts.',
//       languages: ['Python', 'React.js', 'Node.js'],
//       github: 'https://github.com/your-username/smart-helmet',
//       demo: 'https://smart-helmet-demo.netlify.app',
//     },
//     {
//       name: 'React.js Portfolio Website',
//       date: 'March 2025',
//       description:
//         'Dynamic portfolio website with animations, responsive design, and a modular project showcase.',
//       languages: ['JavaScript', 'React.js', 'CSS'],
//       github: 'https://github.com/your-username/portfolio-site',
//       demo: 'https://yourportfolio.netlify.app',
//     },
//     {
//       name: 'Real-Time Chat App',
//       date: 'February 2025 - March 2025',
//       description:
//         'Chat application with instant messaging, message deletion, and chat room features using Socket.IO.',
//       languages: ['Node.js', 'Express', 'MongoDB'],
//       github: 'https://github.com/your-username/chat-app',
//       demo: 'https://chat-app-demo.netlify.app',
//     },
//     {
//       name: 'QR & Barcode Generator',
//       date: 'January 2025',
//       description:
//         'Tool to generate and download QR codes and barcodes from links with print support.',
//       languages: ['JavaScript', 'React.js', 'HTML/CSS'],
//       github: 'https://github.com/your-username/qr-barcode-gen',
//       demo: 'https://qrcode-gen.netlify.app',
//     },
//   ];

//   return (
//     <section className="recent-contributions-section">
//       <h2>Recent Project Contributions</h2>
//       <div className="rec-underline"></div>

//       <div className="contributions-container">
//         {projects.map((project, index) => (
//           <div className="contribution-card" key={index}>
//             <h3>{project.name}</h3>
//             <button className="date-btn">{project.date}</button>
//             <p>{project.description}</p>

//             <div className="tech-stack">
//               <strong>Languages:</strong>
//               <div className="tech-tags">
//                 {project.languages.map((lang, idx) => (
//                   <span className="tech-tag" key={idx}>{lang}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="project-buttons">
//               <a href={project.github} className="project-btn" target="_blank" rel="noreferrer">
//                 <i className="fab fa-github"></i> GitHub
//               </a>
//               <a href={project.demo} className="project-btn" target="_blank" rel="noreferrer">
//                 <i className="fas fa-external-link-alt"></i> Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="more-projects-btn-container">
//         <button className="more-projects-btn" onClick={() => navigate('/projects')}>
//           More Projects
//         </button>
//       </div>
//     </section>
//   );
// };

// export default RecentContributions;





















// import React from 'react';
// import '../styles/recentContributions.css';
// import ing1 from '../assets/aboutimg.png'

// const RecentContributions = () => {
//   const projects = [
//     {
//       name: 'AI-Powered Smart Helmet',
//      // image: ing1,
//       date: 'April 2025',
//       description:
//         'An intelligent helmet solution for accident prevention and emergency response using real-time sensor data and alerts.',
//       languages: ['Python', 'React.js', 'Node.js'],
//       github: 'https://github.com/your-username/smart-helmet',
//       demo: 'https://smart-helmet-demo.netlify.app',
//     },
//     {
//       name: 'React.js Portfolio Website',
//       image: 'https://img.icons8.com/fluency/100/react.png',
//       date: 'March 2025',
//       description:
//         'Dynamic portfolio website with animations, responsive design, and a modular project showcase.',
//       languages: ['JavaScript', 'React.js', 'CSS'],
//       github: 'https://github.com/your-username/portfolio-site',
//       demo: 'https://yourportfolio.netlify.app',
//     },
//     {
//       name: 'Real-Time Chat App',
//       image: 'https://img.icons8.com/ios/100/chat--v1.png',
//       date: 'Feb - Mar 2025',
//       description:
//         'Chat application with instant messaging, message deletion, and chat room features using Socket.IO.',
//       languages: ['Node.js', 'Express', 'MongoDB'],
//       github: 'https://github.com/your-username/chat-app',
//       demo: 'https://chat-app-demo.netlify.app',
//     },
//     {
//       name: 'QR & Barcode Generator',
//       image: 'https://img.icons8.com/external-flat-juicy-fish/100/external-qr-codes-coding-and-development-flat-flat-juicy-fish.png',
//       date: 'Jan 2025',
//       description:
//         'Tool to generate and download QR codes and barcodes from links with print support.',
//       languages: ['JavaScript', 'React.js', 'HTML/CSS'],
//       github: 'https://github.com/your-username/qr-barcode-gen',
//       demo: 'https://qrcode-gen.netlify.app',
//     },
//   ];

//   return (
//     <section className="recent-contributions-section">
//       <h2>Recent Project Contributions</h2>
//       <div className="underline"></div>

//       <div className="contributions-container">
//         {projects.map((project, index) => (
//           <div className="contribution-card" key={index}>
//             <h3>{project.name}</h3>
//             <img src={project.image} alt={project.name} className="project-image" />
//             <button className="date-btn">{project.date}</button>

//             <p>{project.description}</p>

//             <div className="tech-stack">
//               <strong>Languages:</strong>
//               <div className="tech-tags">
//                 {project.languages.map((lang, idx) => (
//                   <span className="tech-tag" key={idx}>{lang}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="project-buttons">
//               <a href={project.github} className="project-btn" target="_blank" rel="noreferrer">
//                 <i className="fab fa-github"></i> GitHub
//               </a>
//               <a href={project.demo} className="project-btn" target="_blank" rel="noreferrer">
//                 <i className="fas fa-external-link-alt"></i> Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RecentContributions;








// import React, { useState } from 'react';
// import '../styles/recentContributions.css';
// import img1 from '../assets/project1.png'; // Adjust to your real path
// import img2 from '../assets/project2.png';
// import img3 from '../assets/project3.png';
// // import img4 from '../assets/project4.png';

// const contributions = [
//   // {
//   //   id: 1,
//   //   name: 'Restaurant Reservation Management',
//   //   image: img1,
//   //   description: 'AI-powered smart helmet for accident prevention and emergency response. Uses ML models to detect collisions and send emergency alerts in real-time.',
//   //   techStack: ['React', 'Node.js', 'TensorFlow'],
//   //   github: 'https://github.com/your-username/smart-helmet',
//   //   live: 'https://smart-helmet.live',
//   // },
//   {
//     // id: 1,
//     name: "Restaurant Reservation Website",
//     description: "Using Mern Stack Technologies i made a beautiful restaurant Booking application for user friendly and responsive for mobile application as well",
//     techStack: ["html","css", "javascript", "react", "mongodb","express","Node","bootstrap"],
//     image: img1,
//     github: "https://github.com/DUDEKULARAHIM/Sample-Restaurant-Website",
//     // more: "/projects/smart-helmet",
//     live:"https://sample-restaurant-website.onrender.com",
//   },
//   {
//     // id: 2;
//     name: "Event Management Calender",
//     description: "An event calendar helps users schedule, view, and manage events. It shows dates, highlights events, and allows adding, editing, and deleting events with easy navigation and custom date options.",
//     techStack: ["node", "mongodb","localstorage","react","css","Javascript"],
//     image: img2,
//     github: "https://github.com/DUDEKULARAHIM/event-manager-calendar",
//     // more: "/projects/chat-app",
//     live: "https://event-manager-calendar.onrender.com",
//   },
//   {
//     name: "Chat Application",
//     description: "Real-time chat app using Socket.IO and MongoDB.",
//     techStack: ["react", "css", "localstorage","socket.io","express","node","localstorage","bootstrap"],
//     image: img3,
//     github: "https://github.com/mohan2347/chat-application",
//     // more: "/projects/placement-tracker",
//     live: "https://chat-application-x.onrender.com",
//   },
//   // Add more projects as needed
// ];

// const RecentContributions = () => {
//   const [expandedIds, setExpandedIds] = useState([]);

//   const toggleDetails = (id) => {
//     setExpandedIds((prev) => {
//       if (prev.includes(id)) {
//         return prev.filter((item) => item !== id);
//       } else if (prev.length < 3) {
//         return [...prev, id];
//       } else {
//         return [...prev.slice(1), id]; // keep max 3
//       }
//     });
//   };

//   return (
//     <section className="recent-contributions-section">
//       <h2>Projects</h2>
//       <div className="rec-underline"></div>

//       <div className="contributions-container">
//         {contributions.map((project) => {
//           const isExpanded = expandedIds.includes(project.id);

//           return (
//             <div
//               key={project.id}
//               className={`contribution-card ${isExpanded ? 'active' : ''}`}
//               onClick={() => toggleDetails(project.id)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="project-image"
//                 loading="lazy"
//               />
//               <h3 className="project-title">{project.name}</h3>

//               {isExpanded && (
//                 <div className="project-details">
//                   <p className="project-description">{project.description}</p>

//                   <div className="tech-stack">
//                     <div className="stack-heading">Languages & Tech:</div>
//                     <div className="tech-tags">
//                       {project.techStack.map((tech, index) => (
//                         <span key={index} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="project-buttons">
//                     <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
//                       GitHub
//                     </a>
//                     <a href={project.live} className="project-btn" target="_blank" rel="noopener noreferrer">
//                       Live Link
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default RecentContributions;




















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/recentContributions.css';
import img1 from '../assets/project1.png';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';

const contributions = [
  {
    name: "Restaurant Reservation Website",
    description: "Using MERN Stack Technologies I built a beautiful, responsive restaurant booking application, also mobile-friendly.",
    techStack: ["html", "css", "javascript", "react", "mongodb", "express", "node", "bootstrap"],
    image: img1,
    github: "https://github.com/DUDEKULARAHIM/Sample-Restaurant-Website",
    live: "https://sample-restaurant-website.onrender.com",
  },
  {
    name: "Event Management Calendar",
    description: "An event calendar with scheduling, adding/editing/deleting events, and custom date options.",
    techStack: ["node", "mongodb", "localstorage", "react", "css", "javascript"],
    image: img2,
    github: "https://github.com/DUDEKULARAHIM/event-manager-calendar",
    live: "https://event-manager-calendar.onrender.com",
  },
  {
    name: "Chat Application",
    description: "Real-time chat app using Socket.IO and MongoDB.",
    techStack: ["react", "css", "localstorage", "socket.io", "express", "node", "bootstrap"],
    image: img3,
    github: "https://github.com/mohan2347/chat-application",
    live: "https://chat-application-x.onrender.com",
  },
];

const getTechIcon = (tech) => {
  const iconMap = {
    html: "fab fa-html5",
    css: "fab fa-css3-alt",
    javascript: "fab fa-js",
    react: "fab fa-react",
    node: "fab fa-node-js",
    "node.js": "fab fa-node-js",
    mongodb: "fas fa-database",
    express: "fas fa-server",
    bootstrap: "fab fa-bootstrap",
    "socket.io": "fas fa-plug",
    localstorage: "fas fa-hdd",
  };
  const key = tech.toLowerCase();
  return iconMap[key] || "fas fa-code";
};

const RecentContributions = () => {
  const [expandedIds, setExpandedIds] = useState([]);
  const navigate = useNavigate();

  const toggleDetails = (id) => {
    setExpandedIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      else if (prev.length < 3) return [...prev, id];
      else return [...prev.slice(1), id];
    });
  };

  return (
    <section className="recent-contributions-section">
      <h2>Projects</h2>
      <div className="rec-underline"></div>

      <div className="contributions-container">
        {contributions.map((project, index) => {
          const isExpanded = expandedIds.includes(index);
          return (
            <div
              key={index}
              className={`contribution-card ${isExpanded ? 'active' : ''}`}
              onClick={() => toggleDetails(index)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                loading="lazy"
              />
              <h3 className="project-title">{project.name}</h3>

              {isExpanded && (
                <div className="project-details">
                  <p className="project-description">{project.description}</p>

                  <div className="tech-stack">
                    <div className="stack-heading">Languages & Tech:</div>
                    <div className="tech-tags">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          <i className={getTechIcon(tech)}></i> {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-buttons">
                    <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href={project.live} className="project-btn" target="_blank" rel="noopener noreferrer">
                      Live Link
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className="more-projects-btn" onClick={() => navigate('/projects')}>
        View More Projects
      </button>
    </section>
  );
};

export default RecentContributions;
