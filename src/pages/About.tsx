// src/pages/About.tsx
import React from "react";
import "./About.css";
import professionalPhoto from "../images/profphoto.jpeg";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hello and welcome! I'm delighted to have you explore my professional
          portfolio. My journey in the world of technology has been both
          enriching and transformative. I embarked on this adventure several
          years ago, driven by an innate passion for solving complex problems
          through innovative solutions. Over time, I have honed my skills in
          both design and development, becoming proficient in a variety of
          modern web technologies.
        </p>
        <p>
          Beyond my technical expertise, I have developed a deep understanding
          of how to communicate ideas effectively to different audiences.
          Whether I'm collaborating with fellow developers, engaging with
          creative teams, or presenting project insights to clients, I adapt my
          approach to ensure clarity and impact. This portfolio is a curated
          showcase of my work, highlighting not only my technical projects but
          also my extracurricular interests and professional experiences that
          continue to inspire me.
        </p>
        <p>
          In creating this portfolio, my primary goal is to present an authentic
          narrative of my career and personal development. I believe that my
          dedication to continuous learning and my commitment to quality are
          among the strongest indicators of my suitability for any challenging
          project. This platform is designed to be a reflection of my identity –
          a blend of analytical precision and creative exploration. Visitors
          will find a balanced mix of professional accomplishments, innovative
          projects, and insights into my academic and extracurricular ventures.
        </p>
        <p>
          As you navigate through my portfolio, you will discover detailed
          accounts of my academic projects, industry experiences, and the
          personal pursuits that fuel my creativity. My philosophy is centered
          on the importance of balancing technical proficiency with personal
          growth. I invite you to explore each section to learn more about my
          background, expertise, and the innovative spirit that drives my
          professional journey.
        </p>
      </div>
      <div className="about-images">
        <img
          src={professionalPhoto}
          alt="Professional Portrait"
          className="profile-image"
        />
        <img
          src="/images/interests.jpg"
          alt="Representative of My Interests"
          className="interest-image"
        />
      </div>
    </div>
  );
};

export default About;
