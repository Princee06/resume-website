import React from "react";
import "./contact.css";
import bgImage from "../assets/introani.png";

const Contact = () => {
  return (
    <div
      className="contact-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="contact-content card">
        <h1>CONTACT</h1>
        <p>
          I’m always open to connecting for opportunities, collaborations, or
          discussions about technology and innovation. Feel free to reach out!
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">Gmail: </span>
            <a href="mailto:pramodakib@gmail.com">pramodakib@gmail.com</a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/pramodaki-bhadriraju/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/pramodaki-bhadriraju
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">GitHub: </span>
            <a
              href="https://github.com/Princee06"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Princee06
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">Phone Number: </span>
            <p>+91 8688186537</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
