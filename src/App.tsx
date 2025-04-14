// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";
import SocialMedia from "./pages/SocialMedia";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
