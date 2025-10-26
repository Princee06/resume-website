import React from "react";
import "./internships.css";
import bgImage from "../assets/introani.png";

const Internships = () => {
  return (
    <div
      className="internship-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="internship-content card">
        <h1>INTERNSHIPS</h1>
        <p>
          My internship journey is currently ongoing. I’m actively learning,
          exploring new technologies, and gaining hands-on experience to enhance
          my practical skills.
        </p>

        <div className="status-glow">
          <span className="dot"></span>
          Internship in Progress...
        </div>
      </div>
    </div>
  );
};

export default Internships;
