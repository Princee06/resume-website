import React, { useEffect, useState } from "react";
import "./introanimation.css";
import introBackground from "../assets/introani.png"; // Make sure filename is correct

const IntroAnimation = ({ onAnimationComplete }) => {
  const [highlightPB, setHighlightPB] = useState(false);
  const [fadeText, setFadeText] = useState(false);

  useEffect(() => {
    // Step 1: Highlight P & B after 1.5s
    const highlightTimer = setTimeout(() => setHighlightPB(true), 1500);

    // Step 2: Fade out entire text after 3s
    const fadeTimer = setTimeout(() => setFadeText(true), 3000);

    // Step 3: Trigger Navbar display after fade out completes
    const navbarTimer = setTimeout(() => onAnimationComplete(), 3800);

    return () => {
      clearTimeout(highlightTimer);
      clearTimeout(fadeTimer);
      clearTimeout(navbarTimer);
    };
  }, [onAnimationComplete]);

  const letters = "PRAMODAKI  BHADRIRAJU".split("");

  return (
    <div
      className="intro-animation-container"
      style={{
        background: `url(${introBackground}) no-repeat center center / cover`,
      }}
    >
      <div className={`intro-text ${fadeText ? "fade-out" : ""}`}>
        {letters.map((letter, index) => {
          const isPB = letter === "P" || letter === "B";
          return (
            <span
              key={index}
              className={isPB && highlightPB ? "highlight" : ""}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default IntroAnimation;
