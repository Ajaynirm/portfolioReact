import React, { useState } from 'react'
import { MdOutlineDarkMode} from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
const DarkMode = () => {

  const [darkmode,setdarkmode] = useState(true);
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
             !darkmode ? <IoIosSunny onClick={changeMode} className='dark_icon'/> :  < MdOutlineDarkMode onClick={changeMode} className='dark_icon'/>
          
        }
          
    
        
    </>
  )
}

export default DarkMode