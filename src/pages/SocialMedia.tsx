// src/pages/SocialMedia.tsx
import React from "react";
import "./SocialMedia.css";

const SocialMedia: React.FC = () => {
  return (
    <div className="socialmedia-container">
      <h1>Connect with Me on Social Media</h1>
      <div className="social-item">
        <h2>LinkedIn</h2>
        <a
          href="https://www.linkedin.com/in/benzabihi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my LinkedIn profile
        </a>
      </div>
      <div className="social-item">
        <h2>GitHub</h2>
        <a
          href="https://github.com/benzabihi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub profile
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
