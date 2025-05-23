
// import React, { useState, useEffect } from 'react';
// import '../styles/hero.css';

// const texts = ["a Full Stack Developer", "a Web Developer", "a Coder"];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero">
//       <h1>Hi, I'm Dudekula Rahim</h1>
//       <h2>I am <span className="dynamic-text">{texts[index]}</span></h2>
//       <p>Fun & Code | Passionate about creating amazing things!</p>
//     </div>
//   );
// };

// export default Hero;






import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/hero.css';

const texts = ["a Full Stack Developer", "a Web Developer", "a Coder"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // Use navigate instead of history

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRedirect = (path) => {
    navigate(path); // Use navigate to redirect
  };

  return (
    <div className="hero">
      <h1>Hi, I'm Dudekula Rahim</h1>
      <h2>I am <span className="dynamic-text">{texts[index]}</span></h2>
      <p>Fun & Code | Passionate about creating amazing things!</p>

      <div className="hero-buttons">
        <button onClick={() => handleRedirect('/about')} className="hero-button">More About Me</button>
        <button onClick={() => handleRedirect('/resume')} className="hero-button">See My Resume</button>
      </div>
    </div>
  );
};

export default Hero;

