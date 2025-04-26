import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import ProjectsCarousel from "./components/ProjectsCarousel";
import VideoCV from "./components/VideoCV";
import AboutPage from "./pages/AboutUs";
// import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/Projects";
// import TechSkills from "./pages/TechSkills";
// import NonTechSkills from "./pages/NonTechSkills";
import Certificates from "./pages/routepages/MyCertificates";
 import Achievements from "./pages/routepages/MyAchievements";
import Myskills from "./pages/routepages/Allskills";
import Contributions from "./pages/routepages/ContactUs";
import RecentContributions from "./pages/RecentContributions";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              {/* <ProjectsCarousel /> */}
              <RecentContributions />
              {/* <VideoCV /> */}
              <Footer />
            </>
          }
        />
        { 
        <>
          <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
      
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectDetails />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contributions" element={<Contributions />} />
        // <Route path="/skills" element={<Myskills />} />

        </>
        // <Route path="/tech-skills" element={<TechSkills />} />
        // <Route path="/non-tech-skills" element={<NonTechSkills />} />
        // <Route path="/certificates" element={<Certificates />} />
        // <Route path="/achievements" element={<Achievements />} />
        // <Route path="/blogs" element={<Blogs />} />
        // <Route path="/contributions" element={<Contributions />} />
         }
      </Routes>
    </Router>
  );
}

export default App;





