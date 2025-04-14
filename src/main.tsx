// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom"; // Using HashRouter for GitHub Pages
import App from "./App";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
