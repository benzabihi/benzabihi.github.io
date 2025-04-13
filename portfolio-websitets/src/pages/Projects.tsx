// src/pages/Projects.tsx
import React from "react";
import "./Projects.css";

// Import images for each project (adjust the file names if needed)
// import bookwyrmImg from "../images/bookwyrm.jpg";
// import gamehubImg from "../images/gamehub.jpg";
// import fiveStageProcessorImg from "../images/five-stage-processor.jpg";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Academic & Professional Projects</h1>

      <div className="project-item">
        <h2>Bookwyrm</h2>
        <img src="{bookwyrmImg}" alt="Bookwyrm" className="project-image" />
        <p>
          Bookwyrm is a comprehensive platform designed for book enthusiasts to
          discover, review, and share literature. This project brings together a
          user-friendly interface and robust backend support to manage an
          extensive collection of books and reviews. Bookwyrm integrates social
          networking features, allowing users to follow each other, participate
          in discussion forums, and join virtual reading groups. This
          application reflects my commitment to creating interactive experiences
          that merge functional design with modern web technologies.
        </p>
        <a
          href="https://example.com/bookwyrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Bookwyrm
        </a>
      </div>

      <div className="project-item">
        <h2>Gamehub</h2>
        <img src="{gamehubImg}" alt="Gamehub" className="project-image" />
        <p>
          Gamehub is an innovative web application aimed at serving as a central
          hub for gaming enthusiasts. This project allows users to track gaming
          progress, receive personalized recommendations, and access community
          features such as forums and leaderboard rankings. Gamehub showcases my
          ability to design dynamic user interfaces and build interactive,
          data-driven applications. Its functionality enhances the gaming
          experience by combining real-time analytics with social interactivity.
        </p>
        <a
          href="https://example.com/gamehub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Gamehub
        </a>
      </div>

      <div className="project-item">
        <h2>5 Stage Processor</h2>
        <img
          src="{fiveStageProcessorImg}"
          alt="5 Stage Processor"
          className="project-image"
        />
        <p>
          The 5 Stage Processor project is a technical exploration into computer
          architecture, simulating a multi-stage instruction pipeline commonly
          found in modern processors. This project demonstrates the flow of data
          through distinct stages—fetch, decode, execute, memory access, and
          write-back—illustrating how instructions are processed in a concurrent
          and efficient manner. The implementation addresses performance
          optimizations and includes a detailed explanation of pipeline hazards
          and resolution techniques. It serves not only as an academic exercise
          but also as a testament to my technical problem-solving skills.
        </p>
        <a
          href="https://example.com/5stageprocessor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the 5 Stage Processor
        </a>
      </div>
    </div>
  );
};

export default Projects;
