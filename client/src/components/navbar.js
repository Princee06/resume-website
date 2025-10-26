import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom"; // ✅ correct import

const Navbar = () => {
  const handlePBClick = () => {
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      {/* PB Logo */}
      <div className="navbar-left" onClick={handlePBClick}>
        <span className="pb-box">PB</span>
      </div>

      {/* Navigation Links */}
      <div className="navbar-right">
        <Link to="/about">ABOUT</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/internships">INTERNSHIPS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
