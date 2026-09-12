import { useState, useEffect } from "react";

import "./styles/App.css";
import cvData from "./data/cvData";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import References from "./components/References";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(true);

  useEffect(() => {
  document.title = "Tiisetso Rannyama | CV";
}, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header name={cvData.name} title={cvData.title} />

      <div className="controls">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? "Hide Skills" : "Show Skills"}
        </button>

        <button onClick={() => window.print()}>
          🖨️ Print CV
        </button>
      </div>

      <Profile profile={cvData.profile} />
      <Education education={cvData.education} />

      {showSkills && <Skills skills={cvData.skills} />}

      <Experience experience={cvData.experience} />
      <Projects projects={cvData.projects} />
      <References references={cvData.references} />
      <Contact contact={cvData.contact} />
      <Footer />
    </div>
  );
}

export default App;