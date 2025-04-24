
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <h2>My Education</h2>
      <div className="edu-underline"></div>
      <div className="education-container">
        <div className="education-card">
          <h3>10th Class</h3>
          <p><strong>School:</strong> Narayana EM School</p>
          <p><strong>Year:</strong> 2020</p>
          <p><strong>Percentage:</strong> 99.6%</p>
        </div>

        <div className="education-card">
          <h3>Intermediate</h3>
          <p><strong>College:</strong> Narayana Junior College</p>
          <p><strong>Year:</strong> 2020 - 2022</p>
          <p><strong>Percentage:</strong> 95.4%</p>
        </div>

        <div className="education-card">
          <h3>B.Tech (Ongoing)</h3>
          <p><strong>University:</strong> Lovely Professional University</p>
          <p><strong>Year:</strong> 2022 - Present</p>
          <p><strong>CGPA:</strong> 7.9</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
