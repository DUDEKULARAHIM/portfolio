
// import React from 'react';
// import '../styles/achievements.css';

// const Achievements = () => {
//   const achievements = [
//     {
//       title: 'Hackathon Winner 2024',
//       description: 'Won first place in a regional coding hackathon by building a fully functional web app in 24 hours.',
//       date: 'March 2024',
//       icon: 'fas fa-trophy',
//     },
//     {
//       title: 'Top 10 on Codeforces',
//       description: 'Ranked in the top 10 of the Codeforces coding competition for 3 consecutive months.',
//       date: 'January 2024 - Present',
//       icon: 'fas fa-medal',
//     },
//     {
//       title: 'Intern at Google',
//       description: 'Worked as a software engineering intern at Google, contributing to their cloud storage project.',
//       date: 'June 2023 - August 2023',
//       icon: 'fab fa-google',
//     },
//     {
//       title: 'Certified AWS Solutions Architect',
//       description: 'Earned the AWS Certified Solutions Architect Associate certification, demonstrating expertise in cloud architecture.',
//       date: 'December 2023',
//       icon: 'fab fa-aws',
//     },
//   ];

//   return (
//     <section className="achievements-section">
//       <h2>My Achievements</h2>
//       <div className="underline"></div>

//       <div className="achievements-container">
//         {achievements.map((achievement, index) => (
//           <div key={index} className="achievement-card">
//             <div className="achievement-icon">
//               <i className={achievement.icon}></i>
//             </div>
//             <div className="achievement-details">
//               <h3>{achievement.title}</h3>
//               <p>{achievement.description}</p>
//               <span className="achievement-date">{achievement.date}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;









// import React from 'react';
// import '../styles/achievements.css';

// const Achievements = () => {
//   const achievements = [
//     {
//       title: '5-Star Python Rating on HackerRank',
//       description: 'Achieved a 5-star rating in Python programming on HackerRank, showcasing advanced problem-solving skills.',
//       date: 'March 2025',
//       icon: 'fab fa-python',
//     },
//     {
//       title: 'Python Basic Certificate',
//       description: 'Earned a certification in Python basics after completing an online course with a perfect score.',
//       date: 'January 2025',
//       icon: 'fab fa-python',
//     },
//     {
//       title: 'Gold Medal in School-Level Quiz Competition',
//       description: 'Won a Gold Medal in the school-level quiz competition, demonstrating knowledge and quick thinking.',
//       date: 'December 2024',
//       icon: 'fas fa-trophy',
//     },
//     {
//       title: '4-Star Rating in Problem Solving',
//       description: 'Achieved a 4-star rating in problem solving on various platforms, recognizing my ability to tackle complex challenges.',
//       date: 'February 2025',
//       icon: 'fas fa-cogs',
//     },
//   ];

//   return (
//     <section className="achievements-section">
//       <h2>My Achievements</h2>
//       <div className="underline"></div>
//       <div className="achievements-container">
//         {achievements.map((achievement, index) => (
//           <div className="achievement-card" key={index}>
//             <div className="achievement-header">
//               <i className={`${achievement.icon} achievement-icon`}></i>
//               <h3>{achievement.title}</h3>
//             </div>
//             <p>{achievement.description}</p>
//             <div className="achievement-date">
//               <button className="date-button">{achievement.date}</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;






















import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/achievements.css';

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      title: '5-Star Python Rating on HackerRank',
      description: 'Achieved a 5-star rating in Python programming on HackerRank, showcasing advanced problem-solving skills.',
      date: 'March 2025',
      icon: 'fab fa-python',
    },
    {
      title: 'Python Basic Certificate In Hacker Rank',
      description: 'Earned a certification in Python basics after completing an online course with a perfect score.',
      date: 'January 2025',
      icon: 'fab fa-python',
    },
    {
      title: 'Gold Medal in School-Level Quiz Competition',
      description: 'Won a Gold Medal in the school-level quiz competition, demonstrating knowledge and quick thinking.',
      date: 'December 2024',
      icon: 'fas fa-trophy',
    },
    {
      title: '4-Star Rating in Problem Solving',
      description: 'Achieved a 4-star rating in problem solving on various platforms, recognizing my ability to tackle complex challenges.',
      date: 'February 2025',
      icon: 'fas fa-cogs',
    },
  ];

  return (
    <section className="achievements-section">
      <h2>My Achievements</h2>
      <div className="achi-underline"></div>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-header">
              <i className={`${achievement.icon} achievement-icon`}></i>
              <h3>{achievement.title}</h3>
            </div>
            <p>{achievement.description}</p>
            <div className="achievement-date">
              <button className="date-button">{achievement.date}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="more-button-container">
        <button className="more-button" onClick={() => navigate('/achievements')}>
          More Achievements
        </button>
      </div>
    </section>
  );
};

export default Achievements;
