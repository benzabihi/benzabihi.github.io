// src/pages/Resume.tsx
import React from "react";
import "./Resume.css";
// Import the resume PDF from the src folder
import resumePDF from "../images/resumeBZ.pdf";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <div className="resume-embed">
        <object
          data={resumePDF}
          type="application/pdf"
          width="100%"
          height="600"
        >
          <p>
            It appears you don’t have a PDF plugin for this browser. You can{" "}
            <a href={resumePDF}>download the PDF file here</a>.
          </p>
        </object>
      </div>
    </div>
  );
};

export default Resume;
