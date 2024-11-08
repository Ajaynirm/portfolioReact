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

    </>
  );
};

export default NavBar;
