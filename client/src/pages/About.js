import React from "react";
import "./About.css";
import bgImage from "../assets/introani.png";
import uniLogo from "../assets/university.png";
import collegeLogo from "../assets/college.png";
import schoolLogo from "../assets/school.png";
import summaryIcon from "../assets/summary.png";
import detailsIcon from "../assets/details.png";
import educationIcon from "../assets/education.png";

const About = () => {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="about-content">
        {/* Brief Summary */}
        <section className="about-section card">
          <div className="section-header">
            <img
              src={summaryIcon}
              alt="Summary Icon"
              className="section-icon"
            />
            <h2>BRIEF SUMMARY</h2>
          </div>
          <p>
            To work in a firm with a professional work-driven environment where
            I can utilise my knowledge, which would enable me, as a fresh
            graduate, to grow while fulfilling organisational goals.
          </p>
        </section>

        {/* Personal Details */}
        <section className="about-section card">
          <div className="section-header">
            <img
              src={detailsIcon}
              alt="Details Icon"
              className="section-icon"
            />
            <h2>PERSONAL DETAILS</h2>
          </div>
          <ul>
            <li>
              <strong>Name:</strong> Bhadriraju Pramodaki
            </li>
            <li>
              <strong>Location:</strong> Visakhapatnam, Andhra Pradesh
            </li>
            <li>
              <strong>Email:</strong> pramodakib@gmail.com
            </li>
            <li>
              <strong>Gender:</strong> Female
            </li>
            <li>
              <strong>Date Of Birth:</strong> December 1st 2006
            </li>
            <li>
              <strong>Languages Known:</strong> Telugu, Hindi, English
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="about-section card">
          <div className="section-header">
            <img
              src={educationIcon}
              alt="Education Icon"
              className="section-icon"
            />
            <h2>EDUCATION</h2>
          </div>

          {/* University */}
          <div className="education-item">
            <div className="edu-left">
              <img src={uniLogo} alt="University Logo" className="uni-logo" />
            </div>
            <div className="edu-right">
              <p>
                <strong>
                  Andhra University College of Engineering (A), Visakhapatnam
                </strong>
              </p>
              <p>Year of Study: 2023 - 2027</p>
              <p>
                B.Tech: Computer Science and Systems Engineering | CGPA: 7.91/10
                (Up to 3rd Semester)
              </p>
            </div>
          </div>

          {/* Junior College */}
          <div className="education-item">
            <div className="edu-left">
              <img src={collegeLogo} alt="College Logo" className="uni-logo" />
            </div>
            <div className="edu-right">
              <p>
                <strong>Narayana Junior College, Visakhapatnam</strong>
              </p>
              <p>Year of Study: 2023</p>
              <p>12th | BIEAP | Percentage: 84.00/100</p>
            </div>
          </div>

          {/* High School */}
          <div className="education-item">
            <div className="edu-left">
              <img src={schoolLogo} alt="School Logo" className="uni-logo" />
            </div>
            <div className="edu-right">
              <p>
                <strong>S.F.S. High School, Visakhapatnam</strong>
              </p>
              <p>Year of Study: 2021</p>
              <p>10th | SSC | CGPA: 9.7/10</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
