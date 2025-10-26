import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import IntroAnimation from "./components/introanimation";
import Home from "./pages/home";
import About from "./pages/About";
import Skill from "./pages/skill";
import Projects from "./pages/projects";
import Internships from "./pages/internships";
import Contact from "./pages/contact";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro ? (
        <IntroAnimation onAnimationComplete={() => setShowIntro(false)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
