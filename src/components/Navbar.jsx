
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">🚀 Code. Create. Conquer.</div>
//       <div className="navbar-right">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/resume">Resume</NavLink>
//         <div className="dropdown">
//           <span>More</span>
//           <div className="dropdown-content">
//             <NavLink to="/tech-skills">Tech Skills</NavLink>
//             <NavLink to="/non-tech-skills">Non-Tech Skills</NavLink>
//             <NavLink to="/certificates">Certificates</NavLink>
//             <NavLink to="/achievements">Achievements</NavLink>
//             <NavLink to="/blogs">Blogs</NavLink>
//             <NavLink to="/contributions">Recent Contributions</NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">🚀 Code. Create. Conquer.</div>

//       {/* Hamburger menu for smaller screens */}
//       <div className="hamburger-menu" onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>

//       <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/resume">Resume</NavLink>
        
//         {/* Dropdown for "More" */}
//         <div className="dropdown">
//           <span>More</span>
//           <div className="dropdown-content">
//             <NavLink to="/tech-skills">Tech Skills</NavLink>
//             <NavLink to="/non-tech-skills">Non-Tech Skills</NavLink>
//             <NavLink to="/certificates">Certificates</NavLink>
//             <NavLink to="/achievements">Achievements</NavLink>
//             <NavLink to="/blogs">Blogs</NavLink>
//             <NavLink to="/contributions">Recent Contributions</NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



















// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">🚀 Code. Conquer.</div>

//       {/* Hamburger icon */}
//       <div className="hamburger-menu" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           About Us
//         </NavLink>
//         <NavLink
//           to="/projects"
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           Projects
//         </NavLink>
//         <NavLink
//           to="/resume"
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           Resume
//         </NavLink>

//         {/* Dropdown menu */}
//         <div className="dropdown">
//           <span className="dropdown-toggle">More</span>
//           <div className="dropdown-content">
//             <NavLink to="/tech-skills">Tech Skills</NavLink>
//             <NavLink to="/non-tech-skills">Non-Tech Skills</NavLink>
//             <NavLink to="/certificates">Certificates</NavLink>
//             <NavLink to="/achievements">Achievements</NavLink>
//             <NavLink to="/blogs">Blogs</NavLink>
//             <NavLink to="/contributions">Recent Contributions</NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




























// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">🚀 Code. Conquer.</div>

//       {/* Hamburger icon */}
//       <div className="hamburger-menu" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
//         <NavLink
//           to="/"
//           onClick={closeMenu}
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           onClick={closeMenu}
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           About Us
//         </NavLink>
//         <NavLink
//           to="/projects"
//           onClick={closeMenu}
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           Projects
//         </NavLink>
//         <NavLink
//           to="/resume"
//           onClick={closeMenu}
//           className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
//         >
//           Resume
//         </NavLink>

//         {/* Dropdown menu */}
//         <div className="dropdown">
//           <span className="dropdown-toggle">More</span>
//           <div className="dropdown-content">
//             <NavLink to="/tech-skills" onClick={closeMenu}>Tech Skills</NavLink>
//             <NavLink to="/non-tech-skills" onClick={closeMenu}>Non-Tech Skills</NavLink>
//             <NavLink to="/certificates" onClick={closeMenu}>Certificates</NavLink>
//             <NavLink to="/achievements" onClick={closeMenu}>Achievements</NavLink>
//             <NavLink to="/blogs" onClick={closeMenu}>Blogs</NavLink>
//             <NavLink to="/contributions" onClick={closeMenu}>Recent Contributions</NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

















import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {location.pathname === '/' ? '🚀 Code. Conquer.' : 'Dudekula Rahim'}
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          About Us
        </NavLink>
        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Resume
        </NavLink>

        <div className="dropdown">
          <span className="dropdown-toggle">More</span>
          <div className="dropdown-content">
            {/* <NavLink to="/tech-skills" onClick={closeMenu}>Tech Skills</NavLink>
            <NavLink to="/non-tech-skills" onClick={closeMenu}>Non-Tech Skills</NavLink> */}
            <NavLink to="/certificates" onClick={closeMenu}>Certificates</NavLink>
            <NavLink to="/achievements" onClick={closeMenu}>Achievements</NavLink>
            <NavLink to="/blogs" onClick={closeMenu}>Blogs</NavLink>
            <NavLink to="/contributions" onClick={closeMenu}>COntact Us</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
