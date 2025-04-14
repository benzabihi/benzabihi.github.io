// src/pages/Interests.tsx
import React from "react";
import "./Interests.css";

const Interests: React.FC = () => {
  return (
    <div className="interests-container">
      <h1>Interests & Extracurricular Activities</h1>
      <div className="interest-item">
        <h2>StandWithUs</h2>
        <img
          src="/images/StandWithUs"
          alt="StandWithUs"
          className="StandWithUs"
        />
        <p></p>
      </div>
      <div className="interest-item">
        <h2>Traveling</h2>
        <img src="/images/" alt="Traveling" className="interest-image" />
        <p></p>
      </div>
      <div className="interest-item">
        <h2>Sports</h2>
        <img src="/images/Sports.jpg" alt="Sports" className="interest-image" />
        <p></p>
      </div>
    </div>
  );
};

export default Interests;
