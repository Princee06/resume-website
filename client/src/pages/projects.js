import React, { useState } from "react";
import "./projects.css";
import bgImage from "../assets/introani.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div
      className="projects-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="projects-content">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            PROJECTS
          </button>
          <button
            className={`tab-btn ${activeTab === "papers" ? "active" : ""}`}
            onClick={() => setActiveTab("papers")}
          >
            TECHNICAL PAPERS
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "projects" && (
            <div className="projects-section">
              <div className="project-card">
                <h2>RENALEASE</h2>
                <p>
                  A personal project aimed at assisting Chronic Kidney Disease
                  patients with health tracking, dialysis schedules, and
                  medication reminders.
                </p>
                <p>
                  <strong>Status:</strong> Ongoing
                </p>
              </div>

              <div className="project-card">
                <h2>CHATTERBOT</h2>
                <p>
                  A team project to build a multilingual chatbot using IndicBERT
                  and IndicTrans2 models to support native language interaction
                  and summarization.
                </p>
                <p>
                  <strong>Status:</strong> Ongoing
                </p>
              </div>

              <div className="project-card">
                <h2>RESUME WEBSITE</h2>
                <p>
                  A personal portfolio website built with React.js showcasing
                  skills, projects, and experience with elegant UI animations.
                </p>
                <p>
                  <strong>Status:</strong> Completed
                </p>
              </div>

              <div className="project-card">
                <h2>PYTHON LAB GISTS</h2>
                <p>
                  Small Python programs and experiments shared via GitHub Gists
                  to demonstrate problem-solving and coding practices.
                </p>
                <a
                  href="https://gist.github.com/Princee06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Gists
                </a>
              </div>
            </div>
          )}

          {activeTab === "papers" && (
            <div className="projects-section">
              <div className="project-card">
                <h2>
                  GAMIFIED PLATFORM TO PROMOTE SUSTAINABLE FARMING PRACTICES
                </h2>
                <p>
                  A technical paper proposing a gamified approach to improve
                  awareness and adoption of sustainable farming techniques among
                  rural farmers.
                </p>
                <p>
                  <strong>Status:</strong> Under Faculty Review
                </p>
                <p>
                  <strong>Publication:</strong> To be updated post approval.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
