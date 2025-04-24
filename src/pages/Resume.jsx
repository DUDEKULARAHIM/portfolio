// import React from 'react';
// import Education from './Education';
// import Skills from './Skills'; // Make sure this path is correct
// import '../styles/resume.css';
// import Certifications from './Certifications';
// import Achievements from './Achievements';
// import RecentContributions from './RecentContributions';
// import KnownLanguages from './KnownLanguages';

// const Resume = () => {
//   return (
//     <section className="resume-section">
//       <h2>My Resume</h2>
//       <div className="res-underline"></div>

//       {/* Education Section */}
//       <Education />

//       {/* Skills Section */}
//       <Skills />

//       {/* languages */}
//       <KnownLanguages />

//       {/* Certifications */}
//       <Certifications />

//       {/* Achievements */}
//       <Achievements />

//       {/* Projects */}
//       <RecentContributions />
//     </section>
//   );
// };

// export default Resume;












import React from 'react';
import Education from './Education';
import Skills from './Skills';
import '../styles/resume.css';
import Certifications from './Certifications';
import Achievements from './Achievements';
import RecentContributions from './RecentContributions';
import KnownLanguages from './KnownLanguages';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>
      <div className="res-underline"></div>

      {/* Download Buttons */}
      <div className="resume-buttons">
        <a
          href="/CV/general.pdf"
          download="Dudekula_Rahim_General_CV.pdf"
          className="download-btn"
        >
          Download General CV
        </a>
        <a
          href="/cv/specialized.pdf"
          download="Dudekula_Rahim_Specialised_CV.pdf"
          className="download-btn"
        >
          Download Specialised CV
        </a>
      </div>

      {/* Resume Sections */}
      <Education />
      <Skills />
      <KnownLanguages />
      <Certifications />
      <Achievements />
      <RecentContributions />
      {/* <Footer /> */}



      <h2>Download My Resume</h2>
      <div className="resume-buttons">
        <a
          href="/CV/general.pdf"
          download="Dudekula_Rahim_General_CV.pdf"
          className="download-btn"
        >
          Download General CV
        </a>
        <a
          href="/cv/specialized.pdf"
          download="Dudekula_Rahim_Specialised_CV.pdf"
          className="download-btn"
        >
          Download Specialised CV
        </a>
      </div>

      <Footer />

    </section>
  );
};

export default Resume;
