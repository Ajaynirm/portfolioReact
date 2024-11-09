// src/components/NavBar.js
import React, { useState } from "react";
import "./navbar.css";
import DarkMode from "./DarkMode";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const triggerSideMenu = () => {setIsOpen(!isOpen)};

  return (
    <>
      <div className="nav_container">
        <div className="logo">AJAY C</div>
        <div className="nav_btns">
          <button className="nav_btn">
            <a href="#about">About</a>
          </button>
          <button className="nav_btn">
            <a href="#experience">Experience</a>
          </button>
          <button className="nav_btn">
            <a href="#projects">Projects</a>
          </button>
          <button className="nav_btn">
            <a href="#contact">Contact</a>
          </button>
        </div>

        <div className="dark_mode">
          <div className="dark_btn">
            <DarkMode />
          </div>

          <div className='hamburg_icon'> 
               <div className="hamburg_icon" onClick={() => triggerSideMenu()}>
            <FiMenu />
            {isOpen ?  
             <div className="pseudo-container">
             <div><a href="#about">about</a></div>
             <div><a href="#experience">experience</a></div>
             <div><a href="#projects">project</a></div>
             <div><a href="#contact">contact</a></div>
             </div>
            
            : <div></div> }
           
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
