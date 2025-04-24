// import React, { useState, useEffect } from 'react';
// import '../styles/carousel.css';
// import img1 from '../assets/img1.jpeg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img1.jpeg'; // Add more images if needed

// const ProjectsCarousel = () => {
//   const images = [img1, img2, img3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Auto-scroll every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <section className="carousel">
//       <h2>My Projects</h2>
//       <div className="underline"></div>

//       <div className="carousel-container">
//         <button className="carousel-button prev" onClick={prevSlide}>
//           &#8592;
//         </button>
//         <div className="carousel-slide">
//           <img src={images[currentIndex]} alt={`Project ${currentIndex + 1}`} />
//         </div>
//         <button className="carousel-button next" onClick={nextSlide}>
//           &#8594;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ProjectsCarousel;



// import React from 'react';
// import '../styles/carousel.css';
// import img1 from '../assets/img1.jpeg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img1.jpeg'; // Add more images if needed

// const images = [img1, img2, img3];

// const ProjectsCarousel = () => {
//   return (
//     <section className="carousel">
//       <h2>My Projects</h2>
//       <div className="underline"></div>

//       <div className="marquee-container">
//         <div className="marquee-track">
//           {[...images, ...images].map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Project ${index + 1}`}
//               className="marquee-image fade"
//               loading="lazy"
//               draggable="false"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsCarousel;










import React from 'react';
import '../styles/carousel.css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img1.jpeg'; // Add more images if needed

const images = [
  { src: img1, seeMore: '/project1', github: 'https://github.com/user/project1' },
  { src: img2, seeMore: '/project2', github: 'https://github.com/user/project2' },
  { src: img3, seeMore: '/project3', github: 'https://github.com/user/project3' },
];

const ProjectsCarousel = () => {
  return (
    <section className="carousel">
      <h2>My Projects</h2>
      <div className="underline"></div>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...images, ...images].map((img, index) => (
            <div className="marquee-card" key={index}>
              <div>
                <p>project<span>1</span></p>
                </div>
              <img
                src={img.src}
                alt={`Project ${index + 1}`}
                className="marquee-image fade"
                loading="lazy"
                draggable="false"
              />
              <div className="button-group">
                <a href={img.seeMore} className="btn see-more" target="_blank" rel="noopener noreferrer">See More</a>
                <a href={img.github} className="btn live-demo" target="_blank" rel="noopener noreferrer">GitHub Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
