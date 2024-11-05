import React, { useState } from 'react'
import { MdOutlineDarkMode,MdDarkMode } from "react-icons/md";

const DarkMode = () => {
    const [darkmode,setdarkmode] = useState(false);
    const changeMode = () => {
        setdarkmode(!darkmode);
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