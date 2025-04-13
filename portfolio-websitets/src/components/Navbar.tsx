// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/about">Ben Zabihi</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/interests">Interests</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/social-media">Social Media</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
