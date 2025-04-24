
// import React from 'react';
// import '../styles/knownLanguages.css';

// const KnownLanguages = () => {
//   const languages = [
//     { name: 'Telugu', icon: 'fas fa-language' },
//     { name: 'Hindi', icon: 'fas fa-language' },
//     { name: 'Tamil', icon: 'fas fa-language' },
//     { name: 'Kannada', icon: 'fas fa-language' },
//   ];

//   return (
//     <section className="known-languages-section">
//       <h2>Known Languages</h2>
//       <div className="underline"></div>

//       <div className="languages-grid">
//         {languages.map((lang, index) => (
//           <div className="language-card" key={index}>
//             <i className={lang.icon}></i>
//             <p>{lang.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default KnownLanguages;













import React from 'react';
import '../styles/knownLanguages.css';

const KnownLanguages = () => {
  const languages = [
    { name: 'Telugu', icon: 'fas fa-language' },
    { name: 'Hindi', icon: 'fas fa-language' },
    { name: 'English', icon: 'fas fa-language' },
    // { name: 'Tamil', icon: 'fas fa-language' },
    // { name: 'Kannada', icon: 'fas fa-language' },
  ];

  return (
    <section className="known-languages-section">
      <h2>Known Languages</h2>
      <div className="known-underline"></div>

      <div className="languages-buttons">
        {languages.map((lang, index) => (
          <button key={index} className="language-button">
            <i className={lang.icon}></i>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default KnownLanguages;
