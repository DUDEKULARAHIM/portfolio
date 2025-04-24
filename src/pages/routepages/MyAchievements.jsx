
import React, { useState } from 'react';
import '../../styles/myAchievements.css';
import img1 from "../../assets/img1.jpeg";

const MyAchievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    {
      title: 'Hackathon Finalist',
      description: 'Selected as a finalist in a national-level hackathon, building an AI-based safety tool.',
      platform: 'Smart India Hackathon',
      rating: 5,
      image: img1,
      startDate: 'Feb 2024',
      endDate: 'Mar 2024',
    },
    {
      title: 'Top Performer - DSA Track',
      description: 'Recognized as a top performer in the university’s DSA summer camp.',
      platform: 'LPU',
      rating: 4,
      image: '/achievements/dsa-topper.jpg',
      startDate: 'Jun 2023',
      endDate: 'Jul 2023',
    },
    {
      title: 'Quiz Competition Gold Medalist',
      description: 'Won first place in an inter-school general knowledge quiz.',
      platform: 'XYZ Public School',
      rating: 5,
      image: '/achievements/quiz-winner.jpg',
      startDate: 'Oct 2022',
      endDate: 'Oct 2022',
    },
  ];

  return (
    <section className="my-achievements">
      <h2>My Achievements</h2>
      <div className="underline"></div>

      <div className="achievements-list">
        {achievements.map((ach, index) => (
          <div className="achievement-item" key={index}>
            <div className="ach-description">
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
              <p><strong>Platform:</strong> {ach.platform}</p>
              <p><strong>Duration:</strong> {ach.startDate} - {ach.endDate}</p>
              <div className="stars">
                {[...Array(ach.rating)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                {[...Array(5 - ach.rating)].map((_, i) => (
                  <i className="far fa-star" key={i}></i>
                ))}
              </div>
            </div>
            <div className="ach-image" onClick={() => setSelectedImage(ach.image)}>
              <img src={ach.image} alt={ach.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fullscreen-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Achievement" />
        </div>
      )}
    </section>
  );
};

export default MyAchievements;
