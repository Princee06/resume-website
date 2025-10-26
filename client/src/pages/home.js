import React from "react";
import "./home.css";
import backgroundImage from "../assets/introani.png"; // background image
import universityLogo from "../assets/university.png"; // optional
import profileImage from "../assets/pramodaki.png"; // optional
import resumePDF from "../assets/resume.pdf"; // your resume file

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Left Section - University Logo */}
      <div className="home-left">
        {universityLogo && (
          <img
            src={universityLogo}
            alt="University Logo"
            className="university-logo"
          />
        )}
      </div>

      {/* Center Section - Introduction Text */}
      <div className="home-center">
        <h1 className="intro-title">
          Hello! I am{" "}
          <span className="name-highlight">BHADRIRAJU PRAMODAKI</span>
        </h1>
        <p className="intro-sub">
          I am a third-year Computer Science and Systems Engineering student. I
          am studying in Andhra university college of Engineering. I am
          passionate about AI/ML, coding, and building projects that make an
          impact.
        </p>
      </div>

      {/* Right Section - Profile & Resume Buttons */}
      <div className="home-right">
        {profileImage && (
          <img src={profileImage} alt="Profile" className="profile-image" />
        )}

        <div className="resume-buttons">
          {resumePDF && (
            <>
              <a href={resumePDF} download className="resume-button">
                Download Resume
              </a>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button view-btn"
              >
                View Resume
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
