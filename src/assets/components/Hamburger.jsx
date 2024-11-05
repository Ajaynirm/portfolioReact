import React, { useState } from 'react'
import { FaHamburger } from "react-icons/fa";
const Hamburger = () => {
    const [open,setOpen] = useState(false);
    const Change = () => {
        setOpen(!open);
        console.log(open);
    }
  return (
    <>
      <FaHamburger onClick={Change}/>
    
    </>
  )
}

export default Hamburger