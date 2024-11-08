import React from 'react';
import './App.css';
import NavBar from './assets/components/NavBar';
import Main from './assets/components/main/Main';
import AboutSection from './assets/components/About/AboutSection';
import Skill from './assets/components/skills/Skill'
import Project from './assets/components/project/Project';
import Contact from './assets/components/contact/Contact';


function App() {
  const handleCopy = (e) => {
    e.preventDefault();
    alert('Dont try to steal my poor content 😂');
  }

  return (
    <div className="app no-select" onCopy={handleCopy}>
      <NavBar />
      <Main />
      <AboutSection />
      <Skill/>
      <Project />
      <Contact />
    </div>
  );
}

export default App;

