import React from "react";
import "./skill.css";
import bgImage from "../assets/introani.png";

const Skill = () => {
  return (
    <div
      className="skill-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay"></div>
      <div className="skill-content">
        <section className="skill-section card">
          <div className="section-header">
            <span className="section-bullet"></span>
            <h2>PROGRAMMING LANGUAGES</h2>
          </div>
          <p>Python, Java, JavaScript, HTML, CSS</p>
        </section>

        <section className="skill-section card">
          <div className="section-header">
            <span className="section-bullet"></span>
            <h2>AI/ML FUNDAMENTALS</h2>
          </div>
          <p>
            Machine Learning Algorithms, Data Preprocessing, Model Evaluation
          </p>
        </section>

        <section className="skill-section card">
          <div className="section-header">
            <span className="section-bullet"></span>
            <h2>WEB DEVELOPMENT</h2>
          </div>
          <p>Front-end Design, Responsive UI, REST API Integration</p>
        </section>

        <section className="skill-section card">
          <div className="section-header">
            <span className="section-bullet"></span>
            <h2>DATA HANDLING</h2>
          </div>
          <p>Data Cleaning, Pandas, NumPy, SQL Basics</p>
        </section>

        <section className="skill-section card">
          <div className="section-header">
            <span className="section-bullet"></span>
            <h2>SOFTWARE ENGINEERING</h2>
          </div>
          <p>Object-Oriented Design, Version Control (Git/GitHub)</p>
        </section>

        <section className="skill-section card">
          <div className="section-header">
            <span className="section-bullet"></span>
            <h2>PROBLEM SOLVING</h2>
          </div>
          <p>
            Algorithmic Thinking, Debugging, Optimization, Communication Skills
          </p>
        </section>
      </div>
    </div>
  );
};

export default Skill;
