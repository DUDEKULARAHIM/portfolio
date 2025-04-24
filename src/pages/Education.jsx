
// import React from 'react';
// import '../styles/Education.css';

// const Education = () => {
//   return (
//     <section className="education-section">
//       <h2>My Education</h2>
//       <div className="edu-underline"></div>
//       <div className="education-container">
//         <div className="education-card">
//           <h3>10th Class</h3>
//           <p><strong>School:</strong> Narayana EM School</p>
//           <p><strong>Year:</strong> 2020</p>
//           <p><strong>Percentage:</strong> 99.6%</p>
//         </div>

//         <div className="education-card">
//           <h3>Intermediate</h3>
//           <p><strong>College:</strong> Narayana Junior College</p>
//           <p><strong>Year:</strong> 2020 - 2022</p>
//           <p><strong>Percentage:</strong> 95.4%</p>
//         </div>

//         <div className="education-card">
//           <h3>B.Tech (Ongoing)</h3>
//           <p><strong>University:</strong> Lovely Professional University</p>
//           <p><strong>Year:</strong> 2022 - Present</p>
//           <p><strong>CGPA:</strong> 7.9</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;













import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <h2>My Education</h2>
      <div className="edu-underline"></div>
      <div className="education-container">
        {/* 10th Class Card */}
        <div className="education-card">
          <div className="edu-header">
            {/* School Logo using Font Awesome */}
            <i className="fa fa-school edu-logo"></i>
            <h3>10th Class</h3>
          </div>
          <p><strong>School:</strong> Narayana EM School</p>
          <p><strong>Year:</strong> 2020</p>
          <p><strong>Percentage:</strong> 99.6%</p>
          <p><strong>Key Achievements:</strong> Top performer in mathematics and science.</p>
          {/* <p className="edu-description">A foundational year where I excelled academically and participated in various extra-curricular activities.</p> */}
        </div>

        {/* Intermediate Card */}
        <div className="education-card">
          <div className="edu-header">
            {/* College Logo using Font Awesome */}
            <i className="fa fa-university edu-logo"></i>
            <h3>Intermediate</h3>
          </div>
          <p><strong>College:</strong> Narayana Junior College</p>
          <p><strong>Year:</strong> 2020 - 2022</p>
          <p><strong>Percentage:</strong> 95.4%</p>
          <p><strong>Key Achievements:</strong> Consistently ranked in top 10 of the batch.</p>
          {/* <p className="edu-description">Focused on preparing for competitive exams while maintaining high academic standards.</p> */}
        </div>

        {/* B.Tech (Ongoing) Card */}
        <div className="education-card">
          <div className="edu-header">
            {/* University Logo using Font Awesome */}
            <i className="fa fa-graduation-cap edu-logo"></i>
            <h3>B.Tech (Ongoing)</h3>
          </div>
          <p><strong>University:</strong> Lovely Professional University</p>
          <p><strong>Year:</strong> 2022 - Present</p>
          <p><strong>CGPA:</strong> 7.9</p>
          <p><strong>Key Achievements:</strong> Received the university scholarship for outstanding academic performance in the first year.</p>
          {/* <p className="edu-description">Pursuing a degree in Computer Science and Engineering with a focus on AI and data structures.</p> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
