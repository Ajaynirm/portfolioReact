import React, { useState } from 'react';
import './App.css';
import NavBar from './src/NavBar';
import Main from './src/main/Main';
import AboutSection from './src/About/AboutSection';
import Skill from './src/skills/Skill'
import Project from './src/project/Project';
import Contact from './src/contact/Contact';
import Footer from './src/Footer';


function App() {
  const handleCopy = (e) => {
    e.preventDefault();
    alert('Dont try to steal my poor content 😂');
  }
  

  return (
    <>
    
    <div className="app no-select" onCopy={handleCopy}>
     
      <NavBar />
      <Main />
      <AboutSection />
      <Skill/>
      <Project />
      <Contact />
      <Footer />
    </div>
    </>
  );

}

export default App;

