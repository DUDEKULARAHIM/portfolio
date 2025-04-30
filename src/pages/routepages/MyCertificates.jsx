
// import React, { useState } from 'react';
// import '../styles/myCertificates.css';
// import img1 from "../assets/img1.jpeg";

// const MyCertificates = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const certificates = [
//     {
//       title: 'React Development Certificate',
//       description: 'Completed a comprehensive course in React development, building multiple real-world projects.',
//       platform: 'Coursera',
//       rating: 5,
//       image: img1,
//     },
//     {
//       title: 'JavaScript Mastery',
//       description: 'Mastered JavaScript fundamentals and advanced topics with hands-on coding challenges.',
//       platform: 'Udemy',
//       rating: 4,
//       image: '/certificates/js-cert.jpg',
//     },
//     {
//       title: 'Data Structures & Algorithms',
//       description: 'Excelled in DSA concepts and problem-solving, completing over 100+ coding exercises.',
//       platform: 'HackerRank',
//       rating: 5,
//       image: '/certificates/dsa-cert.jpg',
//     },
//   ];

//   return (
//     <section className="my-certificates">
//       <h2>My Certificates</h2>
//       <div className="underline"></div>

//       <div className="certificates-list">
//         {certificates.map((cert, index) => (
//           <div className="certificate-item" key={index}>
//             <div className="cert-description">
//               <h3>{cert.title}</h3>
//               <p>{cert.description}</p>
//               <p><strong>Platform:</strong> {cert.platform}</p>
//               <div className="stars">
//                 {[...Array(cert.rating)].map((_, i) => (
//                   <i className="fas fa-star" key={i}></i>
//                 ))}
//                 {[...Array(5 - cert.rating)].map((_, i) => (
//                   <i className="far fa-star" key={i}></i>
//                 ))}
//               </div>
//             </div>
//             <div className="cert-image" onClick={() => setSelectedImage(cert.image)}>
//               <img src={cert.image} alt={cert.title} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Fullscreen Modal */}
//       {selectedImage && (
//         <div className="fullscreen-modal" onClick={() => setSelectedImage(null)}>
//           <img src={selectedImage} alt="Full Certificate" />
//         </div>
//       )}
//     </section>
//   );
// };

// export default MyCertificates;
















import React, { useState } from 'react';
import '../../styles/myCertificates.css';
// import img1 from "..assets/img1.jpeg";
// import img1 from "../../assets/img1.jpeg";
import cert1 from "../../assets/htmlcssjs-jpgimg.jpg"
import cert2 from "../../assets/serversidescripting-jpgimg.jpg"
import cert3 from "../../assets/neocoladcertificate1.jpg"
import cert4 from "../../assets/neocoladcertificate2.jpg"

const MyCertificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: 'HTML CSS JS for Frontend Develpoer',
      description: 'Completed a comprehensive course in frontend development, building multiple real-world projects.',
      platform: 'Coursera',
      rating: 5,
      image: cert1,
      startDate: 'Jan 2024',
      endDate: 'Mar 2024',
    },
    {
      title: 'JavaScript Mastery',
      description: 'Mastered JavaScript fundamentals and advanced topics with hands-on coding challenges.',
      platform: 'Udemy',
      rating: 4,
      image: cert2,
      startDate: 'Sep 2023',
      endDate: 'Dec 2023',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Excelled in DSA concepts and problem-solving, completing over 100+ coding exercises.',
      platform: 'NeoColab',
      rating: 4,
      image: cert3,
      startDate: 'May 2023',
      endDate: 'Aug 2023',
    },
    {
      title: 'Object Oriented Programmin Using C++',
      description: 'Excelled in OOPS concepts and problem-solving, completing over 100+ coding exercises.',
      platform: 'NeoColab',
      rating: 4,
      image: cert4,
      startDate: 'May 2023',
      endDate: 'Aug 2023',
    },
  ];

  return (
    <section className="my-certificates">
      <h2>My Certificates</h2>
      <div className="underline"></div>

      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <div className="certificate-item" key={index}>
            <div className="cert-description">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <p><strong>Platform:</strong> {cert.platform}</p>
              <p><strong>Duration:</strong> {cert.startDate} - {cert.endDate}</p>
              <div className="stars">
                {[...Array(cert.rating)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
                {[...Array(5 - cert.rating)].map((_, i) => (
                  <i className="far fa-star" key={i}></i>
                ))}
              </div>
            </div>
            <div className="cert-image" onClick={() => setSelectedImage(cert.image)}>
              <img src={cert.image} alt={cert.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fullscreen-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Certificate" />
        </div>
      )}
    </section>
  );
};

export default MyCertificates;
