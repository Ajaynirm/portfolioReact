// src/components/NavBar.js
import React, { useState } from 'react';
import "./navbar.css";
import DarkMode from './DarkMode';
import Hamburger from './Hamburger';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='nav_container'>
      
        <div className="logo">AJAY C</div>
        <div className='nav_btns'>
          <button className='nav_btn'><a href="#about">About</a></button>
          <button className='nav_btn'><a href="#experience">Experience</a></button>
          <button className='nav_btn'><a href="#projects">Projects</a></button>
          <button className='nav_btn'><a href="#contact">Contact</a></button>
        </div>
         
      <div className='dark_mode'>
      <DarkMode />
      <div className='hamburg_icon'>
        <Hamburger />
      </div>
      </div>
      
       
      </div>
     
      <nav className="hamburger-nav">
        <div className="logo">AJAY C</div>
        <div className="hamburger-menu" onCdivck={toggleMenu}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {isOpen && (
          <div className="menu-divnks">
            <div><a href="#about" onCdivck={toggleMenu}>About</a></div>
            <div><a href="#experience" onCdivck={toggleMenu}>Experience</a></div>
            <div><a href="#projects" onCdivck={toggleMenu}>Projects</a></div>
            <div><a href="#contact" onCdivck={toggleMenu}>Contact</a></div>
          </div>
        )}
      </nav>

    </>
  );
};

export default NavBar;
