import React from "react";
import "./Projects.css";

const projectData = {
  major: [
    {
      title: "Smart Helmet",
      description: "AI-powered helmet to prevent accidents and assist emergency response.",
      techStack: ["Arduino", "NodeMCU", "AI", "Sensors"],
      images: ["/images/helmet1.jpg", "/images/helmet2.jpg", "/images/helmet3.jpg"],
      github: "https://github.com/user/smart-helmet",
      more: "/projects/smart-helmet"
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Socket.IO, Node.js, and MongoDB.",
      techStack: ["Node.js", "Express", "Socket.IO", "MongoDB"],
      images: ["/images/chat1.jpg", "/images/chat2.jpg"],
      github: "https://github.com/user/chat-app",
      more: "/projects/chat-app"
    },
    {
      title: "Placement Tracker",
      description: "Spreadsheet app to track on-campus/off-campus placement details.",
      techStack: ["React.js", "CSS", "LocalStorage"],
      images: ["/images/placement1.jpg", "/images/placement2.jpg"],
      github: "https://github.com/user/placement-tracker",
      more: "/projects/placement-tracker"
    }
  ],
  minor: [
    {
      title: "QR & Barcode Generator",
      description: "Generates printable QR codes and barcodes from user input.",
      techStack: ["React.js", "JsBarcode", "qrcode.react"],
      images: ["/images/qr1.jpg"],
      github: "https://github.com/user/qr-generator",
      more: "/projects/qr-generator"
    },
    {
      title: "Password Manager",
      description: "Saves & generates secure passwords with unlock feature.",
      techStack: ["React Native", "AsyncStorage"],
      images: ["/images/password1.jpg"],
      github: "https://github.com/user/password-manager",
      more: "/projects/password-manager"
    },
    {
      title: "DSA Tracker",
      description: "A tracker to monitor DSA topics completed during training.",
      techStack: ["HTML", "CSS", "JavaScript"],
      images: ["/images/dsa1.jpg"],
      github: "https://github.com/user/dsa-tracker",
      more: "/projects/dsa-tracker"
    }
  ]
};

const ProjectRow = ({ project, isMajor }) => (
  <div className={`project-row ${isMajor ? "major" : "minor"}`}>
    <div className="carousel">
      {project.images.map((img, i) => (
        <img src={img} alt={project.title} key={i} className="carousel-img" />
      ))}
    </div>
    <div className="project-details">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map((tech, i) => (
          <span key={i} className="badge">{tech}</span>
        ))}
      </div>
      <div className="btn-group">
        <a href={project.more} className="btn primary">More About Project</a>
        <a href={project.github} className="btn secondary" target="_blank" rel="noreferrer">GitHub Demo</a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="projects-container">
    <h2 className="underline-heading">Projects</h2>

    <h3 className="section-heading">Major Projects</h3>
    {projectData.major.map((proj, idx) => (
      <ProjectRow key={idx} project={proj} isMajor />
    ))}

    <h3 className="section-heading">Minor Projects</h3>
    {projectData.minor.map((proj, idx) => (
      <ProjectRow key={idx} project={proj} isMajor={false} />
    ))}
  </div>
);

export default Projects;
