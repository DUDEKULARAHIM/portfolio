
// import React from 'react';
// import '../styles/certifications.css';

// const Certifications = () => {
//   const certificates = [
//     {
//       title: 'React Development Certificate',
//       description: 'Completed a comprehensive course in React development from a top-rated online platform.',
//       logo: 'fab fa-react',
//       date: 'March 2025',
//     },
//     {
//       title: 'JavaScript Mastery',
//       description: 'Achieved proficiency in JavaScript programming, focusing on both fundamentals and advanced concepts.',
//       logo: 'fab fa-js-square',
//       date: 'December 2024',
//     },
//     {
//       title: 'Data Structures and Algorithms',
//       description: 'Mastered core concepts in data structures and algorithms with hands-on coding challenges.',
//       logo: 'fas fa-cogs',
//       date: 'August 2024',
//     },
//   ];

//   return (
//     <section className="certifications-section">
//       <h2>My Certifications</h2>
//       <div className="underline"></div>

//       <div className="certifications-container">
//         {certificates.map((cert, index) => (
//           <div key={index} className="certification-card">
//             <div className="certification-logo">
//               <i className={cert.logo}></i>
//             </div>
//             <div className="certification-details">
//               <h3>{cert.title}</h3>
//               <p>{cert.description}</p>
//               <span className="certification-date">{cert.date}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;

















import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/certifications.css';

const Certifications = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: 'OOPS In NeoColab',
      description: 'Completed a comprehensive course in React development from a top-rated online platform.',
      logo: 'fas fa-code',
      date: 'March 2025',
    },
    {
      title: 'Data Structures and Algorithms In NeoColab',
      description: 'Mastered core concepts in data structures and algorithms with hands-on coding challenges.',
      logo: 'fas fa-cogs',
      date: 'August 2024',
    },
    {
      title: 'JavaScript Mastery',
      description: 'Achieved proficiency in JavaScript programming, focusing on both fundamentals and advanced concepts.',
      logo: 'fab fa-js-square',
      date: 'December 2024',
    },
    
   
  ];

  return (
    <section className="certifications-section">
      <h2>My Certifications</h2>
      <div className="cert-underline"></div>

      <div className="certifications-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-logo">
              <i className={cert.logo}></i>
            </div>
            <div className="certification-details">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <span className="certification-date">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="redirect-button-container">
        <button className="redirect-button" onClick={() => navigate('/certificates')}>
          View All Certificates
        </button>
      </div>
    </section>
  );
};

export default Certifications;
