import React, { useState } from 'react'
import { MdOutlineDarkMode,MdDarkMode } from "react-icons/md";

const DarkMode = () => {

  const [darkmode,setdarkmode] = useState(false);
    const changeMode = () => {
        setdarkmode(!darkmode);
        toggleDarkMode();
    }

    const setDarkMode = () => {
      document.querySelector("body").setAttribute('data-theme','dark');
    }
    const setLightMode = () => {
      document.querySelector("body").setAttribute('data-theme','light');
    }
    const toggleDarkMode = () => {
      if(darkmode){
        setDarkMode();
      }else{
        setLightMode();
      }
    }
    
  return (
    <>
        {
             !darkmode ? <MdOutlineDarkMode onClick={changeMode} className='dark_icon'/> :  < MdDarkMode onClick={changeMode} className='dark_icon'/>
          
        }
          
    
        
    </>
  )
}

export default DarkMode