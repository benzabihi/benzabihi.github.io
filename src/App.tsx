import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
