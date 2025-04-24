// import React from "react";
// import "../styles/projectpage.css";

// const projectData = {
//   major: [
//     {
//       title: "Smart Helmet",
//       description: "AI-powered helmet to prevent accidents and assist emergency response.",
//       techStack: ["Arduino", "NodeMCU", "AI", "Sensors"],
//       images: ["/images/helmet1.jpg", "/images/helmet2.jpg", "/images/helmet3.jpg"],
//       github: "https://github.com/user/smart-helmet",
//       more: "/projects/smart-helmet"
//     },
//     {
//       title: "Chat Application",
//       description: "Real-time chat app using Socket.IO, Node.js, and MongoDB.",
//       techStack: ["Node.js", "Express", "Socket.IO", "MongoDB"],
//       images: ["/images/chat1.jpg", "/images/chat2.jpg"],
//       github: "https://github.com/user/chat-app",
//       more: "/projects/chat-app"
//     },
//     {
//       title: "Placement Tracker",
//       description: "Spreadsheet app to track on-campus/off-campus placement details.",
//       techStack: ["React.js", "CSS", "LocalStorage"],
//       images: ["/images/placement1.jpg", "/images/placement2.jpg"],
//       github: "https://github.com/user/placement-tracker",
//       more: "/projects/placement-tracker"
//     }
//   ],
//   minor: [
//     {
//       title: "QR & Barcode Generator",
//       description: "Generates printable QR codes and barcodes from user input.",
//       techStack: ["React.js", "JsBarcode", "qrcode.react"],
//       images: ["/images/qr1.jpg"],
//       github: "https://github.com/user/qr-generator",
//       more: "/projects/qr-generator"
//     },
//     {
//       title: "Password Manager",
//       description: "Saves & generates secure passwords with unlock feature.",
//       techStack: ["React Native", "AsyncStorage"],
//       images: ["/images/password1.jpg"],
//       github: "https://github.com/user/password-manager",
//       more: "/projects/password-manager"
//     },
//     {
//       title: "DSA Tracker",
//       description: "A tracker to monitor DSA topics completed during training.",
//       techStack: ["HTML", "CSS", "JavaScript"],
//       images: ["/images/dsa1.jpg"],
//       github: "https://github.com/user/dsa-tracker",
//       more: "/projects/dsa-tracker"
//     }
//   ]
// };

// const ProjectRow = ({ project, isMajor }) => (
//   <div className={`project-row ${isMajor ? "major" : "minor"}`}>
//     <div className="carousel">
//       {project.images.map((img, i) => (
//         <img src={img} alt={project.title} key={i} className="carousel-img" />
//       ))}
//     </div>
//     <div className="project-details">
//       <h3>{project.title}</h3>
//       <p>{project.description}</p>
//       <div className="tech-stack">
//         {project.techStack.map((tech, i) => (
//           <span key={i} className="badge">{tech}</span>
//         ))}
//       </div>
//       <div className="btn-group">
//         <a href={project.more} className="btn primary">More About Project</a>
//         <a href={project.github} className="btn secondary" target="_blank" rel="noreferrer">GitHub Demo</a>
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => (
//   <div className="projects-container">
//     <h2 className="underline-heading">Projects</h2>

//     <h3 className="section-heading">Major Projects</h3>
//     {projectData.major.map((proj, idx) => (
//       <ProjectRow key={idx} project={proj} isMajor />
//     ))}

//     <h3 className="section-heading">Minor Projects</h3>
//     {projectData.minor.map((proj, idx) => (
//       <ProjectRow key={idx} project={proj} isMajor={false} />
//     ))}
//   </div>
// );

// export default Projects;



// import React from "react";
// import "../styles/projectpage.css";
// import img2 from '../assets/img1.jpeg'; // Replace with real images
// import chatImg from '../assets/img1.jpeg';
// import placementImg from '../assets/img1.jpeg';
// import qrImg from '../assets/img1.jpeg';
// import passwordImg from '../assets/img1.jpeg';
// import dsaImg from '../assets/img1.jpeg';

// const allProjects = [
//   // Major
//   {
//     title: "Smart Helmet",
//     description: "AI-powered helmet to prevent accidents and assist emergency response.",
//     techStack: ["Arduino", "NodeMCU", "AI", "Sensors"],
//     image: img2,
//     github: "https://github.com/user/smart-helmet",
//     more: "/projects/smart-helmet"
//   },
//   {
//     title: "Chat App",
//     description: "Real-time chat app using Socket.IO and MongoDB.",
//     techStack: ["Node.js", "Socket.IO", "MongoDB"],
//     image: chatImg,
//     github: "https://github.com/user/chat-app",
//     more: "/projects/chat-app"
//   },
//   {
//     title: "Placement Tracker",
//     description: "Spreadsheet-style app to track placements.",
//     techStack: ["React", "CSS", "LocalStorage"],
//     image: placementImg,
//     github: "https://github.com/user/placement-tracker",
//     more: "/projects/placement-tracker"
//   },

//   // Minor
//   {
//     title: "QR Generator",
//     description: "Generate and download QR & barcodes instantly.",
//     techStack: ["React", "JsBarcode", "qrcode.react"],
//     image: qrImg,
//     github: "https://github.com/user/qr-generator",
//     more: "/projects/qr-generator"
//   },
//   {
//     title: "Password Manager",
//     description: "Secure password generation and saving app.",
//     techStack: ["React Native", "AsyncStorage"],
//     image: passwordImg,
//     github: "https://github.com/user/password-manager",
//     more: "/projects/password-manager"
//   },
//   {
//     title: "DSA Tracker",
//     description: "Visual DSA completion tracker.",
//     techStack: ["HTML", "CSS", "JS"],
//     image: dsaImg,
//     github: "https://github.com/user/dsa-tracker",
//     more: "/projects/dsa-tracker"
//   }
// ];

// const ProjectSection = ({ projects }) => {
//   return (
//     <div className="projects-container">
//       {projects.map((proj, i) => (
//         <div key={i} className="project-row">
//           <img src={proj.image} alt={proj.title} className="project-image" />
//           <div className="project-content">
//             <h3>{proj.title}</h3>
//             <p>{proj.description}</p>
//             <div className="tags">
//               {proj.techStack.map((tech, idx) => (
//                 <span key={idx} className="tag">{tech}</span>
//               ))}
//             </div>
//             <div className="buttons">
//               <a href={proj.more} className="btn primary">More About Project</a>
//               <a href={proj.github} target="_blank" rel="noreferrer" className="btn secondary">GitHub Demo</a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Projects = () => (
//   <div className="projects-wrapper">
//     <h2 className="section-title">Projects</h2>
//     <ProjectSection projects={allProjects} />
//   </div>
// );

// export default Projects;








// import React from "react";
// import "../styles/projectpage.css";
// import img2 from '../assets/img2.jpg'; // Adjust to your real path

// const allProjects = [
//   {
//     title: "Smart Helmet",
//     description: "AI-powered helmet to prevent accidents and assist emergency response.",
//     techStack: ["css", "JavaScript", "React", "MongoDb"],
//     image: img2,
//     github: "https://github.com/user/smart-helmet",
//     more: "/projects/smart-helmet"
//   },
//   {
//     title: "Chat App",
//     description: "Real-time chat app using Socket.IO and MongoDB.",
//     techStack: ["Node.js", "Socket.IO", "MongoDB"],
//     image: "https://via.placeholder.com/500x300",
//     github: "https://github.com/user/chat-app",
//     more: "/projects/chat-app"
//   },
//   {
//     title: "Placement Tracker",
//     description: "Spreadsheet-style app to track placements.",
//     techStack: ["React", "CSS", "LocalStorage"],
//     image: "https://via.placeholder.com/500x300",
//     github: "https://github.com/user/placement-tracker",
//     more: "/projects/placement-tracker"
//   },
//   {
//     title: "QR Generator",
//     description: "Generate and download QR & barcodes instantly.",
//     techStack: ["React", "JsBarcode", "qrcode.react"],
//     image: "https://via.placeholder.com/500x300",
//     github: "https://github.com/user/qr-generator",
//     more: "/projects/qr-generator"
//   },
//   {
//     title: "Password Manager",
//     description: "Secure password generation and saving app.",
//     techStack: ["React", "AsyncStorage"],
//     image: "https://via.placeholder.com/500x300",
//     github: "https://github.com/user/password-manager",
//     more: "/projects/password-manager"
//   },
//   {
//     title: "DSA Tracker",
//     description: "Visual DSA completion tracker.",
//     techStack: ["HTML", "CSS", "JavaScript"],
//     image: "https://via.placeholder.com/500x300",
//     github: "https://github.com/user/dsa-tracker",
//     more: "/projects/dsa-tracker"
//   }
// ];

// const getTechLogo = (tech) => {
//   const iconName = tech.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
//   return `https://cdn.simpleicons.org/${iconName}`;
// };

// const Projects = () => (
//   <div className="projects-wrapper">
//     <h2 className="section-title">Projects</h2>
//     <div className="projects-container">
//       {allProjects.map((proj, i) => (
//         <div key={i} className="project-row">
//           <img src={proj.image} alt={proj.title} className="project-image" />
//           <div className="project-content">
//             <h3>{proj.title}</h3>
//             <p>{proj.description}</p>
//             <div className="tags">
//               {proj.techStack.map((tech, idx) => (
//                 <span key={idx} className="tag">
//                   <img src={getTechLogo(tech)} alt={tech} />
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="buttons">
//               <a href={proj.more} className="btn primary">More About Project</a>
//               <a href={proj.github} target="_blank" rel="noreferrer" className="btn secondary">GitHub Demo</a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Projects;














import React from "react";
import "../styles/projectpage.css";
import img1 from '../assets/project1.png'; // Adjust to your real path
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';
import img4 from '../assets/project4.png';

const allProjects = [
  {
    title: "Restaurant Reservation Website",
    description: "Using Mern Stack Technologies i made a beautiful restaurant Booking application for user friendly and responsive for mobile application as well",
    techStack: ["html","css", "javascript", "react", "mongodb","express","Node","bootstrap"],
    image: img1,
    github: "https://github.com/DUDEKULARAHIM/Sample-Restaurant-Website",
    more: "/projects/smart-helmet",
    live:"https://sample-restaurant-website.onrender.com",
  },
  {
    title: "Event Management Calender",
    description: "An event calendar helps users schedule, view, and manage events. It shows dates, highlights events, and allows adding, editing, and deleting events with easy navigation and custom date options.",
    techStack: ["node", "mongodb","localstorage","react","css","Javascript"],
    image: img2,
    github: "https://github.com/DUDEKULARAHIM/event-manager-calendar",
    more: "/projects/chat-app",
    live: "https://event-manager-calendar.onrender.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using Socket.IO and MongoDB.",
    techStack: ["react", "css", "localstorage","socket.io","express","node","localstorage","bootstrap"],
    image: img3,
    github: "https://github.com/mohan2347/chat-application",
    more: "/projects/placement-tracker",
    live: "https://chat-application-x.onrender.com",
  },
  {
    title: "QR/BAR code Generator",
    description: "Generate and download QR & barcodes instantly.A web application for generating QR codes and barcodes from any link. Users can download and print them for easy access and sharing, making searches simple and efficient.it is very useful for every member to search by link .by using qr code or bar code it will make as easy and simple",
    techStack: ["react", "jsbarcode", "qrcode.react","localstorage"],
    image: img4,
    github: "https://github.com/DUDEKULARAHIM/qr-bar-code-generator",
    more: "/projects/qr-generator",
    live: "https://qr-bar-code-generator.onrender.com",
  },
  // {
  //   title: "Password Manager",
  //   description: "Secure password generation and saving app.",
  //   techStack: ["react", "asyncstorage"],
  //   image: "https://via.placeholder.com/500x300",
  //   github: "https://github.com/user/password-manager",
  //   more: "/projects/password-manager"
  // },
  // {
  //   title: "DSA Tracker",
  //   description: "Visual DSA completion tracker.",
  //   techStack: ["html", "css", "javascript"],
  //   image: "https://via.placeholder.com/500x300",
  //   github: "https://github.com/user/dsa-tracker",
  //   more: "/projects/dsa-tracker"
  // }
];

const getTechLogo = (tech) => {
  const techIcons = {
    "react": "fab fa-react",
    "javascript": "fab fa-js",
    "css": "fab fa-css3-alt",
    "mongodb": "fas fa-database",
    "node": "fab fa-node-js",
    "socket.io": "fab fa-node",
    "localstorage": "fas fa-database",
    "jsbarcode": "fas fa-qrcode",
    "qrcode.react": "fas fa-qrcode",
    "asyncstorage": "fas fa-cogs"
  };

  return techIcons[tech.toLowerCase()] || "fas fa-cogs"; // Default icon if not found
};

const Projects = () => (
  <div className="projects-wrapper">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      {allProjects.map((proj, i) => (
        <div key={i} className="project-row">
          <img src={proj.image} alt={proj.title} className="project-image" />
          <div className="project-content">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.techStack.map((tech, idx) => (
                <span key={idx} className="tag">
                  <i className={getTechLogo(tech)}></i> {tech}
                </span>
              ))}
            </div>
            <div className="buttons">
              {/* <a href={proj.more} className="btn primary">More About Project</a> */}
              <a href={proj.github} target="_blank" rel="noreferrer" className="btn secondary">GitHub Demo</a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
